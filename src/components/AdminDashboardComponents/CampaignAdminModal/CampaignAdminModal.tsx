import React from 'react';

import Dialog from '@mui/material/Dialog';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CampaignType from './CampaignType/CampaignType';
import SliderCampaign from './SliderCampaign/SliderCampaign';
import ListingCampaign from './ListingCampaign/ListingCampaign';
import CollegePageCampaign from './CollegePageCampaign/CollegePageCampaign';
import BannerCampaign from './BannerCampaign/BannerCampaign';
import VideoCampaign from './VideoCampaign/VideoCampaign';

interface DashboardAddPhotoModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CampaignAdminModal: React.FC<DashboardAddPhotoModalProps> = ({
  openModal,
  setOpenModal,
}) => {
  const [pageName, setPageName] = React.useState('Select');

  const handleClose = () => {
    setOpenModal(false);
  };

  console.log(pageName);

  return (
    <div>
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '11px',
            minWidth: { xs: '100%', sm: '700px' },
            p: { xs: 3, sm: 1 },
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        {pageName === 'Select' ? (
          <CampaignType setPageName={setPageName} />
        ) : pageName === 'Slider' ? (
          <SliderCampaign setPageName={setPageName} />
        ) : pageName === 'Listing' ? (
          <ListingCampaign setPageName={setPageName} />
        ) : pageName === 'College page' ? (
          <CollegePageCampaign setPageName={setPageName} />
        ) : pageName === 'Banner' ? (
          <BannerCampaign setPageName={setPageName} />
        ) : pageName === 'Video' ? (
          <VideoCampaign setPageName={setPageName} />
        ) : null}
      </Dialog>
    </div>
  );
};

export default CampaignAdminModal;
