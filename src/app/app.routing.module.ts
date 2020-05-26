import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PhotoListComponent } from './photos/photo-list/photo-list.component'
import { PhotoFormComponent } from './photos/photo-form/photo-form.component'
import { NotFoundComponent } from './errors/not-found/not-found.component'
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver'
import { SignInComponent } from './home/signin/signin.component'
import { SignUpComponent } from './home/signup/signup.component'

import { AuthGuard } from './core/auth/auth.guard'

const routes: Routes = [
    { 
        path: '', 
        component: SignInComponent,
        canActivate: [AuthGuard]
    },
    { path: 'signup', component: SignUpComponent },
    { 
        path: 'user/:userName', 
        component: PhotoListComponent, 
        resolve: {
            photos: PhotoListResolver // manda pro component PhotoListComponent já com a lista de photos ou vazio
        }
    }, 
    { path: 'p/add', component: PhotoFormComponent },
    { path: '**', component: NotFoundComponent }
]

@NgModule({
    // forRoot seria a rota raiz da nossa aplicacao
    // configura o routerModule levando em consideracao as nossas rotas
    imports: [ RouterModule.forRoot(routes) ],
    // o router-outlet precisa das diretivas que existem aqui, quem importar o AppRoutingModule
    // vai ganhar de quebra o RouterModule
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
