const rawQuery = properties => {
  return properties.map(a =>
    a.name !== "data"
      ? a.name +
        "{" +
        a.type.fields.map(
          b =>
            b.name +
            " " +
            (b.type.fields
              ? "{" +
                b.type.fields.map(
                  c =>
                    c.name +
                    " " +
                    (c.type && c.type.fields
                      ? "{" +
                        c.type.fields.map(
                          d =>
                            d.name +
                            " " +
                            (d.type && d.type.fields
                              ? "{" +
                                d.type.fields.map(
                                  e =>
                                    e.name +
                                    " " +
                                    (e.type && e.type.fields
                                      ? "{" +
                                        e.type.fields.map(
                                          f =>
                                            f.name +
                                            " " +
                                            (f.type && f.type.fields
                                              ? "{" +
                                                f.type.fields.map(
                                                  g =>
                                                    g.name +
                                                    " " +
                                                    (g.type && g.type.fields
                                                      ? "{" +
                                                        g.type.fields.map(
                                                          h => h.name + " "
                                                        ) +
                                                        "}"
                                                      : " ")
                                                ) +
                                                "}"
                                              : " ")
                                        ) +
                                        "}"
                                      : " ")
                                ) +
                                "}"
                              : " ")
                        ) +
                        "}"
                      : " ")
                ) +
                "}"
              : " ")
        ) +
        "}"
      : ""
  );
};

module.exports = rawQuery;
