export class CreateProjectDto {
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    category: string;
    status: string;
    tags: string[];
}
