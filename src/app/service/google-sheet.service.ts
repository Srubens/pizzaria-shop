import { Injectable } from '@angular/core';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT} from 'google-auth-library';
import { environment } from 'src/environments/environment';

@Injectable()
export class GoogleSheetService {
  private serviceAuth: JWT | any
  private doc: GoogleSpreadsheet | any
  constructor() {
  }

}
