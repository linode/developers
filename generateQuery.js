const printName = (name) => {
  return ' ' + name;
}

const _query = property => {
  if (property.name === 'allOf') {
    return 'allOf { ' + recursiveQuery(property.type.ofType.fields) + ' }'
  }

  if (!property.type) {
    return printName(property.name);
  }

  if (property.type && !property.type.fields) {
    // Base case
    return printName(property.name);
  }

  if (property.type && property.type.fields) {
    return `${printName(property.name)} { ${recursiveQuery(property.type.fields)} }`;
  }

  if (property.type && property.type.typeOf && property.type.typeOf.fields) {
    return `${printName(property.name)} { ${recursiveQuery(property.type.typeOf.fields)} }`;
  }
  console.log('no cases matched', property);
  return;
}

const recursiveQuery = properties => {
  return properties.map(property => _query(property));
}

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
                                      : e.type.ofType && e.type.ofType.fields
                                      ? "{" +
                                        e.type.ofType.fields.map(
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
                                                        g.type.fields.map(h =>
                                                          h.name === "allOf"
                                                            ? ""
                                                            : h.name +
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
                                                                                      " " +
                                                                                      (l.type &&
                                                                                      l
                                                                                        .type
                                                                                        .fields
                                                                                        ? "{" +
                                                                                          l.type.fields.map(
                                                                                            m =>
                                                                                              m.name +
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
                                                                : h.type
                                                                    .ofType &&
                                                                  h.type.ofType
                                                                    .fields
                                                                ? "{" +
                                                                  h.type.ofType.fields.map(
                                                                    i =>
                                                                      i.name +
                                                                      " "
                                                                  ) +
                                                                  "}"
                                                                : " ")
                                                        ) +
                                                        "}"
                                                      : " ")
                                                ) +
                                                "}"
                                              : f.type.ofType &&
                                                f.type.ofType.fields
                                              ? "{" +
                                                f.type.ofType.fields.map(
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
                                                                    i.name + " "
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
                              : d.type.ofType && d.type.ofType.fields
                              ? "{" +
                                d.type.ofType.fields.map(e => e.name + " ") +
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

module.exports = { rawQuery, recursiveQuery };
