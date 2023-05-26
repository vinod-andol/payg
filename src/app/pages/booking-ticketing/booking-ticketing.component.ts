import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';
import {  TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking-ticketing',
  templateUrl: './booking-ticketing.component.html',
  styleUrls: ['./booking-ticketing.component.scss']
})
export class BookingTicketingComponent implements OnInit, OnDestroy{

  active = true
  editor!: Editor;
  html!: '';
  modalRef?: BsModalRef;
  selectedData : any =[];
  itemform;
  list = [
    {item: 'Name*', type: 'text', placeholder: 'Enter Your Full Name' },  
  ];
  addedFormFields!: FormGroup;
  editorFields = [
    {item: 'Organised By', placeholder: 'Organiser name here' },
    {item: 'Organiser Contact', placeholder: 'Enter contact number here (Optional)'},
    {item: 'Organiser email', placeholder: 'Enter email here (Optional)'},
  ]

  items: string[] = [
    'Text ',
    'Numbers',
    'Email',
    'Phone Number',
    'Pincode',
    'Dropdown',
    'Date Picker'
  ];

  public eventField: EventEmitter<any> = new EventEmitter();
  constructor(private modalService: BsModalService, private formBuilder: FormBuilder) {
    this.itemform = this.formBuilder.group({
      fieldName: ""
      })
  }


 
  openModal(template: TemplateRef<any>, ind:any) {
    const initialState = {
      list: [
        {"tag":'Count',"value":this.list.length}
      ]
    };
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-md' })
    );

  }



  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  removeInput(ind: any){

  }

  addCustomFields(item:any){
    this.triggerEvent(item.value.fieldName);
    this.list.push(item.value.fieldName)
    this.modalService.hide();

  }

  triggerEvent(item: string) {
    this.eventField.emit(item);
  }

  closeModel(){
    this.modalService.hide();
  }
 
  onHidden(): void {
    
  }
  onShown(): void {
    
  }
  isOpenChange(): void {
   
  }

}
