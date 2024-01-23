export const styles = {
    boxWidth: "flex lg:mx-auto mx-[80px] max-w-[1200px]",

    heading_XXXL: "font-montserrat text-[4rem] leading-[6rem] w-full",
    heading_XXL: "font-montserrat text-[3rem] leading-[4.5rem] w-full",
    heading_XL: "font-montserrat text-[2.25rem] leading-[3.375rem] w-full",
    heading_L: "font-montserrat text-[1.25rem] leading-[1.875rem] w-full",
    heading_M: "font-montserrat text-[1.125rem] leading-[1.5rem]",

    paragraph_S: "font-montserrat  text-[1rem] leading-[1.5rem]",
    paragraph_XS: "font-montserrat text-[0.875rem] leading-[1.3rem]",

    sectionHeading: "flex flex-col gap-[24px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    button_S: "font-montserrat text-[1rem] leading-[1.5rem] font-bold py-3 border-2 border-dimBlack",

    navLink: "font-montserrat text-[1.125rem] leading-[1.5rem] font-bold ",

  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,

    serviceSection: 'flex flex-1 md:flex-row flex-col justify-between items-center w-full my-[64px] p-4 sm:gap-8 gap-6',
  };
  
