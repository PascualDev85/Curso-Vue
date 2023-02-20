const isAutheticatedGuard = async (to, form, next) => {
  //   console.log({ to, form, next });

  return new Promise(() => {
    const random = Math.random() * 100;
    console.log(random);
    if (random > 50) {
      console.log("Está autenticado");
      next();
    } else {
      console.log(random, "Bloqueado por el isAutheticatedGuard");
      next({ name: "dbz-characters" });
    }
  });
};

export default isAutheticatedGuard;
