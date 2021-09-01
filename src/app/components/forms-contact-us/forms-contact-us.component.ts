import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-forms-contact-us',
  templateUrl: './forms-contact-us.component.html',
  styleUrls: ['./forms-contact-us.component.scss'],
})
export class FormsContactUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.{a-zA-Z0-9\-\.}+$/;

    
      $('#enviar').click(function() {
        var name = $('#name').val();
        var email:any = $('#email').val();
        if (name == "") {
          $(".alert").fadeIn();
          return false;
        }else
        $("#alert").fadeOut();
        if (email == "" || !expr.test(email)) {
          $("#alert").fadeOut();
          return false;
        }
        return true;
      });

    // $('.alert').click(function () {
    //   $(this).fadeOut();
    // });
  }
}
