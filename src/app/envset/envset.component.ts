import { Component, OnInit } from '@angular/core';
import {EnvsetService} from './envset.service';
import {Util} from '../share/util';
import $ from 'jquery/dist/jquery';

@Component({
  selector: 'app-envset',
  templateUrl: './envset.component.html',
  styleUrls: ['./envset.component.css']
})


export class EnvsetComponent implements OnInit {

    private cdService:string = '';
    private cdWplnm:string = '';
    private lstCd2Service:Array<Object> = new Array;        //서비스 그룹 조회된 결과값
    private lstSelectedService:Array<Object> = new Array;   //사용자 선택 조회값

    //private wplcDetail:WplcDetailType;
    //private wplcDetail:Object = new Object;
    private wplcDetail:WplcDetail = new WplcDetail();

    private display: boolean = false;
    
  constructor(private envsetService:EnvsetService) { }

  ngOnInit() {
      //this.setDataServiceGrp();
  }

  private setDataServiceGrp():void{
     //this.envsetService.
     this.envsetService.getServiceGrp().subscribe(data => {
          //alert(data.login); 
          alert(data.result); 
     });
  }

  public onClickSetService():void{
      //alert(this.cdService);
        Util.log("전역 공통 모듈 테스트 입니다.");
        this.envsetService.getDataService(this.cdService,this.cdWplnm).subscribe(data =>{
            this.lstCd2Service = data.result;     
        });

  }

  public onClickPopWpcl(svcCd:String,svcNm:String):void{
      //wplcDetail.svcNm  
      
      this.envsetService.getDataWplcDetail(svcCd).subscribe(data => {
            this.display = true;
            this.wplcDetail.setData(svcNm,data.result);
            //this.wplcDetail["svcNm"] = svcNm;
            //this.wplcDetail["datas"] = data.result;
      });
  }

  /* 추후 공통 클래스로 뽑자
  */
  isChecked(value):Boolean{
    let bSelected = false;
    if (value.hasOwnProperty("chcked")){
        if (value["checked"]){
            bSelected = true;
        }
    }
    return bSelected;
  }
  
  private setSelectedService(selSvc,index):void  {
        let bMatch = false; 
        this.lstSelectedService.forEach(function(selectedSvc,selIndex){
            if (selSvc["svcCd"] == selectedSvc["svcCd"]){
                bMatch = true;  
                return false;
            }
        });  

        if (bMatch){
            this.lstSelectedService.push(selSvc);
        }
  }

  //조회리스트에서 필요한 서비스를 선택한다.
  public onClckAddSelectedService():void{
    
      let arSelected:Array<Object> = this.lstCd2Service.filter(this.isChecked);   
      arSelected.forEach(this.setSelectedService);  
  }
}

interface WplcDetailType {
    svcNm: String;
    datas:Array<Object>;
}

class WplcDetail {
    svcNm:String;
    datas:Array<Object>;

    constructor(){
        this.svcNm = "";
        this.datas = new Array<Object>();
    };

    setData(svcNm,datas:Array<Object>){
        this.svcNm = svcNm;
        this.datas = datas;
    }

    getDatas():Array<Object>{
        return this.datas;
    }
} 
