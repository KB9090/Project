import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable
({
  providedIn: 'root'
})
  export class SpotifyService
  {
    getHeader(query: string)
  {
    const url = 'https://api.spotify.com/v1/' + query;
    let headers = new HttpHeaders();
    headers = headers.append
    (
    'Authorization',
    // tslint:disable-next-line: max-line-length
    "Bearer BQD4K4VNTVlUfECk7N8LxrZgAFUEjK-ijoRNVpPRObJC_sOUeDQIcni5C3vkKCgjXQ12IY9PrHvaix5gYS5LToBnyAMxpCZGZKvwU8qNhBbNr5osBhRSGqGv27qgsCmYQam0ibA62jNkEBmtHDggDwlKBRkZ4w0WrKtHH_KWC2US_GBF1tA8VegNR8BdAdFGopFv"
    );
    return this._http.get(url, { headers });
  }
  // tslint:disable-next-line: variable-name

  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = 'artist')
  {
   const param = '&offset=0' + '&limit=20' + '&type=' + type + '&market=US';
   const query = 'search?query=' + str + param;
    return this.getHeader(query);
  }

  getArtist(id: string) : any
  {
   const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
