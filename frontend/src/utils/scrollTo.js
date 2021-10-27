export const scrollTo = (ref) => {
    if (ref != null) {
      ref?.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  