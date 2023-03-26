import React from 'react';

import Dialog from '@mui/material/Dialog';

import CampaignSelect from './CampaignSelect/CampaignSelect';
import CampaignSlider from './CampaignSlider/CampaignSlider';
import CampaignListing from './CampaignListing/CampaignListing';
import CampaignCollegePage from './CampaignCollegePage/CampaignCollegePage';
import CampaignBanner from './CampaignBanner/CampaignBanner';
import CampaignVideo from './CampaignVideo/CampaignVideo';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface DashboardAddPhotoModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CampaignModal: React.FC<DashboardAddPhotoModalProps> = ({
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
          <CampaignSelect setPageName={setPageName} />
        ) : pageName === 'Slider' ? (
          <CampaignSlider setPageName={setPageName} />
        ) : pageName === 'Listing' ? (
          <CampaignListing setPageName={setPageName} />
        ) : pageName === 'College page' ? (
          <CampaignCollegePage setPageName={setPageName} />
        ) : pageName === 'Banner' ? (
          <CampaignBanner setPageName={setPageName} />
        ) : pageName === 'Video' ? (
          <CampaignVideo setPageName={setPageName} />
        ) : null}
      </Dialog>
    </div>
  );
};

export default CampaignModal;
