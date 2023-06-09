import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsBoolean, IsOptional, IsString } from "class-validator";

export class PostSettingDto {
    @ApiPropertyOptional({ default: true })
    @IsOptional()
    @Transform(({ value }) => Boolean(value))
    @IsBoolean()
    canComment?: boolean

    @ApiPropertyOptional({ default: true })
    @IsOptional()
    @Transform(({ value }) => Boolean(value))
    @IsBoolean()
    isPublic?: boolean

    @ApiPropertyOptional({ default: true })
    @IsOptional()
    @Transform(({ value }) => Boolean(value))
    @IsBoolean()
    showLikeAndViewCounts?: boolean
}

export class NewPostDto extends PostSettingDto {
    @ApiProperty()
    @IsString()
    caption: string

    @ApiProperty({ type: 'array', minItems: 1, maxItems: 10, items: { format: 'binary', type: 'string' } })
    medias: string[]
}