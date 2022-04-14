import { Controller, Get, Param } from '@nestjs/common';
import { CollegeDocument } from 'src/models/college.model';
import { FormatResponse, FormattedResponse } from 'src/utils/formatResponse';
import { CollegeService } from './college.service';
import { Request, Response } from 'express';

@Controller('college')
export class CollegeController {
  constructor(private collegeService: CollegeService) {}

  @Get('/:title')
  async getClgByTitle(
    @Param('title') title: string,
    res: Response,
  ): Promise<FormattedResponse<CollegeDocument[]>> {
    const clgDetail = await this.collegeService.getByName(title);
    if (clgDetail.length === 0) {
      return FormatResponse(
        res,
        clgDetail,
        200,
        'Oops!!The college that you are searching for is currently not available.',
      );
    }
    return FormatResponse(
      res,
      clgDetail,
      200,
      'College details found successfully',
    );
  }

  @Get('get-one/:id')
  async getClgById(
    @Param('id') id: string,
    res: Response,
  ): Promise<FormattedResponse<CollegeDocument>> {
    const clgData = await this.collegeService.getClgById(id);
    return FormatResponse(
      res,
      clgData,
      200,
      'Particular College Detail Found successfully',
    );
  }
}
