import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService, LoginFormValue } from './auth.service';
import { enviroment } from 'src/environments/environments';
import { Usuario } from 'src/app/core/models';
import { Router } from '@angular/router';
import { skip } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';

describe('Pruebas sobre AuthService', () => {
  let service: AuthService;
  let httpController: HttpTestingController;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,StoreModule.forRoot({})],
    }).compileComponents();
    service = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
    store = TestBed.inject(Store);
  });

  it('El logout debe emitir un authUser null, remover el token del Localstorage y redireccionar al usuario, previo hacer login', () => {
    const spyOnNavigate = spyOn(TestBed.inject(Router), 'navigate');
    const loginFake: LoginFormValue = {
      email: 'test@mail.com',
      password: '123456',
    };
    const MOCK_REQUEST_RESULT: Usuario[] = [
      {
        id: 1,
        apellido: 'apellidotest',
        email: loginFake.email,
        nombre: 'nombretest',
        password: loginFake.password,
        role: 'admin',
        token: 'Mmy8UP3EnFbLMM7kZxN3pdeL44wmDYCSGYRiMEFm',
      },
    ];
    service.login(loginFake);
    httpController
      .expectOne({
        url: `${enviroment.apiBaseUrl}/usuarios?email=${loginFake.email}&password=${loginFake.password}`,
        method: 'GET',
      })
      .flush(MOCK_REQUEST_RESULT);
    service.logout();
    const tokenLs = localStorage.getItem('token');
    expect(tokenLs).toBeNull();
    expect(spyOnNavigate).toHaveBeenCalled();
  });
});
