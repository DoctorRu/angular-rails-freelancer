import {Component} from "@angular/core";
import {Document} from "./documents";


@Component({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: 'documents.component.html',
    styleUrls: ['documents.component.css']
})

export class DocumentsComponent {
    
    pageTitle: string = "Document Dashboard";
    
    documents: Document[] = [
        {
            title: "My First Doc",
            description: 'First document description',
            file_url: 'http://google.com',
            updated_at: '11/11/16',
            image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg'
        },
        {
            title: "My second Doc",
            description: 'Second document description',
            file_url: 'http://duckduckgo.com',
            updated_at: '14/03/17',
            image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg'
        },
        {
            title: "My third Doc",
            description: 'Third document description',
            file_url: 'http://bing.com',
            updated_at: '26/09/18',
            image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg'
        }
    ]
}
