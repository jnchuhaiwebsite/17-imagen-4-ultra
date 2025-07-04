<template>
  <!-- PC端用户菜单 -->
  <div class="hidden lg:flex items-center space-x-4">
    <template v-if="isSignedIn">
      <div class="relative user-menu-container">
        <button
          @click="toggleUserMenu"
          class="relative focus:outline-none px-1.5 py-1.5 rounded-lg hover:bg-[#ec2657]/10 hover:shadow-lg hover:shadow-[#ec2657]/20 transition-all"
        >
          <img
            :src="userDisplay?.imageUrl || '/default-avatar.png'"
            :alt="userDisplay?.username ? `${userDisplay.username}'s Profile Picture - SeedancePro` : 'Default User Avatar - SeedancePro'"
            loading="lazy"
            class="w-9 h-9 rounded-full object-cover hover:opacity-80 transition-opacity"
          />
        </button>

        <!-- 用户下拉菜单 -->
        <div
          v-if="showUserMenu"
          class="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50"
        >
          <div class="px-4 py-3 border-b border-baby-pink/20">
            <div class="flex items-center gap-3 mb-2">
              <img
                :src="userDisplay?.imageUrl || '/default-avatar.png'"
                :alt="userDisplay?.username ? `${userDisplay.username}'s Profile Picture - SeedancePro` : 'Default User Avatar - SeedancePro'"
                loading="lazy"
                class="w-10 h-10 rounded-full object-cover ring-2 ring-baby-pink/20"
              />
              <div>
                <p class="text-gray-800 text-sm font-medium">
                  {{ userDisplay?.username }}
                </p>
                <p
                  v-if="userDisplay?.email"
                  class="text-xs text-gray-500 truncate max-w-[160px]"
                >
                  {{ userDisplay?.email }}
                </p>
              </div>
            </div>

            <div class="space-y-1 mt-2">
              <div v-if="vipLastTime" class="flex justify-between">
                <p class="text-xs text-gray-600">VIP expiration time:</p>
                <p class="text-xs text-gray-400">
                  {{ vipLastTime }}
                </p>
              </div>
            </div>
          </div>

          <!-- 菜单选项 -->
          <div class="py-1 border-b border-baby-pink/20">
            <!-- 个人中心 -->
            <NuxtLink
              to="/profile"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-baby-pink/10 flex items-center transition-all duration-200 hover:translate-x-1"
              @click="showUserMenu = false"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Personal Center
            </NuxtLink>

            <!-- 我的积分 -->
            <div
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-baby-pink/10 flex items-center justify-between transition-all duration-200 hover:translate-x-1 cursor-pointer"
            >
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.171-.879-1.171-2.303 0-3.182C10.536 7.719 11.768 7.5 12 7.5c.725 0 1.45.22 2.003.659" />
                </svg>
                Credits:
              </div>
              <span class="text-gray-500">{{ points }}</span>
            </div>
          </div>

          <!-- 退出按钮 -->
          <SignOutButton>
            <button
              class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-baby-pink/10 flex items-center transition-all duration-200 hover:translate-x-1 hover:text-red-500"
            >
              <!-- Heroicons: logout/arrow-right-on-rectangle -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 mr-2 transition-transform duration-200 group-hover:scale-110"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              logout
            </button>
          </SignOutButton>
        </div>
      </div>
    </template>
    <template v-else>
      <!-- 登录按钮 -->
      <SignInButton mode="modal">
        <button id="bindLogin"
          :disabled="isAuthLoading"
          class="px-4 py-2 rounded-lg bg-gradient-to-r from-[#ec2657] to-[#ec2657] text-white hover:opacity-90 transition-all text-sm font-medium disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center shadow-md hover:shadow-lg"
        >
          {{ isAuthLoading ? 'Loading...' : 'Log in / Sign up' }}
        </button>
      </SignInButton>
    </template>
  </div>

  <!-- 移动端用户菜单（在导航滑出菜单内）-->
  <template v-if="isMobile">
    <div v-if="isSignedIn" class="pt-4 border-t border-gray-200 flex justify-between">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img
            :src="userDisplay?.imageUrl || '/default-avatar.png'"
            :alt="userDisplay?.username ? `${userDisplay.username}'s Profile Picture - SeedancePro` : 'Default User Avatar - SeedancePro'"
            loading="lazy"
            class="w-10 h-10 rounded-full object-cover ring-2 ring-baby-pink/20"
          />
          <div>
            <p class="text-gray-800 font-medium text-base">
              {{ userDisplay?.username }}
            </p>
            <p
              v-if="userDisplay?.email"
              class="text-xs text-gray-500 max-w-[180px] truncate"
            >
              {{ userDisplay?.email }}
            </p>

            <div class="mt-1">
              <div v-if="vipLastTime" class="flex justify-between">
                <p class="text-xs text-gray-600">VIP expiration time:</p>
                <p class="text-xs text-gray-400">
                  {{ vipLastTime }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 移动端菜单选项 -->
      <div class="mt-4 space-y-2">
        <!-- 个人中心 -->
        <NuxtLink
          to="/profile"
          class="block w-full py-2 px-4 rounded-lg bg-baby-pink/10 hover:bg-baby-pink/20 transition-all duration-200 text-sm font-medium text-gray-700 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Personal Center
        </NuxtLink>

        <!-- 我的积分 -->
        <div class="w-full py-2 px-4 rounded-lg bg-baby-pink/10 hover:bg-baby-pink/20 transition-all duration-200 text-sm font-medium text-gray-700 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.171-.879-1.171-2.303 0-3.182C10.536 7.719 11.768 7.5 12 7.5c.725 0 1.45.22 2.003.659" />
            </svg>
            Credits:
          </div>
          <span class="text-gray-500">{{ points }}</span>
        </div>
      </div>

      <!-- 退出按钮 -->
      <SignOutButton>
        <button
          class="mt-4 py-2 px-4 flex items-center justify-center gap-2 rounded-lg bg-baby-pink/10 hover:bg-baby-pink/20 transition-all duration-200 hover:scale-[1.02] text-sm font-medium text-red-500">
          <!-- Heroicons: logout/arrow-right-on-rectangle -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 transition-transform duration-200 group-hover:scale-110"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
            </svg>
          logout
        </button>
      </SignOutButton>
    </div>

    <!-- 移动端登录按钮 -->
    <SignInButton v-else mode="modal">
      <button id="bindLogin"
        :disabled="isAuthLoading"
        class="mt-4 w-full py-3 rounded-lg bg-gradient-to-r from-blue-medium to-blue-dark text-white hover:opacity-90 transition-all text-base font-medium disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center shadow-md hover:shadow-lg"
      >
        {{ isAuthLoading ? 'Loading...' : 'Log in / Sign up' }}
      </button>
    </SignInButton>
  </template>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useClerkAuth } from '~/utils/auth'
