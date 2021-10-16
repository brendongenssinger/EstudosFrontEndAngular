import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  httpOptions =
    {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json; charset=utf-8',
          'ig-set-password-encryption-web-key-id': '227',
          'ig-set-password-encryption-web-pub-key': '694af676039883357584aedc1d20c92d413474ade97927c122dcbf5cc3543f01',
          'ig-set-password-encryption-web-key-version': '10',
          'Vary': 'Accept-Language, Cookie, Accept-Encoding',
          'Content-Language': 'en',
          'Date': 'Sat, 31 Jul 2021 00:15:16 GMT',
          'Content-Encoding': 'gzip',
          'content-security-policy': "report-uri https://www.instagram.com/security/csp_report/; default-src 'self' https://www.instagram.com; img-src data: blob: https://*.fbcdn.net https://*.instagram.com https://*.cdninstagram.com https://*.facebook.com https://*.fbsbx.com https://*.giphy.com; font-src data: https://*.fbcdn.net https://*.instagram.com https://*.cdninstagram.com; media-src 'self' blob: https://www.instagram.com https://*.cdninstagram.com https://*.fbcdn.net; manifest-src 'self' https://www.instagram.com; script-src 'self' https://instagram.com https://www.instagram.com https://*.www.instagram.com https://*.cdninstagram.com wss://www.instagram.com https://*.facebook.com https://*.fbcdn.net https://*.facebook.net 'unsafe - inline' 'unsafe - eval' blob:; style-src 'self' https://*.www.instagram.com https://www.instagram.com 'unsafe - inline'; connect-src 'self' https://instagram.com https://www.instagram.com https://*.www.instagram.com https://graph.instagram.com https://*.graph.instagram.com https://graphql.instagram.com https://*.cdninstagram.com https://api.instagram.com https://i.instagram.com https://*.i.instagram.com wss://www.instagram.com wss://edge-chat.instagram.com https://*.facebook.com https://*.fbcdn.net https://*.facebook.net chrome-extension://boadgeojelhgndaghljhdicfkmllpafd blob:; worker-src 'self' blob: https://www.instagram.com; frame-src 'self' https://instagram.com https://www.instagram.com https://*.instagram.com https://staticxx.facebook.com https://www.facebook.com https://web.facebook.com https://connect.facebook.net https://m.facebook.com; object-src 'none'; upgrade-insecure-requests",
          'cross-origin-embedder-policy-report-only': 'require-corp;report-to="coep"',
          'Connection': 'keep-alive',
        })
    };

  title = 'SaraControleInstagram';
  _code = "AQAedGo82CQSO9sEEhtDpREFxQToSmbL6uKYgfqbxqptl4g-qBMPyN8D7nZwsZCATdhZ7OAgMLVXLZ7ylnefGcJBxqqgLV8ChtlzRledFUyId__i-JlTnkHWaEFvdn6jOyrUIr4_gbw-aNuYNB2upwHCloRVCsBsCTe-oSAROTS8vrGTTllxBHQD7ql1mlxfY97qx5Z-nlOjy2oDeWVD6iPL1wUfniE8NqiNdJxyhLzInw";

  teste: any = {
    client_id: '331634231992495',
    client_secret: '112aabacd3304ebc3779ea1453220195',
    grant_type: 'authorization_code',
    redirect_uri: 'https://github.com/brendongenssinger',
    code: this._code
  };

  tokenInstagram = 'IGQVJYZAzU3c0wzVDZAJU0t5Q2w1MTlDT1p4dG5WQlN5amNZAenU0ZAk9rNml1d1g4M1h4WDFPSTB4VnRKMk1yUlFlLVpQMXdkLTJEVy10bjhRMU5ZAM0pfQlp3cXEyanVVTUZAPLVpyMTNOckh0anQ3QmlnSAZDZD';



  constructor(private http: HttpClient) {


    var result = this.http.post('https://api.instagram.com/oauth/access_token', this.teste, this.httpOptions)
      .subscribe(
        x => {
          return x;
        }, error => {
          console.log(error);
        })
    console.log(result);
  }
}
