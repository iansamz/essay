import { Injectable } from '@angular/core';

@Injectable()
export class ClientService {

  constructor() { }
  
  
servicesA = [
    { value: 0, name:"Academic Paper Writing", price:12 }, 
    { value: 1, name:"Rewriting", price:9 },
    { value: 2, name:"Math/Physics/Economic Problems", price:9 },
    { value: 3, name:"Editing", price:5 },
    { value: 4, name:"Copywriting", price:4 },
    { value: 5, name:"Proofreading", price:6 },
    { value: 6, name:"Admission Services", price:24 },
    { value: 7, name:"Dissertation", price:25 },
    { value: 8, name:"Resume/CV Services", price:21},
    { value: 9, name:"Multiple Choices Questions", price:25 }
    ];

    papersA = [
      {
        array:[
          { name:"Essay", value:0 },
          { name:"UK Essay", value:1 },
          { name:"Term Paper", value:2 },
          { name:"Research Paper", value:3 },
          { name:"Coursework", value:4 },
          { name:"Book Report", value:5 },
          { name:"Book Review", value:6 },
          { name:"Movie Review", value:7 },
          { name:"Research Summary", value:8 },
          { name:"Thesis", value:9 },
          { name:"Case study", value:10 },
          { name:"Lab Report", value:11 },
          { name:"Power point Presentation", value:12 },
          { name:"Article", value:13 },
          { name:"Article Critique", value:14 },
          { name:"Annotated bibliography", value:15 },
          { name:"Reaction Paper", value:16 }
        ]
      },
      {
        array:[
          { name:"Essay", value:0 },
          { name:"UK Essay", value:1 },
          { name:"Term Paper", value:2 },
          { name:"Research Paper", value:3 },
          { name:"Coursework", value:4 },
          { name:"Book Report", value:5 },
          { name:"Book Review", value:6 },
          { name:"Movie Review", value:7 },
          { name:"Research Summary", value:8 },
          { name:"Dissertation", value:9 },
          { name:"Thesis", value:10 },
          { name:"Dissertation/Thesis Proposal", value:11 },
          { name:"Case study", value:12 },
          { name:"Lab Report", value:13 },
          { name:"Article", value:14 },
          { name:"Article Critique", value:15 },
          { name:"Annotated bibliography", value:16 },
          { name:"Reaction Paper", value:17 }
        ]
      },
      {
        array:[
          { name: "Calculation", value:0 },
          { name: "Proof", value:1 },
          { name: "Research", value:2 },
          { name: "Equation", value:3 },
          { name: "Optimization", value:4 },
          { name: "Math Modelling", value:5}
        ]
      },
      {
        array:[
          { name:"Essay", value:0 },
          { name:"Term Paper", value:1 },
          { name:"Research Paper", value:2 },
          { name:"Coursework" , value:3 },
          { name:"Book Report", value:4 },
          { name:"Book Review", value:5 },
          { name:"Movie Review", value:6 },
          { name:"Research Summary", value:7 },
          { name:"Thesis", value:8 },
          { name:"Case study", value:9 },
          { name:"Lab Report", value:10 },
          { name:"Article", value:11 },
          { name:"Article Critique", value:12 },
          { name:"Annotated bibliography", value:13 },
          { name:"Reaction Paper", value:14 }
        ]
      },
      {
        array:[
          { name: "Press Release", value:0 },
          { name: "Website Content", value:1 },
          { name: "News article", value:2 },
          { name: "BlogPost", value:3 },
          { name: "Website Review", value:4 },
          { name: "Product Review", value:5 }
        ]
      },
      {
        array:[
          { name:"Essay", value:0 },
          { name:"UK Essay", value:1 },
          { name:"Term Paper", value:2 },
          { name:"Research Paper", value:3 },
          { name:"Coursework", value:4 },
          { name:"Book Report", value:5 },
          { name:"Book Review", value:6 },
          { name:"Movie Review", value:7 },
          { name:"Research Summary", value:8 },
          { name:"Dissertation", value:9 },
          { name:"Thesis", value:10 },
          { name:"Dissertation/Thesis proposal", value:11 },
          { name:"Case study", value:12 },
          { name:"Lab Report", value:13 },
          { name:"Article", value:14 },
          { name:"Article Critique", value:15 },
          { name:"Annotated bibliography", value:16 },
          { name:"Reaction Paper", value:17 }
        ]
      },
      {
        array:[
          { name: "Formatting", value:0 },
          { name: "Admission Essay", value:1 },
          { name: "Scholarship Essay", value:2 },
          { name: "Personal statement", value:3 },
          { name: "Editing", value:4 },
          { name: "Power Point Presentation", value:5 }
        ]
      },
      {
        array:[
          { name: "Dissertation", value:0 },
          { name: "Dissertation/Thesis proposal", value:1 },
          { name: "Dissertation Chapter - Abstract", value:2 },
          { name: "Dissertation Chapter - Introduction", value:3 },
          { name: "Dissertation Chapter - Literature Review", value:4 },
          { name: "Dissertation Chapter - Results", value:5 },
          { name: "Dissertation Chapter - Discussion", value:6 },
          { name: "Formatting", value:7 },
          { name: "Editing", value:8 },
          { name: "Proofreading", value:9 },
          { name: "Power Point Presentation", value:10 }
        ]
      },
      {
        array:[
          
        ]
      },
      {
        array:[
          { name: "Multiple Choice Questions(Time-framed)", value:0 },
          { name: "Multiple Choice Questions(Non--time-framed)", value:1 }
        ]
      }
    ];
    
