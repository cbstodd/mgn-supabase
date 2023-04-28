import { Timestamp } from 'rxjs';

const currentDate: number = Date.now();

export class MyGift {

    constructor(
      // uuid: string,
      // gift_id: string,
      title: string,
      summary: string,
      // url: string,
      // image_url: string,
      price: number,
      // purchased_by: string | null,
      created_at: Timestamp<string> | null,
      updated_at: Timestamp<string> | null,
      // likes: string[] | null,
      // like_amount: number | 0,
    ) {

    }
}
