import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(private toastr: ToastrService) { }

  showSuccess(message: string) {
    this.toastr.success(message, 'success' );
  }

  showError(message: string,) {
    this.toastr.error(message, 'error' );
  }


}
