import { Injectable } from '@nestjs/common';


@Injectable()
export class HomepageService {
  findAll(): any {
    let projects ={
      projectName: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet. Quo iste error ut nulla nesciunt et consequuntur facilis aut doloremque debitis."
    }
    return projects;
  }
}
