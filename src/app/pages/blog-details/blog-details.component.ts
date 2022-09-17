import { Component, OnInit } from '@angular/core';
import { SharedModule } from "src/app/shared/shared.module";
import { BlogService } from 'src/app/shared/blog.service';
import { Blog } from 'src/app/shared/blog.model';
import { ActivatedRoute, Routes, Router, NavigationEnd } from "@angular/router";
import { SeoService } from 'src/app/shared/seo.service';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  mySubscription: any;
  blogList:any = [];

  id: string;
  author: string;
  topic: string;
  comment: string;
  upload: string;
  dater: string;
  date: Date;

  

  constructor(
    public blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
    private seoService: SeoService,
    private metaService:Meta,
    private titleService:Title
  ) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        
        this.router.navigated = false;
      }
    });

  
    this.id= localStorage.getItem('blogId');
    this.topic= localStorage.getItem('blogTopic');
    this.upload= localStorage.getItem('blogUpload');
    this.comment= localStorage.getItem('blogComment');
    this.author= localStorage.getItem('blogAuthor');
    this.dater = localStorage.getItem('blogDate');

    this.date = new Date(this.dater);
  }

  ngOnInit(): void {
    
    this.getBlog()
    this.metaService.updateTag(
      { name: 'description', content: this.comment }
    );

    this.titleService.setTitle(this.topic);
    this.metaService.updateTag({ property: 'og:title', content: this.topic});
    this.metaService.updateTag({ property: 'og:description', content: this.comment});
    this.metaService.updateTag({ property: 'og:url', content: "https://www.wonderdoubleglobal.com/blog/details/"+this.id });
    this.metaService.updateTag({ property: 'og:image:alt', content: this.topic });
    this.metaService.updateTag({ property: 'og:image', content: this.upload });

  }
  

  getBlog(){
    this.blogService.getBlogMin(12).subscribe((data) => {
      this.blogList = data;
    })    
  }

  redirect(id, topic, upload, comment){
    localStorage.setItem('blogId', id);
    localStorage.setItem('blogTopic', topic);
    localStorage.setItem('blogUpload', upload);
    localStorage.setItem('blogComment', comment);
    
    this.router.navigate(['/blog/details/'+id]);
  }

}