import { useUserStore } from '~/stores/user';
import { setUserInfo, loginAuth } from '~/api/index'

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
});

// 用户存储
const userStore = useUserStore();
console.log('userStore初始化:', userStore);

// 状态管理
const vipLastTime = ref("");
const showUserMenu = ref(false);
const isAuthLoading = ref(true);

// 计算总积分
const points = computed(() => {
  const userInfo = userStore.userInfo;
  if (!userInfo) return 0;
  
  const freeLimit = userInfo.free_limit || 0;
  const remainingLimit = userInfo.remaining_limit || 0;
  return freeLimit + remainingLimit;
});

// 引入auth认证
const { 
  user, 
  isSignedIn, 
  initAuth,
  on,
  getToken,
  clerk
} = useClerkAuth();

// 获取用户信息
const getUserInfo = async () => {
  try {
    console.log('准备调用fetchUserInfo')
    const userData = await userStore.fetchUserInfo();
    console.log('fetchUserInfo执行完成')
    console.log('userData',userData)
    if (userData) {
      // 更新用户信息
      vipLastTime.value = userData.vipLastTime || "";
    }
  } catch (error) {
    console.error("获取用户信息失败:", error);
  }
}

// 转换用户数据为组件需要格式
interface User {
  username: string;
  email?: string;
  imageUrl?: string;
}

