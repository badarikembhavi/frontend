// components/CustomCard.tsx
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { forwardRef, Ref } from 'react';
import { MainCardProps } from '../types/root';

const MainCard = forwardRef(
  (
    {
      cardTitle,
      subHeader,
      darkTitle = false,
      content = true,
      contentSX = {},
      divider = false,
      dividerSX = {},
      secondary,
      border = true,
      shadow,
      sx = {},
      children,
      ...others
    }: MainCardProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const theme = useTheme();

    return (
      <Card
        ref={ref}
        {...others}
        sx={{
          border: border ? `1px solid ${theme.palette.divider}` : 'none',
          borderRadius: 2,
          boxShadow: shadow || theme.shadows[1],
          ...sx
        }}
      >
        {cardTitle && (
          <CardHeader
            title={
              darkTitle ? (
                <Typography variant="h4">{cardTitle}</Typography>
              ) : (
                cardTitle
              )
            }
            subheader={subHeader}
            action={secondary}
          />
        )}

        {cardTitle && divider && <Divider sx={dividerSX} />}

        {content ? <CardContent sx={contentSX}>{children}</CardContent> : children}
      </Card>
    );
  }
);

export default MainCard;
