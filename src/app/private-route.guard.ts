import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

export const privateRouteGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const platformId = inject(PLATFORM_ID);
  if (isPlatformBrowser(platformId)) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(user.id);

    if (user.user?.id !== 1) {
      router.navigateByUrl('/signup');
      return false;
    }
  }
  return true;
};