    academicLevelA = [
      {
        array:[
          { name:"High School", value:1, index:0 },
          { name:"Freshman", value:1, index:1 },
          { name:"Sophomore", value:1, index:2 },
          { name:"Junior", value:1, index:3 },
          { name:"Senior", value:1.3, index:4 },
          { name:"Masters", value:1.5, index:5 },
          { name:"Doctoral", value:1.5, index:6 }
        ]
      },
      {
        array:[
          { name:"High School", value:1, index:0 },
          { name:"Freshman", value:1, index:1 },
          { name:"Sophomore", value:1, index:2 },
          { name:"Junior", value:1, index:3 },
          { name:"Senior", value:1.3, index:4 },
          { name:"Masters", value:1.5, index:5 },
          { name:"Doctoral", value:1.5, index:6 }
        ]
      },
      {
        array:[
          { name:"High School", value:1, index:0 },
          { name:"Freshman", value:1, index:1 },
          { name:"Sophomore", value:1, index:2 },
          { name:"Junior", value:1, index:3 },
          { name:"Senior", value:1.3, index:4 },
          { name:"Masters", value:1.5, index:5 },
          { name:"Doctoral", value:1.5, index:6 }
        ]
      },
      {
        array:[
          { name:"High School", value:1, index:0 },
          { name:"Freshman", value:1, index:1 },
          { name:"Sophomore", value:1, index:2 },
          { name:"Junior", value:1, index:3 },
          { name:"Senior", value:1.3, index:4 },
          { name:"Masters", value:1.5, index:5 },
          { name:"Doctoral", value:1.5, index:6 }
        ]
      },
      {
        array:[
          { name: "Doctoral", value:1, index:0 }
        ]
      },
      {
        array:[
          { name:"High School", value:1, index:0 },
          { name:"Freshman", value:1, index:1 },
          { name:"Sophomore", value:1, index:2 },
          { name:"Junior", value:1, index:3 },
          { name:"Senior", value:1.3, index:4 },
          { name:"Masters", value:1.5, index:5 },
          { name:"Doctoral", value:1.5, index:6 }
        ]
      },
      {
        array:[
          { name:"College", value:1, index:0 },
          { name:"Graduate", value:1.1, index:1 },
          { name:"MBA", value:1.1, index:2 },
          { name:"Law", value:1.2, index:3 },
          { name:"Medical", value:1.2, index:4 }
        ]
      },
      {
        array:[
          { name:"Associate's", value:1, index:0 },
          { name:"Bachelor's", value:1.25, index:1 },
          { name:"Master's", value:1.5, index:2 },
          { name:"Doctoral", value:1.5, index:3 }
        ]
      },
      {
        array:[
          
        ]
      },
      {
        array:[
          { name:"High School", value:1, index:0 },
          { name:"Freshman", value:1, index:1 },
          { name:"Sophomore", value:1, index:2 },
          { name:"Junior", value:1, index:3 },
          { name:"Senior", value:1.3, index:4 },
          { name:"Masters", value:1.5, index:5 },
          { name:"Doctoral", value:1.5, index:6 }
        ]
      }
    ];
    urgencyA = [
      {
        array:[
          { name: "14 days", time: 336, value:1, index:0 },
          { name: "10 days", time: 240, value:1.2, index:1 },
          { name: "7 days", time: 168, value:1.3, index:2 },
          { name: "6 days", time: 144, value:1.4, index:3 },
          { name: "5 days", time: 120, value:1.45, index:4 },
          { name: "3 days", time: 72, value:1.5, index:5 },
          { name: "48 hrs", time: 48, value:1.6, index:6 },
          { name: "24 hrs", time: 24, value:1.7, index:7 },
          { name: "18 hrs", time: 18, value:1.75, index:8 },
          { name: "12 hrs", time: 12, value:1.8, index:9 },
          { name: "8 hrs", time: 8, value:1.85, index:10 },
          { name: "6 hrs", time: 6, value:1.9, index:11 }
        ]
      },
      {
        array:[
          { name: "14 days", time: 336, value:1, index:0 },
          { name: "10 days", time: 240, value:1.2, index:1 },
          { name: "7 days", time: 168, value:1.3, index:2 },
          { name: "6 days", time: 144, value:1.4, index:3 },
          { name: "5 days", time: 120, value:1.45, index:4 },
          { name: "3 days", time: 72, value:1.5, index:5 },
          { name: "48 hrs", time: 48, value:1.6, index:6 },
          { name: "24 hrs", time: 24, value:1.7, index:7 },
          { name: "18 hrs", time: 18, value:1.75, index:8 },
          { name: "12 hrs", time: 12, value:1.8, index:9 },
          { name: "8 hrs", time: 8, value:1.85, index:10 },
          { name: "6 hrs", time: 6, value:1.9, index:11 }
        ]
      },
      {
        array:[
          { name: "14 days", time: 336, value:1, index:0 },
          { name: "10 days", time: 240, value:1.2, index:1 },
          { name: "7 days", time: 168, value:1.3, index:2 },
          { name: "6 days", time: 144, value:1.4, index:3 },
          { name: "5 days", time: 120, value:1.45, index:4 },
          { name: "3 days", time: 72, value:1.5, index:5 },
          { name: "48 hrs", time: 48, value:1.6, index:6 },
          { name: "24 hrs", time: 24, value:1.7, index:7 },
          { name: "18 hrs", time: 18, value:1.75, index:8 },
          { name: "12 hrs", time: 12, value:1.8, index:9 },
          { name: "8 hrs", time: 8, value:1.85, index:10 },
          { name: "6 hrs", time: 6, value:1.9, index:11 }
        ]
      },
      {
        array:[
          { name: "14 days", time: 336, value:1, index:0 },
          { name: "10 days", time: 240, value:1.2, index:1 },
          { name: "7 days", time: 168, value:1.3, index:2 },
          { name: "6 days", time: 144, value:1.4, index:3 },
          { name: "5 days", time: 120, value:1.45, index:4 },
          { name: "3 days", time: 72, value:1.5, index:5 },
          { name: "48 hrs", time: 48, value:1.6, index:6 },
          { name: "24 hrs", time: 24, value:1.7, index:7 },
          { name: "18 hrs", time: 18, value:1.75, index:8 },
          { name: "12 hrs", time: 12, value:1.8, index:9 },
          { name: "8 hrs", time: 8, value:1.85, index:10 },
          { name: "6 hrs", time: 6, value:1.9, index:11 }
        ]
      },
      {
        array:[
          { name: "14 days", time: 336, value:1, index:0 },
          { name: "10 days", time: 240, value:1.2, index:1 },
          { name: "7 days", time: 168, value:1.3, index:2 },
          { name: "6 days", time: 144, value:1.4, index:3 },
          { name: "5 days", time: 120, value:1.45, index:4 },
          { name: "3 days", time: 72, value:1.5, index:5 },
          { name: "48 hrs", time: 48, value:1.6, index:6 },
          { name: "24 hrs", time: 24, value:1.7, index:7 },
          { name: "18 hrs", time: 18, value:1.75, index:8 },
          { name: "12 hrs", time: 12, value:1.8, index:9 }
        ]
      },
      {
        array:[
          { name: "14 days", time: 336, value:1, index:0 },
          { name: "10 days", time: 240, value:1.2, index:1 },
          { name: "7 days", time: 168, value:1.3, index:2 },
          { name: "6 days", time: 144, value:1.4, index:3 },
          { name: "5 days", time: 120, value:1.45, index:4 },
          { name: "3 days", time: 72, value:1.5, index:5 },
          { name: "48 hrs", time: 48, value:1.6, index:6 },
          { name: "24 hrs", time: 24, value:1.7, index:7 },
          { name: "18 hrs", time: 18, value:1.75, index:8 },
          { name: "12 hrs", time: 12, value:1.8, index:9 },
          { name: "8 hrs", time: 8, value:1.85, index:10 },
          { name: "6 hrs", time: 6, value:1.9, index:11 }
        ]
      },
      {
        array:[
          { name: "14 days", time: 336, value:1, index:0 },
          { name: "10 days", time: 240, value:1.2, index:1 },
          { name: "7 days", time: 168, value:1.3, index:2 },
          { name: "6 days", time: 144, value:1.4, index:3 },
          { name: "5 days", time: 120, value:1.45, index:4 },
          { name: "3 days", time: 72, value:1.5, index:5 },
          { name: "48 hrs", time: 48, value:1.6, index:6 },
          { name: "24 hrs", time: 24, value:1.7, index:7 },
          { name: "18 hrs", time: 18, value:1.75, index:8 },
          { name: "12 hrs", time: 12, value:1.8, index:9 },
          { name: "8 hrs", time: 8, value:1.85, index:10 },
          { name: "6 hrs", time: 6, value:1.9, index:11 }
        ]
      },
      {
        array:[
          { name: "14 days", time: 336, value:1, index:0 },
          { name: "10 days", time: 240, value:1.2, index:1 },
          { name: "7 days", time: 168, value:1.3, index:2 },
          { name: "6 days", time: 144, value:1.4, index:3 },
          { name: "5 days", time: 120, value:1.45, index:4 },
          { name: "3 days", time: 72, value:1.5, index:5 },
          { name: "48 hrs", time: 48, value:1.6, index:6 },
          { name: "24 hrs", time: 24, value:1.7, index:7 },
          { name: "18 hrs", time: 18, value:1.75, index:8 },
          { name: "12 hrs", time: 12, value:1.8, index:9 },
          { name: "8 hrs", time: 8, value:1.85, index:10 },
          { name: "6 hrs", time: 6, value:1.9, index:11 }
        ]
      },
      {
        array:[
          { name: "14 days", time: 336, value:1, index:0 },
          { name: "10 days", time: 240, value:1.2, index:1 },
          { name: "7 days", time: 168, value:1.3, index:2 },
          { name: "6 days", time: 144, value:1.4, index:3 },
          { name: "5 days", time: 120, value:1.45, index:4 },
          { name: "3 days", time: 72, value:1.5, index:5 },
          { name: "48 hrs", time: 48, value:1.6, index:6 },
          { name: "24 hrs", time: 24, value:1.7, index:7 },
          { name: "18 hrs", time: 18, value:1.75, index:8 },
          { name: "12 hrs", time: 12, value:1.8, index:9 }
        ]
      },
      {
        array:[
          { name: "5 days", time: 120, value:1.45, index:4 },
          { name: "3 days", time: 72, value:1.5, index:5 },
          { name: "48 hrs", time: 48, value:1.6, index:6 },
          { name: "24 hrs", time: 24, value:1.7, index:7 }
        ]
      },
      {
        array:[
          { name: "24 hrs", time: 24, value:1.7, index:7 },
          { name: "18 hrs", time: 18, value:1.75, index:8 },
          { name: "12 hrs", time: 12, value:1.8, index:9 },
          { name: "8 hrs", time: 8, value:1.85, index:10 },
          { name: "6 hrs", time: 6, value:1.9, index:11 }
        ]
      }
    ];

