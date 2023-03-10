import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
import { ProfileInterface } from './interfaces/profile.interface';
import { ProfileService } from './profile.service';

@ApiBearerAuth()
@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  
  @ApiResponse({
    status: 200,
    description: 'This method gets an especific profile',
    type: Profile
  })
  @ApiBadRequestResponse({
    
    description: 'Bad Request'
  })
  @Get(':id')
  findOne(@Param('id') id: number): ProfileInterface[] {
    return this.profileService.findOne(id);
  }
  
  @ApiResponse({
    status: 200,
    description: 'Updates an especific profile',
    type: Profile
  })
  @ApiBadRequestResponse({
    
    description: 'Bad Request'
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(+id, updateProfileDto);
  }
}

