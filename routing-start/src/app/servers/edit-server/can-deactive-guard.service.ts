import { Observable } from "rxjs/Observable";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "src/app/auth.service";

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{

    canDeactivate(component: CanComponentDeactivate,
                currentRoute: ActivatedRouteSnapshot,
                currentstate: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                    return component.canDeactivate();
                }
}