    subjectsA=[
      { name:"Art-Architecture", value:0 },
      { name:"Art-Movies", value:1 },
      { name:"Art-Music", value:2 },
      { name:"Art-Music", value:3 },
      { name:"Art-Paintings", value:4 },
      { name:"Art-Theatre", value:5 },
      { name:"Business", value:6 },
      { name:"Communications&Media-Communication Strategies", value:7 },
      { name:"Communications&Media-Journalism", value:8 },
      { name:"Communications&Media-PublicRelations", value:9 },
      { name:"Economics-E-commerce", value:10 },
      { name:"Economics-Finance", value:11 },
      { name:"Economics-Investment", value:12 },
      { name:"Economics-Logistics", value:13 },
      { name:"Economics-Trade", value:14 },
      { name:"Engineering", value:15 },
      { name:"English", value:16 },
      { name:"IT&Technology-Javascript", value:17 },
      { name:"IT&Technology-Ruby on Rails", value:18 },
      { name:"Law", value:19 },
      { name:"Literature", value:20 },
      { name:"Management", value:21 },
      { name:"Marketing", value:22 },
      { name:"Mathematics", value:23 },
      { name:"Natural Science - Agriculture", value:24 },
      { name:"Natural Science - Anthropology", value:25 },
      { name:"Natural Science - Astronomy", value:26 },
      { name:"Natural Science - Biology", value:27 },
      { name:"Natural Science - Chemistry", value:28 },
      { name:"Natural Science - Environmental Science", value:29 },
      { name:"Natural Science - Geography", value:30 },
      { name:"Natural Science - Geology", value:31 },
      { name:"Natural Science - Physics", value:32 },
      { name:"Pedalogy", value:33 },
      { name:"Philosophy", value:34 },
      { name:"Political Science", value:35 },
      { name:"Psychology", value:36 },
      { name:"Sociology", value:37 },
      { name:"Statics", value:38 }
    ];


    formatsA = [
      { name:"MLA", value:0 },
      { name:"APA", value:1 },
      { name:"CHICAGO", value:2 },
      { name:"Turabian with footnotes", value:3 }
    ];
}
