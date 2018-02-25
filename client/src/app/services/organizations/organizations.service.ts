import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Organization } from '../../essences/Organization';

@Injectable()
export class OrganizationsService {

  protected domainURI = 'http://localhost:5000';

  protected serverRoutes = {
    index(): string {
      return this.domainURI + '/organizations'
    },
    store(): string {
      return this.domainURI + '/organizations'
    },
    show(id: number): string {
      return this.domainURI + '/organizations/' + id
    },
    update(id: number): string {
      return this.domainURI + '/organizations/' + id
    },
    delete(id: number): string {
      return this.domainURI + '/organizations/' + id
    }
  };

  constructor(private http: HttpClient) { }

  index(): Observable<Organization[]>  {
    return this.http.get<Organization[]>(this.serverRoutes.index());
  }

  show(id: number): Observable<Organization>  {
    return this.http.get<Organization>(this.serverRoutes.show(id));
  }

  update(id: number, data: any): any {
    return this.http.put(this.serverRoutes.update(id), data);
  }

  store(data: any): any {
    return this.http.post(this.serverRoutes.store(), data);
  }

  delete(id: number): any {
    return this.http.delete(this.serverRoutes.delete(id));
  }
}
