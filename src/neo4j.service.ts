import {Injectable, Inject} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from "rxjs";
import {Neo4jSettings} from "./neo4j-settings.model";

@Injectable()
export class Neo4jService {
    private defaultOptions: RequestOptions;

    constructor(
        private http: Http,
        @Inject('Neo4jSettings') private settings: Neo4jSettings
    ) {
		let headers = new Headers();
		headers.append('Authorization', 'Basic ' + btoa(`${this.settings.username}:${this.settings.password}`));
		headers.append('Content-Type', 'application/json');
		this.defaultOptions = new RequestOptions({
			headers: headers
		});
    }

	getNodesByLabel(label: string): Observable<any[]> {
		return this.http.get(`${this.settings.endpoint}/db/data/label/${label}/nodes`, this.defaultOptions)
			.map(res => res.json());
	}
}
