import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { collegeSchema } from 'src/models/college.model';
import { CollegeController } from './college.controller';
import { CollegeService } from './college.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'College', schema: collegeSchema }]),
  ],
  controllers: [CollegeController],
  providers: [CollegeService],
})
export class CollegeModule {}