const userDisplay = computed<User | null>(() => {
  if (!user.value) return null;

  return {
    username: user.value.username || user.value.firstName || "User",
    email: user.value.emailAddresses?.[0]?.emailAddress,
    imageUrl: user.value.imageUrl,
  };
});

// 切换用户菜单
const toggleUserMenu = async () => {

  // 如果菜单关闭，在打开时刷新用户信息
  if (!showUserMenu.value) {
    // 显示菜单
    showUserMenu.value = true;

    // 刷新用户信息
    try {
      await getUserInfo();
    } catch (err) {
      console.error("Failed to refresh user info:", err);
    }
  } else {
    // 关闭菜单 
    showUserMenu.value = false;
  }
};

onMounted(async () => {
  try {
    // 初始化认证
    initAuth();

    // 设置一个超时，确保loading状态不会永久存在
    setTimeout(() => {
      isAuthLoading.value = false;
    }, 5000);
    
    // 如果已经登录，立即获取用户信息
    if (isSignedIn.value) {
      await getUserInfo();
    }   
    // 监听登录事件
    on('login', async (user: any) => {
      isAuthLoading.value = false;
      
      let from_login = "email";
      // 如果是github
      if (user.externalAccounts && user.externalAccounts[0]?.provider.includes("github")) {
        from_login = "github";
      } else if (user.externalAccounts && user.externalAccounts[0]?.provider.includes("google")) {
        from_login = "google";
      }
      
      const email = user.emailAddresses && user.emailAddresses.length > 0
          ? user.emailAddresses[0].emailAddress
          : (user.externalAccounts && user.externalAccounts[0]?.emailAddress || '');
        
      const avatar = user.imageUrl || 
        (user.externalAccounts && user.externalAccounts[0]?.imageUrl || '');
      
      const nickname = user.username || 
        (user.externalAccounts && user.externalAccounts[0]?.username || '') || 
        user.fullName || '';

      const token = await getToken.value();
      loginAuth({
        uuid: user.id,
        email,
        from_login,
        avatar,
        nickname,
        from_type: 0,
        token
      }).then(async () => {
        await getUserInfo();
      }).catch((error) => {
        console.error('登录认证失败:', error);
        isAuthLoading.value = false;
      });
    });
    
    on('logout', async () => {
      // 清除用户界面状态
      vipLastTime.value = "";
      isAuthLoading.value = false;
    });

    // 监听Clerk加载完成事件，更新认证加载状态
    on('clerkLoaded', async (isSignedIn: boolean) => {
      isAuthLoading.value = false;
      // 如果Clerk加载完成且用户已登录，获取用户信息
      
      if (isSignedIn) {
        await getUserInfo();
      }
    });
    
    // 监听错误事件，确保用户界面不会一直处于加载状态
    on('error', (error: any) => {
      isAuthLoading.value = false;
      console.error("认证系统错误:", error);
    });

    // 点击外部关闭用户菜单
    if (process.client) {
      document.addEventListener("click", (event: MouseEvent) => {
        // 如果点击的不是用户菜单区域，则关闭菜单
        const target = event.target as HTMLElement;
        if (
          showUserMenu.value &&
          target &&
          !target.closest(".user-menu-container")
        ) {
          showUserMenu.value = false;
        }
      });
    }
  } catch (err) {
    isAuthLoading.value = false;
    console.error("组件挂载时加载用户信息失败:", err);
  }
});
</script> 