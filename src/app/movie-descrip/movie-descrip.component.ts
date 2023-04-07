import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie-descrip',
  templateUrl: './movie-descrip.component.html',
  styleUrls: ['./movie-descrip.component.css']
})
export class MovieDescripComponent {
  public sharedVariable: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.sharedVariable = params['sharedVariable'];
    });

    console.log(this.sharedVariable);
}
}
