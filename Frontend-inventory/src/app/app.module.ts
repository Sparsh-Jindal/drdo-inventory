import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { HomePageComponent } from './home-page/home-page.component';
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
import { CondemnedItemsComponent } from './condemned-items/condemned-items.component';
import { ConsumableSectionComponent } from './consumable-section/consumable-section.component';
import { UpdateUserComponent } from './update-user/update-user.component';

import { UpdateProjectComponent } from './update-project/update-project.component';
import { UpdateLocationComponent } from './update-location/update-location.component';
import { CommonModule } from '@angular/common';
import { UpdatedItemComponent } from './updated-item/updated-item.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HomePageComponent,
    LocationListComponent,
    ProjectListComponent,
    InventoryFormComponent,
    InventoryItemListComponent,
    AdminPanelComponent,
    ProjectFormComponent,
    UserFormComponent,
    LocationFormComponent,
    ManageUserComponent,
    ManageProjectComponent,
    ManageLocationComponent,
    ManageItemComponent,
    AdminLoginComponent,
    CondemnedItemsComponent,
    ConsumableSectionComponent,
    UpdateUserComponent,
    UpdateProjectComponent,
    UpdateLocationComponent,
    UpdatedItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
