import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Headers,RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class EnvsetService {

  private headers = null; 
  private options = null;
  
  constructor(private http:Http) {

      this.headers = new Headers({'Content-Type':'application/json'}); 
      this.options = new RequestOptions({headers:this.headers});
   }

  //서비스그룹 정보를 얻는다.
  getServiceGrp():Observable<any>{
      
    //let headers = new Headers({'Content-Type':'application/json'});
    //let options = new RequestOptions({headers:headers});

    let url = "envset/angularCallTest.do";
    //let url = "http://localhost:8080/envset/angularCallTest.do";
    //let url = "https://api.github.com/users/seeschweiler";
    
    let param = { id: 'MG00001', name: '모비젠' };

    return  this.http.post(url,param,this.options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);        
  }

  getDataService(svcNm:string,wplcNm:string):Observable<any>{
      //selectService.do      

    let param = {svcNm:svcNm,wplcNm:wplcNm};

    return this.http.post("envset/selectService.do",param,this.options)
            .map(this.extractData)
            .catch(this.handleErrorObservable); 
  }

  getDataSvcGrpTree():Observable<any>{

    let param = {};
    return this.http.post("envset/selectServiceGroupTreeList.do",param,this.options)
              .map(this.extractData)
              .catch(this.handleErrorObservable);
  }
  /* Remark:선택된 사용자 그룹별 서비스 정보를 얻는다.
  */
  getDataSeletedSvc(svcGrpCd:String):Observable<any>{
 
     let param = {svcGrpCd:svcGrpCd};
     return this.http.post("envset/selectUserSetService.do",param,this.options)
                     .map(this.extractData)
                     .catch(this.handleErrorObservable);
  }

  getDataWplcDetail(svcCd:String):Observable<any>{
    let param = {svcCd:svcCd};

    return this.http.post("envset/selectWplc.do",param,this.options)
                    .map(this.extractData)
                    .catch(this.handleErrorObservable);
  }

  private extractData(res:Response){
    let body = res.json();
    return body || {};
  }
  
  private handleErrorObservable(error:Response | any){
      console.error(error.message || error);
      return Observable.throw(error.message || error); 
  }
  

}
