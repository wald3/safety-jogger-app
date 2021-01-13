import { HttpClient } from '@angular/common/http';

export class JoggerScrapper{
	private url = 'https://www.safetyjogger.com';

	constructor(private productCode: string, private http: HttpClient){
	}

	getLink() {
		return new Promise(
			resolve => {
				this.getHtml().subscribe(
					res => {
						let index = res.indexOf('carousel-item active');
						let link = new RegExp(/src\s*=\s*"(.+?)"/)
						let srcSubElem = res.substr(index, 200);
						let [_, linkElem] = link.exec(srcSubElem);
						
						resolve(`${ this.url }${ linkElem }`);
					},
					err => {
						// default image link
						resolve('https://kazut.pl/ru/wp-content/themes/Aether/library/img/default-image.jpg');
					}
				)
			}
		)
	}

	getHtml() {
		return this.http.get(`${this.url}/en/eu/${ this.productCode}`, { responseType: "text"});

	}
}
