import { Injectable ,Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  message={

  };
  constructor() {

   }

   setMessage(data: { name: string; }[])
  {
    this.message=data;
  }

   getMessage()
   {
     return this.message;
   }


}
