import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let islogIn=sessionStorage.getItem("isloggedIn");
  const router = inject(Router)
    if(islogIn!="true"){
      router.navigateByUrl("")
      return false
    }
    else{
      return true
    }
};
