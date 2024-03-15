import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";



import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { OneComponent } from "./one/one.component";
import { TwoComponent } from "./two/two.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
 
@NgModule({
    declarations:[
        AppComponent,
        HeaderComponent,
        OneComponent,
        TwoComponent,
    ],
    imports : [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
        
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}