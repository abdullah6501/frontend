// import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { HttpClient } from '@angular/common/http';
// import { AddlistDialogComponent } from '../addlist-dialog/addlist-dialog.component';
// import { environment } from 'src/environment/environment';

// interface Project {
//   id: number;
//   projectlist: string;
// }

// @Component({
//   selector: 'app-list',
//   templateUrl: './list.component.html',
//   styleUrls: ['./list.component.css']
// })
// export class ListComponent implements OnInit {
//   projects: Project[] = [];
//   selectedProject: Project | null = null;
//   selectedFile: File | null = null;
//   public apiUrl = environment.PORTFOLIO_BASEURL;

//   constructor(public dialog: MatDialog, private http: HttpClient) { }

//   ngOnInit() {
//     this.fetchProjects();
//   }

//   openAddlistDialog(): void {
//     const dialogRef = this.dialog.open(AddlistDialogComponent, {
//       width: '400px',
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.fetchProjects();
//     });
//   }

//   fetchProjects() {
//     const url = `${this.apiUrl}/show`;
//     this.http.get<Project[]>(url).subscribe({
//       next: (projects) => {
//         this.projects = projects;
//       },
//       error: (error) => {
//         console.error('Error fetching projects:', error);
//       }
//     });
//   }

//   handleProjectClick(project: Project): void {
//     this.selectedProject = project;
//   }

//   onFileSelected(event: any): void {
//     this.selectedFile = event.target.files[0];
//   }

//   onFileUpload(event: Event): void {
//     event.preventDefault();
//     if (this.selectedProject && this.selectedFile) {
//       const formData = new FormData();
//       formData.append('file', this.selectedFile);
//       formData.append('projectId', this.selectedProject.id.toString());

//       const url = `${this.apiUrl}/upload`;
//       this.http.post(url, formData).subscribe({
//         next: (response) => {
//           console.log('File uploaded successfully', response);
//         },
//         error: (error) => {
//           console.error('Error uploading file:', error);
//         }
//       });
//     } else {
//       console.error('No file selected or no project selected');
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { AddlistDialogComponent } from '../addlist-dialog/addlist-dialog.component';
import { environment } from 'src/environment/environment';

interface Project {
  id: number;
  projectlist: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  projects: Project[] = [];
  selectedProject: Project | null = null;
  selectedFile: File | null = null;
  public apiUrl = environment.PORTFOLIO_BASEURL;

  constructor(public dialog: MatDialog, private http: HttpClient) { }

  ngOnInit() {
    this.fetchProjects();
  }

  openAddlistDialog(): void {
    const dialogRef = this.dialog.open(AddlistDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.fetchProjects();
    });
  }

  fetchProjects() {
    const url = `${this.apiUrl}/show`;
    this.http.get<Project[]>(url).subscribe({
      next: (projects) => {
        this.projects = projects;
      },
      error: (error) => {
        console.error('Error fetching projects:', error);
      }
    });
  }

  handleProjectClick(project: Project): void {
    this.selectedProject = project;
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onFileUpload(event: Event): void {
    event.preventDefault();
    if (this.selectedProject && this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('projectId', this.selectedProject.id.toString());

      const url = `${this.apiUrl}/upload`;
      this.http.post(url, formData).subscribe({
        next: (response) => {
          console.log('File uploaded successfully', response);
        },
        error: (error) => {
          console.error('Error uploading file:', error);
        }
      });
    } else {
      console.error('No file selected or no project selected');
    }
  }
}
