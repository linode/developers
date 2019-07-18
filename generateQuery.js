const rawQuery = properties => {
  return properties.map(a =>
    a.name
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
                                d.type.fields.map(e =>
                                  e.name === "allOf"
                                    ? ""
                                    : e.name === "oneOf"
                                    ? ""
                                    : e.name +
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
                                                            h =>
                                                              h.name +
                                                              " " +
                                                              (h.type &&
                                                              h.type.fields
                                                                ? "{" +
                                                                  h.type.fields.map(
                                                                    i =>
                                                                      i.name +
                                                                      " " +
                                                                      (i.type &&
                                                                      i.type
                                                                        .fields
                                                                        ? "{" +
                                                                          i.type.fields.map(
                                                                            j =>
                                                                              j.name +
                                                                              " " +
                                                                              (j.type &&
                                                                              j
                                                                                .type
                                                                                .fields
                                                                                ? "{" +
                                                                                  j.type.fields.map(
                                                                                    k =>
                                                                                      k.name +
                                                                                      " " +
                                                                                      (k.type &&
                                                                                      k
                                                                                        .type
                                                                                        .fields
                                                                                        ? "{" +
                                                                                          k.type.fields.map(
                                                                                            l =>
                                                                                              l.name +
                                                                                              " "
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
                                        : " ")
                                ) +
                                "}"
                              : " ")
                        ) +
                        "}"
                      : c.type.ofType && c.type.ofType.fields
                      ? "{" +
                        c.type.ofType.fields.map(
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
                                          g =>
                                            g.name +
                                            " " +
                                            (g.type && g.type.fields
                                              ? "{" +
                                                g.type.fields.map(
                                                  h =>
                                                    h.name +
                                                    " " +
                                                    (h.type && h.type.fields
                                                      ? "{" +
                                                        h.type.fields.map(
                                                          i =>
                                                            i.name +
                                                            " " +
                                                            (i.type &&
                                                            i.type.fields
                                                              ? "{" +
                                                                i.type.fields.map(
                                                                  j =>
                                                                    j.name +
                                                                    " " +
                                                                    (j.type &&
                                                                    j.type
                                                                      .fields
                                                                      ? "{" +
                                                                        j.type.fields.map(
                                                                          k =>
                                                                            k.name +
                                                                            " " +
                                                                            (k.type &&
                                                                            k
                                                                              .type
                                                                              .fields
                                                                              ? "{" +
                                                                                k.type.fields.map(
                                                                                  l =>
                                                                                    l.name +
                                                                                    " "
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
                              : " ")
                        ) +
                        "}"
                      : " ")
                ) +
                "}"
              : b.type.ofType && b.type.ofType.fields
              ? "{" +
                b.type.ofType.fields.map(
                  c =>
                    c.name +
                    " " +
                    (c.type && c.type.fields
                      ? "{" +
                        c.type.fields.map(
                          d =>
                            d.name +
                            " "(
                              d.type && d.type.fields
                                ? "{" +
                                    d.type.fields.map(
                                      e =>
                                        e.name +
                                        " " +
                                        (e.type && e.type.fields
                                          ? "{" +
                                            e.type.fields.map(
                                              g =>
                                                g.name +
                                                " " +
                                                (g.type && g.type.fields
                                                  ? "{" +
                                                    g.type.fields.map(
                                                      h =>
                                                        h.name +
                                                        " " +
                                                        (h.type && h.type.fields
                                                          ? "{" +
                                                            h.type.fields.map(
                                                              i =>
                                                                i.name +
                                                                " " +
                                                                (i.type &&
                                                                i.type.fields
                                                                  ? "{" +
                                                                    i.type.fields.map(
                                                                      j =>
                                                                        j.name +
                                                                        " " +
                                                                        (j.type &&
                                                                        j.type
                                                                          .fields
                                                                          ? "{" +
                                                                            j.type.fields.map(
                                                                              k =>
                                                                                k.name +
                                                                                " " +
                                                                                (k.type &&
                                                                                k
                                                                                  .type
                                                                                  .fields
                                                                                  ? "{" +
                                                                                    k.type.fields.map(
                                                                                      l =>
                                                                                        l.name +
                                                                                        " "
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
                                : " "
                            )
                        ) +
                        "}"
                      : " ")
                ) +
                "}"
              : " ")
        ) +
        "}"
      : a.type.ofType && a.type.ofType.fields
      ? "{" +
        a.type.ofType.fields.map(
          b =>
            b.name +
            " " +
            (b.type && b.type.fields
              ? "{" +
                b.type.fields.map(
                  c =>
                    c.name +
                    " "(
                      d.type && d.type.fields
                        ? "{" +
                            d.type.fields.map(
                              e =>
                                e.name +
                                " " +
                                (e.type && e.type.fields
                                  ? "{" +
                                    e.type.fields.map(
                                      g =>
                                        g.name +
                                        " " +
                                        (g.type && g.type.fields
                                          ? "{" +
                                            g.type.fields.map(
                                              h =>
                                                h.name +
                                                " "(
                                                  h.type && h.type.fields
                                                    ? "{" +
                                                        h.type.fields.map(
                                                          i =>
                                                            i.name +
                                                            " " +
                                                            (h.type &&
                                                            h.type.fields
                                                              ? "{" +
                                                                h.type.fields.map(
                                                                  i =>
                                                                    i.name +
                                                                    " " +
                                                                    (i.type &&
                                                                    i.type
                                                                      .fields
                                                                      ? "{" +
                                                                        i.type.fields.map(
                                                                          j =>
                                                                            j.name +
                                                                            " " +
                                                                            (j.type &&
                                                                            j
                                                                              .type
                                                                              .fields
                                                                              ? "{" +
                                                                                j.type.fields.map(
                                                                                  k =>
                                                                                    k.name +
                                                                                    " " +
                                                                                    (k.type &&
                                                                                    k
                                                                                      .type
                                                                                      .fields
                                                                                      ? "{" +
                                                                                        k.type.fields.map(
                                                                                          l =>
                                                                                            l.name +
                                                                                            " "
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
                                                    : " "
                                                )
                                            ) +
                                            "}"
                                          : " ")
                                    ) +
                                    "}"
                                  : " ")
                            ) +
                            "}"
                        : " "
                    )
                ) +
                "}"
              : " ")
        ) +
        "}"
      : ""
  );
};

module.exports = rawQuery;
