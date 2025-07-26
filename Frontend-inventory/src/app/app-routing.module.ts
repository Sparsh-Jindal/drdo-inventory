import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { LocationListComponent } from './location-list/location-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { InventoryFormComponent } from './inventory-form/inventory-form.component';
import { InventoryItemListComponent } from './inventory-item-list/inventory-item-list.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LocationFormComponent } from './location-form/location-form.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageProjectComponent } from './manage-project/manage-project.component';
import { ManageLocationComponent } from './manage-location/manage-location.component';
import { ManageItemComponent } from './manage-item/manage-item.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { CondemnedItemsComponent } from './condemned-items/condemned-items.component';
import { ConsumableSectionComponent } from './consumable-section/consumable-section.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { UpdateLocationComponent } from './update-location/update-location.component';
import { UpdatedItemComponent } from './updated-item/updated-item.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  }, // default path
  {
    path: 'user-list',
    component: UserListComponent,
  },
  // for Box 2
  {
    path: 'location-list',
    component: LocationListComponent,
  },
  {
    path: 'project-list',
    component: ProjectListComponent,
  },
  {
    path: 'inventory-form',
    component: InventoryFormComponent,
    canActivate: [AdminAuthGuardService],
  },
  {
    path: 'inventory-list',
    component: InventoryItemListComponent,
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [AdminAuthGuardService],
  },
  {
    path: 'project-form',
    component: ProjectFormComponent,
    canActivate: [AdminAuthGuardService],
  },
  {
    path: 'user-form',
    component: UserFormComponent,
    canActivate: [AdminAuthGuardService],
  },
  {
    path: 'location-form',
    component: LocationFormComponent,
    canActivate: [AdminAuthGuardService],
  },
  {
    path: 'manage-user',
    component: ManageUserComponent,
    canActivate: [AdminAuthGuardService],
  },
  {
    path: 'manage-project',
    component: ManageProjectComponent,
    canActivate: [AdminAuthGuardService],
  },
  {
    path: 'manage-location',
    component: ManageLocationComponent,
    canActivate: [AdminAuthGuardService],
  },
  {
    path: 'manage-item',
    component: ManageItemComponent,
    canActivate: [AdminAuthGuardService],
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent,
  },
  {
    path: 'condemned-items',
    component: CondemnedItemsComponent,
  },
  {
    path: 'consumable-items',
    component: ConsumableSectionComponent,
  },
  {
    path: 'update-user/:id',
    component: UpdateUserComponent,
    canActivate: [AdminAuthGuardService],
  },
  {
    path: 'update-project/:id',
    component: UpdateProjectComponent,
    canActivate: [AdminAuthGuardService],
  },
  {
    path: 'update-location/:id',
    component: UpdateLocationComponent,
    canActivate: [AdminAuthGuardService],
  },
  {
    path: 'update-item/:id',
    component: UpdatedItemComponent,
    canActivate: [AdminAuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
