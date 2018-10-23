import { Injectable } from '@angular/core';
import { Item } from "../../../model/Item";
import { Observable } from "rxjs";

@Injectable()
export abstract class AbstractItemsService {

  constructor() { }

  abstract getItems():Observable<Item[]>;

  abstract remove(item: Item):Observable<Item[]>;

}
