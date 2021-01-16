import { NgModule } from "@angular/core";
import { UsersComponent } from './users/users.component';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule
      ],
    declarations:[UsersComponent],
    exports:[UsersComponent],
})
export class ComponentsModule{}