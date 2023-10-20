export const isMobile = () => {
  if (window.innerWidth < 768) {
    return true;
  }

  return false;
};

export const isTablet = () => {
  if (window.innerWidth >= 769 && window.innerWidth <= 1024) {
    return true;
  }

  return false;
};

export const isDesktop = () => {
  if (window.innerWidth > 1920) {
    return true;
  }

  return false;
};

