export const menu = {
  open: {
    width: '210px',
    height: '210px',
    top: '-20px',
    right: '-20px',
    transition: { duration: 0.28, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: '55px',
    height: '40px',
    top: '0px',
    right: '-4px',
    transition: {
      duration: 0.28,
      delay: 0.05,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
export const links = [
  {
    label: 'Inicio',
    targetId: 'inicio',
  },
  /* {
    label: 'Nosotros',
    targetId: 'nosotros',
  }, */
  {
    label: 'Servicios',
    targetId: 'servicios',
  },
  {
    label: 'Kommo CRM',
    targetId: 'kommo',
  },
];
