const db = [
    {
        id: 1,
        q: "Según el artículo 46 de la Ley 7/1985, de 2 de abril, reguladora de las bases de Régimen Local, el Pleno celebrará sesión ordinaria cada mes:",
        a: "En Ayuntamientos de municipios de más de 50.000 habitantes y en las Diputaciones Provinciales.",
        b: "En Ayuntamientos de municipios de una población entre 5001 y 20.000 habitantes.",
        c: "En Municipios de hasta 5000 habitantes.",
        d: "En Ayuntamientos de municipios de más de 20.000 habitantes y en las Diputaciones Provinciales.",
        correct: "d"
    },
    {
        id: 2,
        q: "Las sesiones extraordinarias del Pleno las convoca el Alcalde o Presidente, según establece el artículo 78 del Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por RD 2568/1986, de 28 de noviembre:",
        a: "Por iniciativa propia o por la solicitud de la 1/3 parte de miembros de la Corporación.",
        b: "Sólo puede convocarlas a solicitud de la 1/4 parte de miembros de la Corporación.",
        c: "Por iniciativa propia o por la solicitud de la 1/4 parte de miembros de la Corporación.",
        d: "Sólo puede convocarlas por iniciativa propia.",
        correct: "c"
    },
    {
        id: 3,
        q: "La periodicidad establecida para las sesiones ordinarias del Pleno, según lo dispuesto en el artículo 78 del Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por RD 2568/1986, de 28 de noviembre:",
        a: "La fija el Presidente en sesión extraordinaria que habrá de convocar el Pleno dentro de los 10 días siguientes al de la sesión constitutiva de la Corporación.",
        b: "La fija el Pleno en sesión extraordinaria que habrá de convocar el alcalde o Presidente dentro de los 10 días siguientes al de la sesión constitutiva de la Corporación.",
        c: "La fija el Presidente en sesión extraordinaria que habrá de convocar el Pleno dentro de los 30 días siguientes al de la sesión constitutiva de la Corporación.",
        d: "La fija el Pleno en sesión extraordinaria que habrá de convocar el Alcalde o Presidente dentro de los 30 días siguientes al de la sesión constitutiva de la Corporación.",
        correct: "d"
    },
    {
        id: 4,
        q: "Según el artículo 16 del Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por RD 2568/1986, de 28 de noviembre, ¿qué señala respecto a la consulta de los libros de actas y los libros de resoluciones del Presidente?",
        a: "Sólo deberá efectuarse en el archivo.",
        b: "Sólo deberá efectuarse en la Secretaría General.",
        c: "Deberá efectuarse en el archivo o en la Secretaría General.",
        d: "Deberá efectuarse en las dependencias locales.",
        correct: "c"
    },
    {
        id: 5,
        q: "En defecto de previsión expresa en el reglamento orgánico de la entidad, la Junta de Gobierno celebrará sesión ordinaria:",
        a: "Cada mes como máximo.",
        b: "Cada mes como mínimo.",
        c: "cada 15 días como máximo.",
        d: "Cada 15 días como mínimo.


 V.13.08.25                                                                                              Página 3
 Temario Específico. Auxiliar Administrativo/a",
        correct: "d"
    },
    {
        id: 6,
        q: "Según el artículo 46 de la Ley 7/1985, de 2 de abril, reguladora de las bases de Régimen Local, en ausencia del Presidente o de quién legalmente haya de sustituirle, el Pleno quedará válidamente constituido:",
        a: "Siempre que concurra la mitad del número legal de miembros del mismo, y será presidido por el miembro de la corporación de mayor edad entre los presentes.",
        b: "Siempre que concurra un tercio del número legal de miembros del mismo, y será presidido por el miembro de la corporación de mayor edad entre los presentes.",
        c: "El Pleno no puede quedar válidamente constituido sin la presencia del Presidente o de quién legalmente le sustituya.",
        d: "Siempre que concurra un tercio del número legal de miembros del mismo, y será presidido por el miembro de la Corporación de mayor antigüedad entre los presentes.",
        correct: "b"
    },
    {
        id: 7,
        q: "Según el artículo 77 del Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por RD 2568/1986, de 28 de noviembre, existen tres tipos de sesiones del Pleno que son:",
        a: "Ordinarias, especiales y extraordinarias de carácter urgente.",
        b: "Ordinarias, urgentes y extraordinarias.",
        c: "Ordinarias, extraordinarias y extraordinarias de carácter urgente.",
        d: "Ordinarias, extraordinarias y de carácter urgente.",
        correct: "c"
    },
    {
        id: 8,
        q: "¿Qué condición impone el artículo 79 del Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por RD 2568/1986, de 28 de noviembre, respecto a las sesiones extraordinarias urgentes?",
        a: "No existen ese tipo de sesiones.",
        b: "Deben ser convocadas por el Alcalde y por los miembros de la Corporación.",
        c: "Tienen que celebrarse al día siguiente de su convocatoria.",
        d: "Debe incluirse como primer punto del orden del día el pronunciamiento del Pleno sobre la urgencia. Si ésta no resulta apreciada por el Pleno, se levantará acto seguido la sesión.",
        correct: "d"
    },
    {
        id: 9,
        q: "Según el artículo 78 del Reglamento de Organización, Funcionamiento y régimen Jurídico de las Entidades Locales, aprobado por RD 2568/1986, de 28 de noviembre, las sesiones ordinarias del Pleno son aquellas que:",
        a: "Se convocan por el Presidente.",
        b: "Sólo tratan asuntos, pero no los votan.",
        c: "Tienen una periodicidad establecida de antemano.",
        d: "Se convocan a solicitud de los concejales.



 V.13.08.25                                                                                              Página 4
 Temario Específico. Auxiliar Administrativo/a",
        correct: "c"
    },
    {
        id: 10,
        q: "Sobre el desarrollo de las sesiones, ¿qué establece el artículo 87 del Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por RD 2568/1986, de 28 de noviembre?",
        a: "Toda sesión, ordinaria o extraordinaria, habrá de respetar el principio de unidad de acto y se procurará que termine en el mismo día de su comienzo.",
        b: "Durante el transcurso de la sesión, el Presidente podrá denegar interrupciones a su prudente arbitrio.",
        c: "Si la sesión terminase sin que se hubiesen debatido y resuelto todos los asuntos incluidos en el orden del día, el Presidente no podrá levantar la sesión hasta que no se fije la próxima fecha de celebración.",
        d: "Durante el transcurso de la sesión, el Presidente podrá acordar interrupciones a su prudente arbitrio, únicamente para descanso en los debates.",
        correct: "a"
    },
    {
        id: 11,
        q: "Dispone el artículo 78 del Reglamento de Organización, Funcionamiento y régimen Jurídico de las Entidades Locales, aprobado por RD 2568/1986, de 28 de noviembre, el plazo para convocar sesión extraordinaria solicitada es:",
        a: "Dentro de los 5 días siguientes a la petición.",
        b: "Dentro de los 10 días siguientes a la petición.",
        c: "Dentro de los 30 días siguientes a la petición.",
        d: "Dentro de los 4 días siguientes a la petición.",
        correct: "d"
    },
    {
        id: 12,
        q: "¿Quiénes tienen derecho a obtener copias y certificaciones acreditativas de los acuerdos de los órganos de gobierno y administración de las entidades locales, así como a consultar los archivos y registros? (Artículo 207 Reglamento de Organización, Funcionamiento y régimen Jurídico de las Entidades Locales, aprobado por RD 2568/1986, de 28 de noviembre)",
        a: "Todos los ciudadanos.",
        b: "Todos los españoles.",
        c: "Todos los que tengan la condición de vecino del ámbito territorial.",
        d: "Todos los residentes en territorio español.",
        correct: "a"
    },
    {
        id: 13,
        q: "El Pleno celebrará sesión ordinaria cada tres meses, según dispone el artículo 46 de la Ley 7/1985, de 2 de abril, reguladora de las bases de Régimen Local:",
        a: "En Ayuntamientos de municipios de más de 20.000 habitantes y en las Diputaciones Provinciales.",
        b: "En Ayuntamientos de municipios de una población entre 5.001 y 20.000 habitantes.",
        c: "En Municipios de hasta 250 habitantes.",
        d: "En Municipios de hasta 5.000 habitantes.",
        correct: "d"
    },
    {
        id: 14,
        q: "¿Para la adopción de qué tipo de acuerdos se requiere el voto favorable de la mayoría absoluta del número legal de miembros de las corporaciones según el artículo 47 de la Ley 7/1985, de 2 de abril, reguladora de las Bases de Régimen Local? (Señale la opción incorrecta)",
        a: "Cesión gratuita de bienes a otras Administraciones o instituciones públicas.",
        b: "Enajenación de bienes, cuando su cuantía exceda del 30 por ciento de los recursos ordinarios de su presupuesto.",
        c: "Alteración de la calificación jurídica de los bienes demaniales o comunales.",
        d: "Cesión por cualquier título del aprovechamiento de los bienes comunales.


 V.13.08.25                                                                                               Página 5
 Temario Específico. Auxiliar Administrativo/a",
        correct: "b"
    },
    {
        id: 15,
        q: "El Pleno celebrará sesión ordinaria cada dos meses, según el artículo 46 de la Ley 7/1985, de 2 de abril, reguladora de las Bases de Régimen Local:",
        a: "En Ayuntamientos de municipios de una población entre 10.001 y 50.000 habitantes.",
        b: "En Municipios de hasta 5.000 habitantes.",
        c: "En Ayuntamientos de municipios de una población entre 5.001 y 20.000 habitantes.",
        d: "En Ayuntamientos de municipios de más de 20.000 habitantes y en las Diputaciones Provinciales.",
        correct: "c"
    },
    {
        id: 16,
        q: "Cuando se produce un empate en una votación, ¿Qué ocurre según la Ley 7/1985, de 2 de abril, reguladora de las Bases de Régimen Local?:",
        a: "Se repite la votación, y si el empate persiste, decide el voto de calidad del Presidente.",
        b: "Se vuelve a votar al final de la sesión, y en caso de persistir el empate, se queda sobre la mesa para la siguiente sesión.",
        c: "Se deja el asunto sobre la mesa.",
        d: "Se vuelve a votar, y si persiste el empate, se realiza una última votación.",
        correct: "a"
    },
    {
        id: 17,
        q: "¿Cómo se lleva a cabo el control y fiscalización por el Pleno de la actuación de los demás órganos de gobierno según lo dispuesto en el artículo 104 del Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por RD 2568/1986, de 28 de noviembre?",
        a: "A través del Requerimiento de presencia e información de miembros corporativos que ostenten delegación o a través del debate sobre la actuación de la Comisión de Gobierno.",
        b: "Sólo existe la posibilidad de llevarlo a cabo a través de la Moción de censura al Alcalde o Presidente.",
        c: "El Reglamento Orgánico Municipal podrá establecer otros medios de control y fiscalización de los órganos de gobierno.",
        d: "El Reglamento Orgánico Municipal no podrá establecer otros medios de control y fiscalización de los órganos de gobierno.",
        correct: "c"
    },
    {
        id: 18,
        q: "¿Cuál se considera el sistema normal de votación en la sesiones del Pleno, según se dispone en el Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por RD 2568/1986, de 28 de noviembre?",
        a: "El sistema normal de votación es indistintamente ordinaria y nominal.",
        b: "Para que el sistema de votación nominal sea el normal, requerirá la solicitud de un grupo municipal aprobada por el Pleno por una mayoría simple en votación ordinaria.",
        c: "El sistema normal será la votación ordinaria.",
        d: "El sistema normal será la votación secreta.



 V.13.08.25                                                                                              Página 6
 Temario Específico. Auxiliar Administrativo/a",
        correct: "c"
    },
    {
        id: 19,
        q: "La siguiente definición: \" Es la propuesta de modificación de un dictamen o proposición presentada por cualquier miembro, mediante escrito presentado al Presidente antes de iniciarse la deliberación del asunto\". ¿Con cuál de las siguientes se corresponde?",
        a: "Ruego (artículo 97.6 del Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por RD 2568/1986, de 28 de noviembre)",
        b: "Moción (artículo 97. 3 del Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por RD 2568/1986, de 28 de noviembre)",
        c: "Enmienda (artículo 97.5 del Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por RD 2568/1986, de 28 de noviembre)",
        d: "Dictamen (Artículo 97.1 del Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por RD 2568/1986, de 28 de noviembre)",
        correct: "c"
    },
    {
        id: 20,
        q: "Existe mayoría simple en un órgano colegiado local, según el artículo 99.1 del Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por RD 2568/1986, de 28 de noviembre, cuando:",
        a: "Los votos afirmativos son más que los negativos.",
        b: "Los votos afirmativos o superan a los negativos.",
        c: "Los votos afirmativos son la mitad más uno que el de votos negativos.",
        d: "Los votos afirmativos son más de la mitad del número legal de miembros de la Corporación.",
        correct: "a"
    },
    {
        id: 21,
        q: "¿Cuándo tendrán carácter de secreto las sesiones del Pleno según lo dispuesto en el Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por RD 2568/1986, de 28 de noviembre?",
        a: "Siempre y en todo caso, las sesiones serán públicas.",
        b: "Podrá ser secreto el debate y votación de aquellos asuntos que así acuerden por mayoría absoluta los miembros del Pleno.",
        c: "Podrá ser secreto el debate y votación de aquellos asuntos a que se refiere el artículo 18.1 de la Constitución Española, cuando así se acuerde por mayoría absoluta.",
        d: "Podrá ser secreto el debate y votación de aquellos asuntos a que se refiere el artículo 18.1 de la Constitución Española, cuando así se acuerde por unanimidad.",
        correct: "c"
    },
    {
        id: 22,
        q: "¿Cuáles se consideran sesiones ordinarias del Pleno, según el Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por RD 2568/1986, de 28 de noviembre?",
        a: "Aquellas que convoque el Alcalde o Presidente con tal carácter, por iniciativa propia o a solicitud de la cuarta parte, al menos, del número legal de miembros de la Corporación.",
        b: "Aquellas cuya periodicidad esta preestablecida.",
        c: "Aquellas que convoca el Alcalde o Presidente cuando el asunto o asuntos debe ser tratados lo antes posible.",
        d: "Aquellas que tienen como punto del orden del día el pronunciamiento del Pleno sobre el motivo de la sesión.



 V.13.08.25                                                                                              Página 7
 Temario Específico. Auxiliar Administrativo/a",
        correct: "b"
    },
    {
        id: 23,
        q: "Según el artículo 113 del Reglamento de Organización, Funcionamiento y régimen Jurídico de las Entidades Locales, aprobado por RD 2568/1986, de 28 de noviembre, entre la convocatoria y la celebración de la sesión de la Junta de Gobierno, no podrán transcurrir:",
        a: "Menos de dos días hábiles.",
        b: "Menos de 24 horas.",
        c: "Más de 24 horas.",
        d: "Más de diez días.",
        correct: "b"
    },
    {
        id: 24,
        q: "Conforme al artículo 112 del Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por RD 2568/1986, de 28 de noviembre, la Junta de Gobierno Local celebrará sesión constitutiva, a convocatoria del Alcalde o Presidente:",
        a: "Dentro de los diez días siguientes a aquel en que éste haya designado los miembros que la integran.",
        b: "dentro de los veinte días siguientes a aquel en que éste haya designado los miembros que la integran.",
        c: "Dentro de los quince días siguientes a aquel en que éste haya designado los miembros que la integran.",
        d: "dentro de los cinco días siguientes a aquel en que éste haya designado los miembros que la integran.



 V.13.08.25                                                                                            Página 8
 Temario Específico. Auxiliar Administrativo/a
 Tema 2. Procedimiento Administrativo común (I): El acto administrativo. Requisitos. La eficacia de los actos administrativos. Nulidad y anulabilidad. La revisión de los actos en vía administrativa. Los recursos administrativos.",
        correct: "a"
    },
    {
        id: 25,
        q: "Atendiendo al artículo 117.3 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, la ejecución del acto impugnado se entenderá suspendida:",
        a: "Si transcurrido un mes desde que la solicitud de suspensión haya tenido entrada en el registro del órgano competente para decidir sobre la misma, éste no ha dictado y notificado resolución expresa al respecto.",
        b: "Si transcurridos 60 días desde que la solicitud de suspensión haya tenido entrada en el registro del órgano competente para decidir sobre la misma, éste no ha dictado y notificado resolución expresa al respecto.",
        c: "Si transcurridos 90 días desde que la solicitud de suspensión haya tenido entrada en el registro del órgano competente para decidir sobre la misma, éste no ha dictado y notificado resolución expresa al respecto.",
        d: "Si transcurridos 15 días desde que la solicitud de suspensión haya tenido entrada en el registro del órgano competente para decidir sobre la misma, éste no ha dictado y notificado resolución expresa al respecto.",
        correct: "p"
    },
    {
        id: 26,
        q: "Respecto a la convalidación de los actos administrativos, no es correcto, según lo establecido en la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas:",
        a: "La Administración podrá convalidar los actos anulables, subsanando los vicios de que adolezcan.",
        b: "El acto de convalidación producirá efecto desde su fecha, salvo lo dispuesto en el artículo 39.3 para la retroactividad de los actos administrativos.",
        c: "Si el vicio consistiese en la falta de alguna autorización, podrá ser convalidado el acto mediante el otorgamiento de la misma por el órgano competente.",
        d: "Si el vicio consistiera en incompetencia no determinante de nulidad, la convalidación podrá realizarse por el órgano competente siempre que no sea superior jerárquico del que dictó el acto viciado.",
        correct: "d"
    },
    {
        id: 27,
        q: "Sobre la declaración de lesividad regulada en el artículo 107 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas:",
        a: "Requerirá en todo caso la aprobación expresa del Consejo de Ministros u órgano equivalente de las Comunidad Autónomas.",
        b: "Exigirá la oportuna autorización por el órgano competente en materia de Hacienda Pública.",
        c: "Requerirá previo dictamen favorable del Consejo de Estado u órgano consultivo equivalente de la Comunidad Autónoma, si lo hubiere.",
        d: "Exigirá la previa audiencia de cuantos aparezcan como interesados en el mismo.



 V.13.08.25                                                                                             Página 9
 Temario Específico. Auxiliar Administrativo/a",
        correct: "d"
    },
    {
        id: 28,
        q: "Según el artículo 35.1 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, ¿cuáles de los siguientes actos serán motivados, con sucinta referencia de hechos y fundamentos de derecho?",
        a: "Los actos que amplíen derechos o intereses.",
        b: "Los actos que resuelvan procedimientos de revisión de oficio de disposiciones o actos administrativos, recursos administrativos y procedimientos de arbitraje y los que declaren la inadmisión.",
        c: "Los que continúen con el criterio seguido en actuaciones precedentes.",
        d: "Los actos que acepten pruebas propuestas por los interesados",
        correct: "b"
    },
    {
        id: 29,
        q: "Según la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, el contenido de los actos se ajustará:",
        a: "A lo dispuesto por el Ordenamiento jurídico y será determinado y adecuado a los fines de aquéllos.",
        b: "Exclusivamente a lo dispuesto por la presente ley y será determinado y adecuado a los fines del ordenamiento jurídico.",
        c: "A lo dispuesto por el Ordenamiento jurídico y será determinado y adecuado a los fines de la presente ley.",
        d: "Exclusivamente a lo dispuesto por la presente ley y será determinado y adecuado a los fines de aquéllos.",
        correct: "a"
    },
    {
        id: 30,
        q: "En relación con la forma de los actos administrativo, en los casos en que los órganos administrativos ejerzan su competencia de forma verbal, ¿qué dispone el artículo 36.2 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas?",
        a: "Si se trata de resoluciones, el titular de la competencia deberá autorizar una relación de las que haya dictado de forma verbal, con expresión de su contenido.",
        b: "Si se trata de notificaciones, el titular de la competencia deberá autorizar una relación de las que haya dictado de forma verbal, con expresión de su contenido.",
        c: "Si se trata de resoluciones, el titular deberá autorizar una relación de las que haya dictado de forma escrita, con expresión de su contenido.",
        d: "Si se trata de notificaciones, el titular de la competencia deberá autorizar una relación de las que haya dictado de forma escrita, con expresión de su contenido.",
        correct: "a"
    },
    {
        id: 31,
        q: "Dispone el artículo 39.5 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, que cuando una Administración Pública tenga que dictar, en el ámbito de sus competencias, un acto que necesariamente tenga por base otro dictado por una Administración Pública distinta y aquélla entienda que es ilegal, podrá requerir a ésta previamente para que anule o revise el acto y, de rechazar el requerimiento, podrá interponer:",
        a: "Recurso extraordinario de revisión.",
        b: "Recurso de alzada.",
        c: "Recurso contencioso- administrativo.",
        d: "Recurso potestativo de reposición.



 V.13.08.25                                                                                              Página 10
 Temario Específico. Auxiliar Administrativo/a",
        correct: "c"
    },
    {
        id: 32,
        q: "Respecto a la ejecutividad regulada en el artículo 38 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas:",
        a: "Los actos de las Administraciones Públicas sujetos al Derecho Administrativo serán ejecutivos con arreglo a lo dispuesto en esta Ley.",
        b: "Los actos de las Administraciones Públicas sujetos al Derecho Administrativo serán ejecutivos con arreglo a lo dispuesto en la Ley reguladora de la Jurisdicción Contenciosa- Administrativa.",
        c: "Los actos de las Administraciones Públicas sujetos al Derecho Administrativo serán ejecutivos con arreglo a lo dispuesto en la Constitución Española.",
        d: "Los actos de las Administraciones Públicas sujetos al Derecho Administrativo serán ejecutivos con arreglo a lo dispuesto en la Ley de Régimen Jurídico del Sector Público.",
        correct: "a"
    },
    {
        id: 33,
        q: "Dispone el artículo 114 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, que ponen fin a la vía administrativa:",
        a: "Los acuerdos y contratos financieros que tengan la consideración de finalizadores del procedimiento.",
        b: "Las demás resoluciones de Administraciones Públicas cuando una disposición así lo establezca.",
        c: "La resolución administrativa de los procedimientos de responsabilidad patrimonial.",
        d: "Los pactos y convenios cuando una disposición reglamentaria así lo establezca.",
        correct: "c"
    },
    {
        id: 34,
        q: "Excepcionalmente, dispone la ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, podrá otorgarse eficacia retroactiva a los actos:",
        a: "Cuando produzcan efectos favorables al interesado, siempre que los supuestos de hecho necesarios no existieran en la fecha a que se retrotraiga la eficacia del acto.",
        b: "Cuando produzcan efectos desfavorables al interesado, siempre que los supuestos de hecho necesarios existieran ya en la fecha a que se retrotraiga la eficacia del acto.",
        c: "Cuando produzcan efectos favorables al interesado, siempre que los supuestos de hecho necesarios existieran ya en la fecha a que se retrotraiga la eficacia del acto.",
        d: "Cuando produzcan efectos desfavorables al interesado, siempre que los supuestos de hecho necesarios no existieran en la fecha a que se retrotraiga la eficacia del acto.",
        correct: "c"
    },
    {
        id: 35,
        q: "Contra los actos de trámite, si estos últimos deciden directa o indirectamente el fondo del asunto, se pondrán interponer:",
        a: "Los recursos de alzada y reposición.",
        b: "Recurso de revisión.",
        c: "Recurso ordinario.",
        d: "Recurso extraordinario.



 V.13.08.25                                                                                            Página 11
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 36,
        q: "Según lo establecido en el artículo 34.2 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, ¿Qué se ajustará a lo dispuesto por el ordenamiento jurídico y será determinado y adecuado a los fines de aquéllos?",
        a: "La tramitación de los actos.",
        b: "La motivación de los actos.",
        c: "El fundamento de los actos.",
        d: "El contenido de los actos.",
        correct: "d"
    },
    {
        id: 37,
        q: "Los actos de las Administraciones Públicas sujetos al Derecho Administrativo se presumirán válidos y producirán efectos desde:",
        a: "La fecha en que se dicten, en cualquier caso.",
        b: "La fecha en que se dicten, salvo que en ellos se disponga otra cosa.",
        c: "El día siguiente a la fecha en que se dicten, en cualquier caso.",
        d: "El día siguiente a la fecha en que se dicten, salvo que en ellos se disponga otra cosa.",
        correct: "b"
    },
    {
        id: 38,
        q: "Según el artículo 35.2 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas: ¿En qué procedimientos la motivación de los actos se realizará de conformidad con lo que dispongan las normas que rigen sus convocatorias, debiendo, en todo caso, quedar acreditados en el procedimiento los fundamentos de la resolución que se adopte?",
        a: "En todos los actos de los procedimientos selectivos y de concurrencia competitiva.",
        b: "En los actos que pongan fin a los procedimientos selectivos y de concurrencia competitiva.",
        c: "En todos los actos que pongan fin a un procedimiento administrativo.",
        d: "En los actos que cada órgano competente estime convenientes, informando previamente a los interesados.",
        correct: "b"
    },
    {
        id: 39,
        q: "¿Qué regula la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, sobre la motivación de los actos que pongan fin a los procedimientos selectivos y de concurrencia competitiva?",
        a: "No precisarán de motivación",
        b: "La motivación se realizará de conformidad con lo que dispongan las normas que regulen sus convocatorias, debiendo, en todo caso, quedar acreditados en el procedimiento los fundamentos de la resolución que se adopte.",
        c: "La motivación se realizará de conformidad con lo que disponga la presente ley.",
        d: "La motivación se realizará de conformidad con lo que dispongan las normas que regulen sus convocatorias, sin necesidad de que queden acreditadas en el procedimiento los fundamentos de la resolución que se adopte.



 V.13.08.25                                                                                           Página 12
 Temario Específico. Auxiliar Administrativo/a",
        correct: "b"
    },
    {
        id: 40,
        q: "Respecto a la inderogabilidad singular recogida en el artículo 37 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas:",
        a: "Las resoluciones administrativas de carácter general no podrán vulnerar lo establecido en una disposición de carácter particular, salvo que aquéllas procedan de un órgano de igual o superior jerarquía al que dictó la disposición general.",
        b: "Las resoluciones administrativas de carácter particular no podrán vulnerar lo establecido en una disposición de carácter general, aunque aquéllas procedan de un órgano de igual o superior jerarquía al que dictó la disposición general.",
        c: "Las resoluciones administrativas de carácter general no podrán vulnerar lo establecido en una disposición de carácter particular, aunque aquéllas precedan de un órgano de igual o superior jerarquía al que dictó la disposición general.",
        d: "Las resoluciones administrativas de carácter particular no podrán vulnerar lo establecido en una disposición de carácter general, salvo que aquéllas precedan de un órgano de igual o superior jerarquía al que dictó la disposición general.",
        correct: "b"
    },
    {
        id: 41,
        q: "Según el artículo 122.2 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, en el recurso de alzada, el plazo máximo para dictar y notificar la resolución será de:",
        a: "Tres meses.",
        b: "Dos meses.",
        c: "Un mes.",
        d: "Quince días.",
        correct: "a"
    },
    {
        id: 42,
        q: "La revisión de los actos nulos, según la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, puede tener lugar:",
        a: "Sólo a instancia del interesado.",
        b: "Dentro de los cuatro años siguientes a la notificación del acto.",
        c: "En cualquier momento.",
        d: "Sólo por propia iniciativa.",
        correct: "c"
    },
    {
        id: 43,
        q: "Las Administraciones Públicas declararán de oficio la nulidad de los actos administrativos que hayan puesto fin a la vía administrativa o que no hayan sido recurridos en plazo, en los supuestos previstos en el artículo 47.1 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas:",
        a: "En cualquier momento anterior al trámite de audiencia, por iniciativa propia, y previo dictamen favorable del Consejo de Estado u órgano consultivo equivalente de la Comunidad Autónoma, si lo hubiere.",
        b: "En cualquier momento, a solicitud de interesado, y previo dictamen favorable del Consejo de Estado u órgano consultivo equivalente de la Comunidad autónoma, si lo hubiere.",
        c: "En cualquier momento anterior al trámite de audiencia, por iniciativa propia o a solicitud de interesado, y previo dictamen favorable del Consejo de Estado u órgano consultivo equivalente de la Comunidad Autónoma, si lo hubiere.",
        d: "En cualquier momento, por iniciativa propia o a solicitud de interesado, y previo dictamen favorable del Consejo de Estado u órgano consultivo equivalente de la Comunidad Autónoma, si lo hubiere.



 V.13.08.25                                                                                             Página 13
 Temario Específico. Auxiliar Administrativo/a",
        correct: "d"
    },
    {
        id: 44,
        q: "El recurso extraordinario de revisión regulado en el artículo 125 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, se interpondrá cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente en el plazo de:",
        a: "1 mes siguiente a la fecha de la notificación de la resolución impugnada.",
        b: "2 meses siguientes a la fecha de la notificación de la resolución impugnada.",
        c: "3 meses siguientes a la fecha de notificación de la resolución impugnada.",
        d: "4 años siguientes a la fecha de la notificación de la resolución impugnada.",
        correct: "d"
    },
    {
        id: 45,
        q: "Conforme al artículo 107 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, la declaración de lesividad no podrá adoptarse una vez transcurridos:",
        a: "6 meses desde que se dictó el acto administrativo.",
        b: "1 año desde que se dictó el acto administrativo.",
        c: "2 años desde que se dictó el acto administrativo.",
        d: "4 años desde que se dictó el acto administrativo.",
        correct: "d"
    },
    {
        id: 46,
        q: "Según el artículo 108 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, iniciado el procedimiento de revisión de oficio, el órgano competente para resolver podrá suspender la ejecución del acto:",
        a: "Siempre.",
        b: "Nunca.",
        c: "Antes del transcurso de 6 meses.",
        d: "Cuando la ejecución pudiera causar perjuicios de imposible o difícil reparación.",
        correct: "d"
    },
    {
        id: 47,
        q: "Según La Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, un acto que tenga contenido imposible:",
        a: "Es nulo de pleno derecho y no puede ser objeto de convalidación.",
        b: "Es nulo de pleno derecho y puede ser objeto de convalidación.",
        c: "Es anulable y puede ser objeto de convalidación.",
        d: "Es anulable y no puede ser objeto de convalidación.",
        correct: "a"
    },
    {
        id: 48,
        q: "Señala el artículo 36 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, la forma de los actos administrativos, según el cual:",
        a: "Los actos administrativos, a menos que su naturaleza exija otra forma más adecuada de expresión y constancia, se producirán por escrito a través de medios electrónicos.",
        b: "Los actos administrativos, a menos que su naturaleza exija otra forma más adecuada de expresión y constancia, por escrito a través de medios no electrónicos.",
        c: "Los actos administrativos, a menos que su naturaleza exija otra forma más adecuada de expresión y constancia, por escrito a través de medios electrónicos o no electrónicos.",
        d: "Los actos administrativos, a menos que su naturaleza exija otra forma más adecuada de expresión y constancia, verbalmente.



 V.13.08.25                                                                                            Página 14
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 49,
        q: "Según el artículo 121.2 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, el recurso de alzada podrá interponerse:",
        a: "Únicamente ante el órgano que dictó el acto que se impugna.",
        b: "Sólo ante el órgano competente para resolverlo.",
        c: "Ante el superior jerárquico del órgano competente para resolverlo.",
        d: "Ante el órgano que dictó el acto que se impugna o ante el competente para resolverlo.



 V.13.08.25                                                                                        Página 15
 Temario Específico. Auxiliar Administrativo/a
 Tema 3. Procedimiento Administrativo Común (II): Las fases del procedimiento administrativo. Iniciación, Ordenación, Instrucción y Finalización. La ejecución.",
        correct: "d"
    },
    {
        id: 50,
        q: "Respecto al inicio del procedimiento de oficio al que se refiere la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas en el artículo 62, ¿qué se entiende por denuncia?",
        a: "El acto por el que cualquier persona, en cumplimiento o no de una obligación legal, pone en conocimiento de un órgano administrativo la existencia de un determinado hecho que pudiera justificar la iniciación de oficio de un procedimiento administrativo.",
        b: "La actuación derivada del conocimiento directo o indirecto de las circunstancias, conductas o hechos objetos del procedimiento por el órgano que tiene atribuida la competencia de iniciación.",
        c: "La propuesta de iniciación del procedimiento formulada por cualquier órgano administrativo que no tiene competencia para iniciar el mismo y que ha tenido conocimiento de las circunstancias, conductas o hechos objeto del procedimiento.",
        d: "La orden emitida por un órgano administrativo superior jerárquico del competente para la iniciación del procedimiento.",
        correct: "a"
    },
    {
        id: 51,
        q: "Según el artículo 100 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, la ejecución forzosa por las Administraciones Públicas se efectuará, respetando siempre el principio de proporcionalidad, por los siguientes medios:",
        a: "Apremio sobre el patrimonio, ejecución solidaria, multa coercitiva y compulsión sobre las personas.",
        b: "Apremio sobre las personas, ejecución solidaria, multa coercitiva y compulsión sobre el patrimonio.",
        c: "Apremio sobre el patrimonio, ejecución subsidiaria, multa coercitiva y compulsión sobre las personas.",
        d: "Apremio sobre las personas, ejecución solidaria, multa coercitiva y compulsión sobre el patrimonio.",
        correct: "c"
    },
    {
        id: 52,
        q: "Iniciado el procedimiento, el órgano administrativo competente para resolver, podrá adoptar, en los términos que previene el artículo 56 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, las medidas provisionales que estime oportunas si lo hace:",
        a: "De oficio.",
        b: "De oficio o a instancia de parte.",
        c: "De oficio o a instancia de parte y de forma motivada.",
        d: "De manera electrónica.



 V.13.08.25                                                                                            Página 16
 Temario Específico. Auxiliar Administrativo/a",
        correct: "c"
    },
    {
        id: 53,
        q: "La Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, en su Título IV, distingue los siguientes capítulos sobre el procedimiento administrativo común:",
        a: "Iniciación, Instrucción y Finalización.",
        b: "Iniciación, Ordenación, Instrucción, Finalización y Reclamación.",
        c: "Iniciación, Instrucción, Finalización y Ejecución.",
        d: "Garantías, Iniciación, Ordenación, Instrucción, Finalización, tramitación Simplificada y Ejecución.",
        correct: "d"
    },
    {
        id: 54,
        q: "¿Qué se entiende por Expediente Administrativo según lo dispuesto en el artículo 70 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas?",
        a: "El conjunto ordenado de documentos que sirven de antecedentes y fundamento a la instrucción del procedimiento, así como las diligencias encaminadas a ejecutarla.",
        b: "El conjunto ordenado de documentos y actuaciones que sirven de antecedente y fundamento a la resolución administrativa, así como las diligencias encaminadas a ejecutarla.",
        c: "El conjunto ordenado de documentos y actuaciones que sirven de antecedente y fundamento a la instrucción del procedimiento, así como las diligencias encaminadas a ejecutarla.",
        d: "El conjunto ordenado de documentos que sirven de antecedente y fundamento a la resolución administrativa, así como las diligencias encaminadas a ejecutarla.",
        correct: "b"
    },
    {
        id: 55,
        q: "Respecto al inicio del procedimiento a solicitud del interesado, según se refiere el artículo 66 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, no es correcto afirmar lo siguiente:",
        a: "Las oficinas de asistencia en materia de registros estarán obligadas a facilitar a los interesados el código de identificación si el interesado lo desconoce.",
        b: "Las Administraciones Públicas deberán mantener y actualizar en la sede electrónica correspondiente un listado con los códigos de identificación vigentes.",
        c: "Cuando las pretensiones correspondientes a una pluralidad de personas tengan un contenido y fundamento idéntico o sustancialmente similar, serán en todo caso formuladas en una única solicitud.",
        d: "De las solicitudes, comunicaciones y escritos que se presenten electrónicamente o en las oficinas de asistencia en materia de registros de la Administración, podrán éstos exigir el correspondiente recibo que acredite la fecha y hora de presentación.",
        correct: "c"
    },
    {
        id: 56,
        q: "Según el artículo 103.1 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, cuando así lo autorice una disposición administrativa, y en la forma y cuantía que éstas determine, las Administraciones Públicas pueden, para la ejecución de determinados actos, imponer multas coercitivas, reiteradas por lapsos de tiempo que sean suficientes para cumplir lo ordenado, en los siguientes supuestos:",
        a: "Actos personalísimos en que proceda la compulsión directa sobre la persona del obligado.",
        b: "Actos en que, procediendo la compulsión, la Administración no la estimara conveniente.",
        c: "Actos cuya ejecución no pueda el obligado encargar a otra persona.",
        d: "Actos que impongan una obligación personalísima de no hacer.


 V.13.08.25                                                                                            Página 17
 Temario Específico. Auxiliar Administrativo/a",
        correct: "b"
    },
    {
        id: 57,
        q: "Según el artículo 82 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, se podrá prescindir del trámite de audiencia:",
        a: "Cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resolución otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.",
        b: "Cuando figuren en el procedimiento o sean tenidos en cuenta en la resolución otros hechos o alegaciones y pruebas adicionales a las aducidas por el interesado.",
        c: "Cuando lo autorice el superior jerárquico del órgano actuante.",
        d: "Nunca se podrá prescindir de este trámite.",
        correct: "a"
    },
    {
        id: 58,
        q: "Cuando lo considere necesario, la ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, regula que el instructor, a petición de los interesados, podrá decidir la apertura de un período extraordinario de prueba por un plazo:",
        a: "No superior a dos días.",
        b: "No superior a cinco días.",
        c: "No superior a 7 días.",
        d: "No superior a 10 días.",
        correct: "d"
    },
    {
        id: 59,
        q: "Respecto a la práctica de la prueba regulada en el artículo 78 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, la Administración comunicará a los interesados el inicio de las actuaciones necesarias para la realización de las pruebas que hayan sido admitidas:",
        a: "Con 24 horas de antelación.",
        b: "Con 48 horas de antelación.",
        c: "Con 72 horas de antelación.",
        d: "Con antelación suficiente.",
        correct: "d"
    },
    {
        id: 60,
        q: "Según el artículo 88 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, la resolución que ponga fin al procedimiento decidirá todas las cuestiones planteadas por los interesados y aquellas otras derivadas del mismo. Ahora bien, cuando se trate de cuestiones conexas que no hubieran sido planteadas por los interesados:",
        a: "El órgano competente no podrá pronunciarse sobre las mismas.",
        b: "El órgano competente podrá pronunciarse sobre las mismas.",
        c: "El órgano competente podrá pronunciarse sobre las mismas, poniéndolo antes de manifiesto a aquéllos por un plazo no superior a 15 días.",
        d: "El órgano competente podrá pronunciarse sobre las mismas, poniéndolo antes de manifiesto a aquéllos por un plazo no superior a un mes.",
        correct: "c"
    },
    {
        id: 61,
        q: "Dispone el artículo 56.2 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, que las medidas provisionales deberán ser confirmadas, modificadas o levantadas en el acuerdo de iniciación del procedimiento, que deberá efectuarse dentro de los:",
        a: "10 días siguientes a su adopción, el cual no podrá ser objeto de recurso.",
        b: "15 días siguientes a su adopción, el cual podrá ser objeto del recurso que proceda.",
        c: "15 días siguientes a su adopción, el cual no podrá ser objeto de recurso.",
        d: "10 días siguientes a su adopción, el cual podrá ser objeto del recurso que proceda.


 V.13.08.25                                                                                          Página 18
 Temario Específico. Auxiliar Administrativo/a",
        correct: "b"
    },
    {
        id: 62,
        q: "Dispone el artículo 83 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, que el trámite de información pública será por un plazo:",
        a: "De veinte días.",
        b: "No inferior a veinte días.",
        c: "No superior a veinte días.",
        d: "De diez días.",
        correct: "b"
    },
    {
        id: 63,
        q: "Se podrán adoptar medidas provisionales que estime oportunas para asegurar la eficacia de la resolución que pudiera recaer (artículo 56 Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas):",
        a: "Antes de iniciar el procedimiento, el órgano administrativo competente para iniciar o instruir, de oficio o a instancia de parte y de forma motivada.",
        b: "Iniciado el procedimiento, el órgano administrativo competente para resolver, de oficio o a instancia de parte y de forma motivada.",
        c: "Antes de iniciar el procedimiento, el órgano administrativo competente para resolver, de oficio o a instancia de parte y de forma motivada.",
        d: "Iniciado el procedimiento, el órgano administrativo competente para iniciar o instruir, de oficio y de forma motivada.",
        correct: "b"
    },
    {
        id: 64,
        q: "Respecto a la declaración responsable, regulada en el artículo 69 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, las Administraciones podrán requerir que se aporte la documentación que acredite el cumplimiento de los requisitos para obtener el reconocimiento de un derecho o facultad o para su ejercicio:",
        a: "En cualquier momento y el interesado podrá no aportarla.",
        b: "Durante la fase de ordenación y el interesado podrá no aportarla.",
        c: "En cualquier momento y el interesado deberá aportarla.",
        d: "Durante la fase de ordenación y el interesado deberá aportarla.",
        correct: "c"
    },
    {
        id: 65,
        q: "Según el artículo 58 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, los procedimientos se iniciarán de oficio por acuerdo del órgano competente:",
        a: "Por iniciativa propia.",
        b: "Como consecuencia de orden superior",
        c: "A petición razonada de otros órganos.",
        d: "Por cualquiera de las anteriores, e incluso por denuncia.",
        correct: "d"
    },
    {
        id: 66,
        q: "Dispone el artículo 76 de la Ley 39/ 2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, que los interesados podrán alegar los defectos de tramitación y, en especial, los que supongan paralización, infracción de los plazos preceptivamente señalados o la omisión de trámites que pueden ser subsanados antes de la resolución definitiva del asunto:",
        a: "En todo momento.",
        b: "En cualquier momento del procedimiento anterior al acuerdo de iniciación.",
        c: "En cualquier momento del procedimiento anterior al trámite de audiencia.",
        d: "En cualquier momento del procedimiento anterior al trámite de información pública.


 V.13.08.25                                                                                            Página 19
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 67,
        q: "La multa coercitiva es, según se regula en el artículo 103 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas:",
        a: "Dependiente de las sanciones que puedan imponerse con tal carácter e incompatible con ellas.",
        b: "Independiente de las sanciones que puedan imponerse con tal carácter y compatible con ellas.",
        c: "Dependiente de las sanciones que puedan imponerse con tal carácter y compatible con ellas.",
        d: "Independiente de las sanciones que puedan imponerse con tal carácter e incompatible con ellas.",
        correct: "b"
    },
    {
        id: 68,
        q: "A los interesados que no cumplan lo dispuesto en cuanto al cumplimiento de trámites se les podrá declarar decaídos en su derecho al trámite correspondiente. No obstante, se admitirá la actuación del interesado y producirá sus efectos legales, si se produjera:",
        a: "Antes del día que se notifique la resolución en la que se tenga por transcurrido el plazo. (Art. 73.1 Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas)",
        b: "Antes o dentro del día que se notifique la resolución en la que se tenga por transcurrido el plazo. (Art. 73.3 Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas)",
        c: "Hasta 24 horas después del día que se notifique la resolución en la que se tenga por transcurrido el plazo. (Art.73.1 Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas)",
        d: "Hasta 48 horas después del día que se notifique la resolución en la que se tenga por transcurrido el plazo. (Art. 73.3 Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas)",
        correct: "b"
    },
    {
        id: 69,
        q: "De acuerdo con el artículo 72 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, el principio de simplificación administrativa implica:",
        a: "Se acordarán en un solo acto todos los trámites que, por su naturaleza, admitan un impulso simultáneo y sea obligado su cumplimiento sucesivo.",
        b: "Se acordarán en sucesivos actos todos los trámites que, por su naturaleza, admitan un impulso simultáneo y no sea obligado su cumplimiento sucesivo.",
        c: "Se acordarán en un solo acto todos los trámites que, por su naturaleza, admitan un impulso simultáneo y no sea obligado su cumplimiento sucesivo.",
        d: "Se acordarán en sucesivos actos todos los trámites que, por su naturaleza, admitan un impulso simultáneo y sea obligado su cumplimiento sucesivo.



 V.13.08.25                                                                                             Página 20
 Temario Específico. Auxiliar Administrativo/a",
        correct: "c"
    },
    {
        id: 70,
        q: "De acuerdo con el artículo 73 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, los trámites que deban ser cumplimentados por los interesados deberán realizarse en el plazo de:",
        a: "Treinta días a partir del siguiente al de la notificación del correspondiente acto, salvo en el caso de que en la norma correspondiente se fije plazo distinto.",
        b: "Veinte días a partir del siguiente al de la notificación del correspondiente acto, salvo en el caso de que en la norma correspondiente se fije plazo distinto.",
        c: "Quince días a partir del siguiente al de la notificación del correspondiente acto, salvo en el caso de que en la norma correspondiente se fije plazo distinto.",
        d: "Diez días a partir del siguiente al de la notificación del correspondiente acto, salvo en el caso de que en la norma correspondiente se fije plazo distinto.",
        correct: "d"
    },
    {
        id: 71,
        q: "Tal como dispone el artículo 77 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, cuando la Administración no tenga por ciertos los hechos alegados por los interesados o la naturaleza del procedimiento lo exija, el instructor acordará la apertura de un período de prueba por un plazo:",
        a: "No superior a treinta días ni inferior a cinco.",
        b: "No superior a diez días ni inferior a cinco.",
        c: "No superior a veinte días ni inferior a quince.",
        d: "No superior a treinta días ni inferior a diez.",
        correct: "d"
    },
    {
        id: 72,
        q: "Según el artículo 74 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, las cuestiones incidentales que se susciten en el procedimiento:",
        a: "Suspenderán la tramitación del mismo.",
        b: "No suspenderán la tramitación del mismo.",
        c: "No suspenderá la tramitación del mismo, salvo la recusación.",
        d: "Suspenderá la tramitación del mismo en ciertos casos.",
        correct: "c"
    },
    {
        id: 73,
        q: "Establece el artículo 71 de la Ley 39/2015,de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, que el procedimiento, sometido al principio de celeridad, se impulsará de oficio en todos sus trámites y a través de medios electrónicos, respetando los principios de:",
        a: "Transparencia y publicidad.",
        b: "Economía y eficacia.",
        c: "Economía y eficiencia.",
        d: "Transparencia e información pública.",
        correct: "a"
    },
    {
        id: 74,
        q: "En relación con la ejecución forzosa que se encuentra regulada en el artículo 100 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, indique cuál de las siguientes afirmaciones es correcta:",
        a: "Se efectuará siempre respetando el principio de proporcionalidad.",
        b: "Si fueran varios los medios de ejecución admisibles, se elegirá el menos restrictivo de la seguridad individual.",
        c: "Si fuese necesario entrar en el domicilio del afectado se necesitará en todo caso, autorización judicial.",
        d: "Se efectuará siempre respetando el principio de proporcionalidad e igualdad.


 V.13.08.25                                                                                               Página 21
 Temario Específico. Auxiliar Administrativo/a
 Tema 4.Funcionamiento electrónico del Sector Público (I): Sede electrónica. Canales y puntos de acceso. Identificación y autenticación. Firma electrónica. Tema 5.El Funcionamiento electrónico del Sector Público (II).El acceso electrónico de la ciudadanía a los servicios públicos. Los servicios públicos electrónicos. Derecho y obligación de relacionarse electrónicamente con las Administraciones Públicas.",
        correct: "a"
    },
    {
        id: 75,
        q: "Según la Ley 39/2015, de 1 de octubre del Procedimiento Administrativo Común de las Administraciones Públicas, los poderes inscritos en el registro tendrán una validez determinada, con un máximo de:",
        a: "5 años no prorrogables ni revocables.",
        b: "5 años prorrogables por otros 5 años más.",
        c: "5 años prorrogables por otro tiempo determinado, máximo 5 años.",
        d: "5 años revocables.",
        correct: "d"
    },
    {
        id: 76,
        q: "Según dispone el artículo 38 de la Ley 40/2015, de 1 de octubre, del Régimen Jurídico del Sector Público, ¿qué conlleva el establecimiento de una sede electrónica?",
        a: "La responsabilidad del titular respecto de la integridad, veracidad y actualización de la información y los servicios a las que pueda accederse a través de la misma.",
        b: "La responsabilidad del titular respecto del establecimiento de comunicaciones seguras.",
        c: "La responsabilidad del titular respecto a la veracidad de las comunicaciones.",
        d: "La responsabilidad del titular respecto del acceso de las comunicaciones.",
        correct: "a"
    },
    {
        id: 77,
        q: "Según dispone el artículo 43 de la Ley 40/2015, de 1 de octubre, del Régimen Jurídico del Sector Público: \"Sin perjuicio de lo previsto en los artículos 38, 41 y 42, la actuación de una Administración Pública, órgano, organismo público o entidad de derecho público, cuando utilice medios electrónicos, se realizará mediante:\"",
        a: "Sello electrónico del titular del órgano o empleado público.",
        b: "Firma electrónica del titular del órgano o empleado público.",
        c: "Certificado electrónico del titular del órgano.",
        d: "Certificado electrónico del empleado público.",
        correct: "b"
    },
    {
        id: 78,
        q: "A tenor del artículo 12.2 de la Ley 39/2015, de 1 de octubre del Procedimiento Administrativo Común de las Administraciones Públicas, su algunos de los interesados, con derecho a ser asistidos en el uso de medios electrónicos no dispone de los medios electrónicos necesarios, su identificación o firma electrónica en el procedimiento administrativo:",
        a: "No podrá ser realizado por funcionario público.",
        b: "Podrá ser válidamente realizada por un funcionario público.",
        c: "Se tramitará por cualquier funcionario público un sistema válido de identificación o firma electrónica.",
        d: "Será sustituida por su firma presencial, mediante escrito dirigido al órgano encargado de tramitar el procedimiento administrativo.



 V.13.08.25                                                                                             Página 22
 Temario Específico. Auxiliar Administrativo/a",
        correct: "b"
    },
    {
        id: 79,
        q: "Conforme al artículo 38 de la Ley 40/2015, de 1 de octubre, del Régimen Jurídico del Sector Público, la sede electrónica es aquella dirección electrónica, disponible para los ciudadanos a través de redes de telecomunicaciones, cuya titularidad corresponde a:",
        a: "Únicamente a una Administración Pública.",
        b: "A uno o varios organismos públicos, en el ejercicio de competencias delegadas.",
        c: "A una o varias entidades de Derecho Privado en el ejercicio de sus competencias.",
        d: "A una Administración Pública, o bien a una o varios organismos públicos o entidades de Derecho Público en el ejercicio de sus competencias.",
        correct: "d"
    },
    {
        id: 80,
        q: "Corresponde determinar las condiciones e instrumentos de creación de las sedes electrónicas, según el artículo 38.3 de la Ley 40/2015, de 1 de octubre, del Régimen Jurídico del Sector Público:",
        a: "Al Ministerio de Hacienda y Administraciones Públicas.",
        b: "Al órgano colegiado correspondiente de cada Comunidad Autónoma.",
        c: "Al Gobierno mediante Real Decreto.",
        d: "A cada Administración Pública.",
        correct: "d"
    },
    {
        id: 81,
        q: "Señala el artículo 46 de la Ley 40/2015, de 1 de octubre, del Régimen Jurídico del Sector Público, los medios o soportes en que se almacenen documentos, deberán contar con medidas de seguridad, de acuerdo con lo previsto en:",
        a: "El Esquema Nacional de Seguridad.",
        b: "El Punto de Acceso General electrónico de la Administración.",
        c: "El Registro Electrónico General de cada Administración.",
        d: "El Consejo de Ministros.",
        correct: "a"
    },
    {
        id: 82,
        q: "Indique cuál de los siguientes principios, coinciden con la definición de personalización y proactividad, recogido en el artículo 2 del Real Decreto 203/2021, de 30 de marzo, por el que se aprueba el Reglamento de actuación y funcionamiento del sector público por medios electrónicos:",
        a: "Principio que determina que el diseño de los servicios electrónicos esté centrado en las personas usuarias, de forma que se minimice el grado de conocimiento necesario para el uso del servicio.",
        b: "Capacidad de los sistemas de información y, por ende, de los procedimientos a los que estos dan soporte, de compartir datos y posibilitar el intercambio de información entre ellos.",
        c: "Principio en cuya virtud sólo se exigirán las garantías y medidas de seguridad adecuadas a la naturaleza y circunstancias de los distintos trámites y actuaciones electrónicos.",
        d: "Capacidad de las Administraciones Públicas para que, partiendo del conocimiento adquirido del usuario final del servicio, proporcione servicios precumplimentados y se anticipe a las posibles necesidades de los mismos.



 V.13.08.25                                                                                             Página 23
 Temario Específico. Auxiliar Administrativo/a",
        correct: "d"
    },
    {
        id: 83,
        q: "Según la Ley 39/2015, de 1 de octubre del Procedimiento Administrativo Común de las Administraciones Públicas, las entidades sin personalidad jurídica, tienen:",
        a: "El derecho de relacionarse electrónicamente con las Administraciones Públicas, pudiendo elegir el medio en cualquier momento del procedimiento, siempre y cuando quede constancia de la decisión.",
        b: "El deber de relacionarse con las Administraciones Públicas en cualquier tipo de procedimiento, salvo que lo hagan por medio de representante.",
        c: "La obligación de relacionarse con la Administración Pública por medios electrónicos.",
        d: "La obligación de relacionarse por cualquier tipo de medio, siempre que quede constancia del mismo, y teniendo efectos dicha decisión, a partir del quinto día hábil desde la recepción de la solicitud.",
        correct: "c"
    },
    {
        id: 84,
        q: "Según el artículo 46 bis de la Ley 40/2015, de 1 de octubre, del Régimen Jurídico del Sector Público, los sistemas de información y comunicaciones para la recogida, almacenamiento, procesamiento y gestión del censo electoral y los padrones municipales de habitantes, entre otro, deberán ubicarse y prestarse dentro:",
        a: "Del territorio nacional.",
        b: "Del territorio de la Unión Europea.",
        c: "Del territorio europeo.",
        d: "Del territorio internacional.",
        correct: "b"
    },
    {
        id: 85,
        q: "Según el artículo 39 de la Ley 40/2015, de 1 de octubre, del Régimen Jurídico del Sector Público, se entiende por el punto de acceso electrónico, cuya titularidad corresponda a una Administración Pública, organismo público o entidad de Derecho Público que permite el acceso a través de internet a la información publicada y, en su caso, a la sede electrónica correspondiente:",
        a: "Al portal de internet.",
        b: "A una página online.",
        c: "Al portal electrónico.",
        d: "A la sede electrónica.",
        correct: "a"
    },
    {
        id: 86,
        q: "Según la Ley 39/2015, de 1 de octubre del Procedimiento Administrativo Común de las Administraciones Públicas, ¿cuál de los siguientes no es un sistema admitido por las Administraciones Públicas para la identificación electrónica de los interesados?",
        a: "Sistemas basados en certificados electrónicos cualificados de sello electrónico.",
        b: "Sistema de registro de usuario cualificado.",
        c: "Sistemas basados en certificados electrónicos cualificados de firma electrónica.",
        d: "Sistemas de clave concertada.",
        correct: "b"
    },
    {
        id: 87,
        q: "Conforme al Real Decreto 203/2021, de 30 de marzo, por el que se aprueba el Reglamento de actuación y funcionamiento del sector público por medios electrónicos, se dará por efectuado el trámite de notificación y se continuará el procedimiento, en los casos en que transcurra:",
        a: "10 días hábiles sin acceso a la misma.",
        b: "10 días naturales sin acceso a la misma.",
        c: "5 días hábiles sin acceso a la misma.",
        d: "5 días naturales sin acceso a la misma.


 V.13.08.25                                                                                            Página 24
 Temario Específico. Auxiliar Administrativo/a",
        correct: "b"
    },
    {
        id: 88,
        q: "¿Qué se entiende por cualquier acto o actuación realizada íntegramente a través de medios electrónicos por una Administración Pública en el marco de un procedimiento administrativo y en la que no haya intervenido de forma directa un empleado público, según la Ley 40/2015, de 1 de octubre, del Régimen Jurídico del Sector Público?",
        a: "Expediente administrativo electrónico.",
        b: "Actuación administrativa automatizada.",
        c: "Sede electrónica.",
        d: "Procedimiento electrónico.",
        correct: "b"
    },
    {
        id: 89,
        q: "Cuando los participantes en las comunicaciones pertenezcan a una misma Administración Pública, ésta determinará las condiciones y garantías por las que se regirá que:",
        a: "Comprenderá la relación de emisores y receptores autorizados, pero no la naturaleza de los datos a intercambiar.",
        b: "No comprenderá la relación de emisores y receptores autorizados, pero no la naturaleza de los datos a intercambiar.",
        c: "Al menos, comprenderá la relación de emisores y receptores autorizados y la naturaleza de los datos a intercambiar.",
        d: "En ningún caso, comprenderá la relación de emisores y receptores autorizados y la naturaleza de los datos a intercambiar.",
        correct: "c"
    },
    {
        id: 90,
        q: "Cuando los participantes en las comunicaciones pertenezcan a distintas Administraciones, las condiciones y garantías por las que se regirán:",
        a: "Se establecerá por la Administración que inicie el envío de las comunicaciones.",
        b: "Se establecerá por la Administración que sea superior jerárquicamente a los demás.",
        c: "Se establecerán mediante convenio suscrito entre aquellas.",
        d: "Son las que se establecen en la presente Ley.",
        correct: "c"
    },
    {
        id: 91,
        q: "Según dispone el artículo 44 de la Ley 40/2015, de 1 de octubre, del Régimen Jurídico del Sector Público, cuando los participantes en las comunicaciones pertenezcan a distintas Administraciones, las condiciones y garantías por las que se regirá:",
        a: "Se establecerán por la Administración que inicie el envíe de las comunicaciones.",
        b: "Son las que se establecen en la presente Ley.",
        c: "Se establecerá por la Administración que sea superior jerárquicamente a los demás.",
        d: "Se establecerán mediante convenio suscrito entre aquellas.",
        correct: "d"
    },
    {
        id: 92,
        q: "El artículo 43.2 de la Ley 40/2015, de 1 de octubre, del Régimen Jurídico del Sector Público, \"Cada Administración Pública determinará los sistemas de firma electrónica que debe utilizar su personal, los cuales:\"",
        a: "Podrán identificar de forma conjunta al titular del puesto de trabajo o cargo y a la Administración u órgano en la que presta sus servicios.",
        b: "Identificarán de forma separada al titular del puesto de trabajo o cargo y a la Administración u órgano en la que presta sus servicios.",
        c: "Únicamente identificarán al titular del puesto de trabajo o cargo.",
        d: "No podrán identificar de forma conjunta al titular del puesto de trabajo o cargo y a la Administración u órgano en la que presta sus servicios.



 V.13.08.25                                                                                            Página 25
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 93,
        q: "Cuando los participantes en las comunicaciones pertenezcan a una misma Administración Pública, ésta determinará las condiciones y garantías por las que se regirá que: (artículo 44 de la Ley 40/2015, de 1 de octubre, del Régimen Jurídico del Sector Público)",
        a: "No comprenderá la relación de emisores y receptores autorizados, pero sí la naturaleza de los datos a intercambiar.",
        b: "Al menos, comprenderá la relación de emisores y receptores autorizados y la naturaleza de los datos a intercambiar.",
        c: "En ningún caso comprenderá la relación de emisores y receptores autorizados y la naturaleza de los datos a intercambiar.",
        d: "Comprenderá la relación de emisores y receptores autorizados, pero no la naturaleza de los datos a intercambiar.",
        correct: "b"
    },
    {
        id: 94,
        q: "Dispone la Ley 39/2015, de 1 de octubre del Procedimiento Administrativo Común de las Administraciones Públicas que, mantendrán actualizado un registro, u otro sistema equivalente, donde constarán los funcionarios habilitados para la identificación o firma electrónica:",
        a: "La Administración General del Estado.",
        b: "La Administración General del Estado y las Comunidades Autónomas.",
        c: "Las Comunidades Autónomas y las Entidades Locales.",
        d: "La Administración General del Estado, las Comunidades Autónomas y las Entidades Locales.",
        correct: "d"
    },
    {
        id: 95,
        q: "El artículo 46 de la Ley 40/2015, de 1 de octubre, del Régimen Jurídico del Sector Público relativo al Archivo electrónico de documentos, \"los documentos utilizados en las actuaciones administrativas se almacenarán\":",
        a: "Por medios electrónicos, salvo cuando no sea posible.",
        b: "Siempre por medios electrónicos y medios no electrónicos.",
        c: "Por medios no electrónicos, salvo cuando no sea lo más adecuado para su conservación.",
        d: "Siempre por medios electrónicos.",
        correct: "a"
    },
    {
        id: 96,
        q: "Según la Ley 39/2015, de 1 de octubre del Procedimiento Administrativo Común de las Administraciones Públicas, podrá revocar o prorrogar el poder:",
        a: "El poderdante en cualquier momento antes de la finalización del plazo de validez del poder.",
        b: "El apoderado una vez finalizado el plazo de validez del poder.",
        c: "El apoderado en cualquier momento antes de la finalización del plazo de validez del poder.",
        d: "El poderdante una vez finalizado el plazo de validez del poder.",
        correct: "a"
    },
    {
        id: 97,
        q: "En relación con los sistemas de identificación electrónica previstos en el artículo 9.2 c) de la Ley 39/2015, de 1 de octubre del Procedimiento Administrativo Común de las Administraciones Públicas, cuando se trate de categorías especiales de datos a los que se refiere el artículo 9 del Reglamento (UE) 2016/679, del Parlamento Europeo y del Consejo, se establece la obligatoriedad de que los recursos técnicos necesarios para la recogida, almacenamiento, tratamiento y gestión de dichos sistemas se encuentren situados:",
        a: "En instalaciones calificadas de alta seguridad, con independencia del territorio donde se encuentren.",
        b: "En territorio europeo.",
        c: "En territorio español.",
        d: "en instalaciones calificadas de alta protección informática, con independencia del territorio donde se encuentren.
 V.13.08.25                                                                                               Página 26
 Temario Específico. Auxiliar Administrativo/a",
        correct: "c"
    },
    {
        id: 98,
        q: "Tal y como dispone el artículo 40 de la Ley 40/2015, de 1 de octubre, del Régimen Jurídico del Sector Público, las Administraciones Públicas podrán identificarse mediante el uso de:",
        a: "Cualquier sistema electrónico basado en un certificado electrónico reconocido o cualificado que reúna los requisitos exigido por la legislación de firma electrónica.",
        b: "Cualquier sistema electrónico basado en un certificado electrónico reconocido o cualificado que reúna los requisitos exigidos por la legislación de protección de datos.",
        c: "Un sello electrónico basado en un certificado electrónico reconocido o cualificado que reúna los requisitos exigidos por la legislación de protección de datos.",
        d: "Un sello electrónico basado en un certificado electrónico reconocido o cualificado que reúna los requisitos exigidos por la legislación de firma electrónica.



 V.13.08.25                                                                                            Página 27
 Temario Específico. Auxiliar Administrativo/a
 Tema 6.Funcionamiento electrónico del Sector Público (III): Registro y archivo electrónico. Comunicaciones y notificaciones electrónicas. Tema 7.Funcionamiento electrónico del sector público (IV): La gestión electrónica de los procedimientos administrativos. Expediente y documento electrónico. La simplificación y reducción de cargas administrativas en la tramitación electrónica en las Administraciones Públicas.",
        correct: "d"
    },
    {
        id: 99,
        q: "¿Cuándo se entenderán practicadas las notificaciones por medios electrónicos, según el artículo 43.2 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas?",
        a: "Una vez enviadas por la Administración Pública correspondiente.",
        b: "En el momento en que se comunica al interesado su disponibilidad en la sede electrónica única.",
        c: "En el momento en que se produzca el acceso a su contenido.",
        d: "En el momento en que el interesado confirma, mediante los enlaces correspondientes, la lectura y conformidad con el contenido de la notificación.",
        correct: "c"
    },
    {
        id: 100,
        q: "Conforme al artículo 80 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, los informes serán emitidos a través de medios electrónicos y, salvo que una disposición o el cumplimiento del resto de los plazos del procedimiento permita o exija otro plazo mayor o menos, en el plazo de:",
        a: "10 días.",
        b: "15 días.",
        c: "20 días.",
        d: "30 días.",
        correct: "a"
    },
    {
        id: 101,
        q: "El conjunto de documentos electrónicos correspondientes a un procedimiento administrativo, cualquiera que sea el tipo de información que contengan, recibe el nombre de:",
        a: "Metadatos.",
        b: "Archivo electrónico.",
        c: "Expediente electrónico.",
        d: "Oficio electrónico.",
        correct: "c"
    },
    {
        id: 102,
        q: "Respecto a los registros electrónicos de apoderamientos, conforme el artículo 6 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, no es correcto:",
        a: "En el ámbito estatal, este registro será el Registro Electrónico de Apoderamientos de la Administración General del Estado.",
        b: "En ellos no constará el bastanteo realizado del poder.",
        c: "Los registros generales de apoderamientos no impedirán la existencia de registros particulares en cada Organismo.",
        d: "Cada Organismo podrá disponer de su propio registro electrónico de apoderamientos.



 V.13.08.25                                                                                           Página 28
 Temario Específico. Auxiliar Administrativo/a",
        correct: "b"
    },
    {
        id: 103,
        q: "Las normas técnicas de interoperabilidad:",
        a: "Son de preceptivo cumplimiento sólo para la Administración General del Estado.",
        b: "Son de potestativo cumplimiento para todas las Administraciones Públicas.",
        c: "Son de preceptivo cumplimiento para todas las Administraciones Públicas.",
        d: "Son de potestativo cumplimiento sólo para la Administración General del Estado.",
        correct: "c"
    },
    {
        id: 104,
        q: "Según el artículo 41.1 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, ¿quiénes podrán decidir y comunicar en cualquier momento a la Administración Pública, mediante modelos normalizados que se establezcan al efecto, que las notificaciones sucesivas se practiquen o dejen de practicar por medios electrónicos?",
        a: "Todos los interesados.",
        b: "Los interesados que no estén obligados a recibir notificaciones electrónicas.",
        c: "Los interesados que estén obligados a recibir notificaciones electrónicas.",
        d: "Los interesados que estén obligados a recibir notificaciones por escrito.",
        correct: "b"
    },
    {
        id: 105,
        q: "El artículo 40.2 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, establece que toda notificación:",
        a: "Deberá ser cursada dentro del plazo de diez días a partir de la fecha en que el acto haya sido dictado, y deberá contener un resumen de la resolución, con indicación de si pone fin o no a la vía administrativa.",
        b: "Deberá ser cursada dentro del plazo de quince días a partir de la fecha en que el acto haya sido dictado, y deberá contener el texto íntegro de la resolución.",
        c: "Deberá ser cursada dentro del plazo de diez días a partir de la fecha en que el acto haya sido dictado, y deberá contener el texto íntegro de la resolución.",
        d: "Deberá ser cursada dentro del plazo de quince días a partir de la fecha en que el acto haya sido dictado, y deberá contener un resumen de la resolución, con indicación o no de si pone fin a la vía administrativa.",
        correct: "c"
    },
    {
        id: 106,
        q: "Según establece el artículo 43.2 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, cuando la notificación por medios electrónicos sea de carácter obligatorio, o haya sido expresamente elegida por el interesado, se entenderá rechazada cuando hayan transcurrido:",
        a: "Ocho días hábiles desde la puesta a disposición de la notificación sin que se acceda a su contenido.",
        b: "Diez días hábiles desde la puesta a disposición de la notificación sin que se acceda a su contenido.",
        c: "Quince días hábiles desde la puesta a disposición de la notificación sin que se acceda a su contenido.",
        d: "Diez días naturales desde la puesta a disposición de la notificación sin que se acceda a su contenido.



 V.13.08.25                                                                                            Página 29
 Temario Específico. Auxiliar Administrativo/a",
        correct: "d"
    },
    {
        id: 107,
        q: "Según el artículo 41.1 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, las Administraciones podrán establecer la obligación de practicar electrónicamente las notificaciones para determinados procedimientos:",
        a: "Mediante ley.",
        b: "Reglamentariamente.",
        c: "Mediante orden del órgano encargado de resolver.",
        d: "Mediante orden del órgano encargado de tramitar.",
        correct: "b"
    },
    {
        id: 108,
        q: "Las previsiones contenidas en la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, en materia de registro electrónico de apoderamientos, registro electrónico, registro de empleados públicos habilitados, punto de acceso general electrónico de la Administración y archivo único electrónico:",
        a: "Entraron en vigor al año de la publicación de la Ley en el BOE, esto es, el 2 de octubre de 2016.",
        b: "Producen efectos desde el día 2 de octubre de 2018.",
        c: "Producirán efectos a partir del día 2 de abril de 2021.",
        d: "Entraron en vigor el mismo día de publicación de la Ley en el Boletín Oficial del Estado, esto es, el 2 de octubre de 2015.",
        correct: "c"
    },
    {
        id: 109,
        q: "De acuerdo con el artículo 41.1 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, reglamentariamente, las Administraciones podrán establecer la obligación de practicar electrónicamente las notificaciones para determinados procedimientos y para ciertos colectivos de personas:",
        a: "Jurídicas que, por razón de su capacidad económica, técnica, dedicación profesional u otros motivos quede acreditado que tienen acceso y disponibilidad de los medios electrónicos necesarios.",
        b: "Físicas o jurídicas que, por razón de su capacidad económica, técnica, dedicación profesional u otros motivos quede acreditado que tienen acceso y disponibilidad de los medios electrónicos necesarios.",
        c: "Físicas que, por razón de su capacidad económica, técnica, dedicación profesional u otros motivos quede acreditado que tienen acceso y disponibilidad de los medios electrónicos necesarios",
        d: "Físicas o jurídicas que, por razón de su capacidad económica, residencia, horario, dedicación profesional u otros motivos quede acreditado que tienen acceso y disponibilidad de los medios electrónicos necesarios.",
        correct: "c"
    },
    {
        id: 110,
        q: "¿Cuál de los siguientes no es un requisito, que debe figurar en la solicitud de iniciación de un procedimiento administrativo?",
        a: "Hechos, razones y petición en que se concrete con toda claridad la solicitud.",
        b: "Órgano, centro o unidad administrativa a la que se dirige.",
        c: "Domicilio profesional a efectos de notificaciones.",
        d: "Firma del solicitante o acreditación de la autenticidad de su voluntad expresada por cualquier medio.



 V.13.08.25                                                                                              Página 30
 Temario Específico. Auxiliar Administrativo/a",
        correct: "c"
    },
    {
        id: 111,
        q: "El Esquema Nacional de Seguridad persigue crear las condiciones necesarias de confianza en el uso de los medios electrónicos, a través de:",
        a: "La creación de dispositivos seguros que permitan un tratamiento adecuado de la información.",
        b: "Incentivos económicos para las Administraciones y los ciudadanos.",
        c: "Medidas disciplinarias que castiguen el uso incorrecto de dichos medios y de la información que se trasmita a través de los mismos.",
        d: "Medidas para garantizar la seguridad de la información y los servicios electrónicos.",
        correct: "d"
    },
    {
        id: 112,
        q: "Según el Real Decreto 203/2021, de 30 de marzo, por el que se aprueba el Reglamento de actuación y funcionamiento del sector público por medios electrónicos, la conservación de los documentos electrónicos deberá realizarse de forma que permita su acceso y comprenda, como mínimo:",
        a: "Su autentificación, contenido, metadatos, firma y formato.",
        b: "Su identificación, contenido, firma, estructura y formato.",
        c: "Su identificación, contenido, metadatos, estructura y formato.",
        d: "Su identificación, contenido, metadatos, firma, estructura y formato.",
        correct: "d"
    },
    {
        id: 113,
        q: "Las normas técnicas de interoperabilidad se publicarán:",
        a: "Mediante Resolución de la secretaria de Estado para la Función Pública.",
        b: "Mediante Acuerdo del Comité Sectorial de Administración Electrónica.",
        c: "Mediante Resolución del Comité Sectorial de Administración Electrónica.",
        d: "Mediante orden del Ministerio de la Presidencia.",
        correct: "a"
    },
    {
        id: 114,
        q: "Conforme a lo dispuesto en el Real Decreto 203/2021, de 30 de marzo, por el que se aprueba el Reglamento de actuación y funcionamiento del sector público por medios electrónicos, el foliado de los expedientes administrativos electrónicos se llevará a cabo mediante:",
        a: "Un índice electrónico autenticado.",
        b: "Un índice electrónico sistemático.",
        c: "Un índice electrónico seguro.",
        d: "Un índice electrónico ordenado.",
        correct: "a"
    },
    {
        id: 115,
        q: "La Ley 11/2007, de 22 de junio, de acceso electrónico de los ciudadanos a los servicios públicos, no estableció como derecho de los ciudadanos, el derecho:",
        a: "A la igualdad en el acceso electrónico a los servicios de las Administraciones Públicas.",
        b: "A obtener copias electrónicas de los documentos electrónicos que formen parte de procedimientos en los que tengan la condición de interesado.",
        c: "A la calidad de los servicios públicos prestados por medios electrónicos.",
        d: "A la preferencia en la tramitación de los procedimientos presentados electrónicamente.",
        correct: "d"
    },
    {
        id: 116,
        q: "¿Cómo pueden las Administraciones Públicas habilitar a sus respectivos registros para la recepción de las solicitudes, escritos y comunicaciones de la competencia de otra Administración?",
        a: "Mediante contrato.",
        b: "Mediante convenio de colaboración.",
        c: "Mediante orden.",
        d: "Mediante decreto.
 V.13.08.25                                                                                            Página 31
 Temario Específico. Auxiliar Administrativo/a",
        correct: "b"
    },
    {
        id: 117,
        q: "Según el artículo 41.1 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, las notificaciones se practicarán, en todo caso, por medios electrónicos:",
        a: "A partir de del 1 de enero del año siguiente a la entrada en vigor de la Ley.",
        b: "Cuando la Administración resulte obligada a remitirlas por esta vía exclusivamente.",
        c: "Cuando el interesado resulte obligado a recibirlas por estas vías.",
        d: "A los seis meses de la entrada en vigor de la Ley.",
        correct: "c"
    },
    {
        id: 118,
        q: "Cuando el documento electrónico original se encuentre en poder de la Administración tendrá la consideración de copia auténtica:",
        a: "Independientemente de que el documento sea emitido por el ciudadano o por una Administración Pública.",
        b: "Siempre que el documento haya sido emitido por el ciudadano.",
        c: "Siempre que el documento haya sido emitido por esa Administración Pública.",
        d: "Siempre que se mantenga el original.",
        correct: "a"
    },
    {
        id: 119,
        q: "¿En qué situación pueden las Administraciones Públicas establecer la obligatoriedad de comunicarse con ellas utilizando sólo medios electrónicos?",
        a: "Nunca.",
        b: "Únicamente cuando los interesados sean personas jurídicas.",
        c: "Cuando los interesados sean personas jurídicas o colectivos de personas físicas que tengan garantizado el acceso y disponibilidad de los medios tecnológicos precisos.",
        d: "En todo caso.",
        correct: "c"
    },
    {
        id: 120,
        q: "Como señala el artículo 43.1 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, las notificaciones por medios electrónicos se practicarán mediante comparecencia:",
        a: "En la sede electrónica de la Administración u Organismo actuante en todo caso.",
        b: "En la sede electrónica de la Administración u Organismo actuante, a través de la dirección electrónica habilitada única o mediante ambos sistemas, según disponga la legislación de la Comunidad Autónoma correspondiente.",
        c: "En la sede electrónica de la Administración u Organismo actuante, a través de la dirección electrónica habilitada única o mediante ambos sistemas, según disponga cada Administración u Organismo.",
        d: "A través de la dirección electrónica única, en todo caso.",
        correct: "c"
    },
    {
        id: 121,
        q: "Según dispone el artículo 72 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, ¿qué implica el principio de simplificación administrativa?",
        a: "Que se acordarán en un solo acto todos los trámites que, por su naturaleza, admitan un impulso simultáneo y no sea obligado su cumplimiento sucesivo.",
        b: "Que se acordarán en un solo acto todos los trámites que, por su naturaleza, admitan un impulso simultáneo y sea obligado su cumplimiento sucesivo.",
        c: "Que se acordarán en un solo acto todos los trámites que, por su naturaleza, admitan un impulso simultáneo y sea solicitado por los interesados.",
        d: "Que no se podrán acordar en un solo acto aquellos trámites que, aunque admitan un impulso simultáneo.
 V.13.08.25                                                                                             Página 32
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 122,
        q: "Según el Real Decreto 203/2021, de 30 de marzo, por el que se aprueba el Reglamento de actuación y funcionamiento del sector público por medios electrónicos, las interconexiones entre Registros de las Administraciones Públicas deberán realizarse a través del:",
        a: "Sistema de Interconexión de Registros.",
        b: "Sistema de Registros Administrativos.",
        c: "Sistema de Aplicaciones registrales.",
        d: "Sistemas de registros de la Administración General del Estado.



 V.13.08.25                                                                                         Página 33
 Temario Específico. Auxiliar Administrativo/a
 Tema 8. El presupuesto de las entidades locales. Elaboración, aprobación y ejecución presupuestaria. Su control y fiscalización.",
        correct: "a"
    },
    {
        id: 123,
        q: "¿Qué conceptos conforman el remanente de tesorería de la entidad local, según lo regulado en el artículo 191 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el Texto Refundido de la Ley Reguladora de las Haciendas Locales?",
        a: "Todas las obligaciones reconocidas el último día del ejercicio.",
        b: "Todos los derechos pendientes de cobro el último día del ejercicio.",
        c: "Las obligaciones reconocidas y liquidadas no satisfechas el último día del ejercicio, los derechos pendientes de cobro y los fondos líquidos a 31 de diciembre.",
        d: "Los derechos pendientes de cobro a 31 de diciembre.",
        correct: "c"
    },
    {
        id: 124,
        q: "¿Qué tiene por objeto el control de eficacia, según dispone el artículo 221 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el Texto Refundido de la Ley Reguladora de las Haciendas Locales?",
        a: "La comprobación periódica del grado de cumplimiento de los objetivos, así como el análisis del coste de funcionamiento y del rendimiento de los respectivos servicios o inversiones.",
        b: "La comprobación cada 3 meses del grado de cumplimiento de los objetivos, así como el análisis del coste de funcionamiento y del rendimiento de los respectivos servicios o inversiones",
        c: "La comprobación anual del grado de cumplimiento de los objetivos, así como el análisis del coste de funcionamiento y del rendimiento de los respectivos servicios o inversiones.",
        d: "La comprobación cuando se estime necesario del grado de cumplimiento de los objetivos, así como el análisis del coste de funcionamiento y del rendimiento de los respectivos servicios o inversiones.",
        correct: "a"
    },
    {
        id: 125,
        q: "No constituye una fase de la gestión de los Presupuestos de Gastos de las Entidades Locales:",
        a: "Autorización del gasto.",
        b: "Disposición del pago.",
        c: "Reconocimiento de la obligación.",
        d: "Ordenación del pago.",
        correct: "b"
    },
    {
        id: 126,
        q: "Establece el artículo 165.3 del Real Decreto Legislativo 2/2004, de 5 marzo, por el que se aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, que los derechos liquidados y las obligaciones reconocidas se aplicarán a los Presupuestos por su importe íntegro, quedando prohibido atender obligaciones mediante minoración de los derechos a liquidar o ya ingresados, salvo que la Ley lo autorice de modo expreso, si bien se exceptúan de lo anterior:",
        a: "Las cantidades destinadas a atender inversiones subvencionadas por otra u otras Administraciones.",
        b: "Los créditos destinados a atender los gastos de personal.",
        c: "Las devoluciones de ingresos declarados indebidos por Tribunal o Autoridad Competentes.",
        d: "Los créditos que hayan de habilitarse con ocasión de dar cumplimiento a una resolución judicial.



 V.13.08.25                                                                                            Página 34
 Temario Específico. Auxiliar Administrativo/a",
        correct: "c"
    },
    {
        id: 127,
        q: "Según el artículo 218 del Real Decreto Legislativo 2/2004, de 5 marzo, por el que se aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, el órgano interventor remitirá anualmente al Tribunal de Cuentas una serie de documentos, entre lo que no se encuentra:",
        a: "Todas las resoluciones y acuerdos adoptados por el Presidente de la entidad Local y por el Pleno de la Corporación contrarios a los reparos formulados.",
        b: "Un resumen de las principales anomalías detectadas en materia de ingresos.",
        c: "Un resumen de las principales anomalías detectadas en materia de gastos.",
        d: "Los informes justificativos presentados por la Corporación Local.",
        correct: "c"
    },
    {
        id: 128,
        q: "Según se regula en el artículo 169 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el Texto Refundido de la Ley Reguladora de las Haciendas Locales, aprobado inicialmente el Presupuesto General de una Entidad Local, éste habrá de exponerse al público previo anuncio en:",
        a: "El Boletín Oficial de la Provincia, o en su caso, de la comunidad autónoma uniprovincial.",
        b: "El Boletín Oficial de la Provincia y en el Boletín Oficial de la comunidad Autónoma.",
        c: "El Boletín Oficial de la Provincia, en el Boletín Oficial de la comunidad Autónoma, y en el Boletín Oficial del Estado.",
        d: "El Boletín Oficial de la Provincia y en uno de los diarios de mayor circulación en el término municipal.",
        correct: "a"
    },
    {
        id: 129,
        q: "De acuerdo con el artículo 169 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el Texto Refundido de la Ley Reguladora de las Haciendas Locales, el plazo durante el cual estará expuesto al público el Presupuesto General de una Entidad Local, durante el cual los interesados podrán presentar reclamaciones, será de:",
        a: "Veinte días hábiles.",
        b: "Quince días.",
        c: "Treinta días hábiles.",
        d: "Un mes.",
        correct: "b"
    },
    {
        id: 130,
        q: "El Presupuesto de las Entidades Locales será formado por:",
        a: "El Presidente.",
        b: "La Unidad de Gestión Presupuestaria.",
        c: "El Tesorero.",
        d: "El Interventor.",
        correct: "a"
    },
    {
        id: 131,
        q: "Al Presupuesto General de una Entidad Local, según dispone el art. 166 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el Texto Refundido de la Ley Reguladora de las Haciendas Locales, se unirán una serie de anexos, entre los que no se encuentra:",
        a: "El estado de consolidación del Presupuesto de la propia Entidad con el de todos los presupuestos y estado de previsión de sus organismos autónomos.",
        b: "El estado de ingresos y gastos de las Sociedades Mercantiles de capital exclusivo de la Entidad Local.",
        c: "Los Programas anuales de actuación, inversiones, y financiación de las Sociedades Mercantiles de cuyo capital social sea titular único o partícipe mayoritario la Entidad Local.",
        d: "Los Planes de Programas de Inversión y Financiación formulados por los Municipios y demás Entidades Locales de ámbito supramunicipal.
 V.13.08.25                                                                                               Página 35
 Temario Específico. Auxiliar Administrativo/a",
        correct: "b"
    },
    {
        id: 132,
        q: "De las distintas fases de ejecución del gasto, no implica una relación con terceros externos a la Entidad Local:",
        a: "La ordenación del gasto.",
        b: "La autorización del gasto.",
        c: "La liquidación de la obligación.",
        d: "El compromiso del gasto.",
        correct: "b"
    },
    {
        id: 133,
        q: "El artículo 170.2 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el Texto Refundido de la Ley Reguladora de las Haciendas Locales, establece expresamente los motivos por los que podrán entablarse reclamaciones contra el Presupuesto General de una Entidad Local. Entre dichos motivos no se encuentra:",
        a: "Por no haberse ajustado su elaboración y aprobación a los trámites establecidos en esta ley.",
        b: "Por considerar que los créditos previstos en el Estado de ingresos no serán suficientes para alcanzar un determinado nivel de calidad en ciertos servicios.",
        c: "Por ser de manifiesta insuficiencia los ingresos con relación a los gastos presupuestados o bien de estos respecto a las necesidades para las que esté previsto.",
        d: "Por omitir el crédito necesario para el cumplimiento de obligaciones exigibles a la entidad local, en virtud de precepto legal o de cualquier otro título legítimo.",
        correct: "b"
    },
    {
        id: 134,
        q: "Según el artículo 169 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el Texto Refundido de la Ley Reguladora de las Haciendas Locales, el presupuesto se considerará definitivamente aprobado si durante el plazo de exposición al público no se hubieran presentado reclamaciones. En caso contrario, el Pleno dispondrá para resolverlas:",
        a: "De un plazo de 20 días.",
        b: "De un plazo de 40 días.",
        c: "De un plazo de 15 días.",
        d: "De un plazo de un mes.",
        correct: "d"
    },
    {
        id: 135,
        q: "Según el artículo 213 del Real Decreto Legislativo 2/2004, de 5 de marzo, los órganos interventores de las Entidades Locales remitirán a la Intervención General de la Administración del Estado un informe resumen de los resultados de los controles desarrollados en cada ejercicio:",
        a: "Cuando sea requerido por la Intervención General, debiendo emitirse informe, al menos, cada tres año.",
        b: "Con carácter anual.",
        c: "Con carácter bianual.",
        d: "Con carácter semestral.



 V.13.08.25                                                                                             Página 36
 Temario Específico. Auxiliar Administrativo/a",
        correct: "b"
    },
    {
        id: 136,
        q: "Según el artículo 191 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el Texto Refundido de la Ley Reguladora de las Haciendas Locales, el presupuesto de cada ejercicio se liquidará;",
        a: "En cuanto a la recaudación de derechos y al pago de obligaciones el 31 de diciembre del año natural correspondiente, quedando a cargo de la Tesorería local los ingresos y pagos pendientes, según sus respectivas contracciones",
        b: "En cuanto a la recaudación de derechos y al pago de obligaciones el día primero de febrero del ejercicio siguiente.",
        c: "En cuanto a la recaudación de derechos y el pago de obligaciones el 20 de enero siguiente al año natural correspondiente.",
        d: "En cuanto a la recaudación de derechos y al pago de obligaciones el 31 de diciembre del año natural correspondiente, quedando a cargo de la Tesorería local los ingresos y pagos pendientes, según sus respectivas contracciones.",
        correct: "a"
    },
    {
        id: 137,
        q: "La norma que regula la estructura Presupuestaria de las Entidades Locales es:",
        a: "La Orden de 3 de diciembre de 2008.",
        b: "La Orden de 20 de septiembre de 1989.",
        c: "El RD 500/1990 de 10 de septiembre.",
        d: "El RD 500/1900 de 15 de mayo.",
        correct: "a"
    },
    {
        id: 138,
        q: "Según el artículo 219 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el Texto Refundido de la Ley Reguladora de las Haciendas Locales, no estarán sometidos a intervención previa: (señale la opción incorrecta)",
        a: "Los gastos de material no inventariable.",
        b: "Contratos menores.",
        c: "Contratos de carácter no periódico.",
        d: "Gastos menores de 3005,6 euros que se hagan efectivos a través del sistema de anticipos de caja fija.",
        correct: "c"
    },
    {
        id: 139,
        q: "A los efectos de poder presentar reclamaciones durante el periodo de exposición al público del Presupuesto General de la Entidad Local, no tendrán la consideración de interesados:",
        a: "Los que resulten directamente afectados, aunque no habiten en el territorio de la entidad local.",
        b: "Los colegios oficiales, cámaras oficiales, sindicatos, asociaciones y demás entidades legalmente constituidas para velar por intereses profesionales o económicos y vecinales, cuando actúen en defensa de los que les son propios.",
        c: "Los habitantes en el territorio de la respectiva entidad local.",
        d: "Los que puedan resultar afectados por desarrollar su actividad económica en el territorio de la entidad local a pesar de no habitar en el mismo.



 V.13.08.25                                                                                            Página 37
 Temario Específico. Auxiliar Administrativo/a",
        correct: "d"
    },
    {
        id: 140,
        q: "Según el artículo 214 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el Texto Refundido de la Ley Reguladora de las Haciendas Locales, el ejercicio de la función interventora comprenderá:",
        a: "La intervención y comprobación formal de las inversiones y de la aplicación de las subvenciones.",
        b: "La intervención crítica o previa de todo acto, documento o expediente susceptible de producir derechos u obligaciones de contenido económico o movimiento de fondos de valores.",
        c: "La intervención material de del pago.",
        d: "La intervención formal de la ordenación del pago.",
        correct: "a"
    },
    {
        id: 141,
        q: "Según el artículo 214 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el Texto Refundido de la Ley Reguladora de las Haciendas Locales, la función interventora tendrá por objeto fiscalizar: (señale la incorrecta)",
        a: "La recaudación, inversión y aplicación, en general, de los caudales públicos administrados, con el fin de que la gestión se ajuste a las disposiciones aplicables en cada caso.",
        b: "Los ingresos y pagos que se deriven del reconocimiento y liquidación de derechos y obligaciones o gastos de contenido económico.",
        c: "Todos los actos de las Entidades Locales y de sus organismos autónomos que den lugar al reconocimiento y liquidación de derechos y obligaciones o gastos de contenido económico.",
        d: "La ejecución de los actos que den lugar al reconocimiento de gastos de contenido económico de sociedades en que participen los organismos autónomos de las Entidades locales.",
        correct: "d"
    },
    {
        id: 142,
        q: "¿Cuándo deberá ser remitido al Pleno de la Corporación el Proyecto de Presupuesto General de la Entidad Local, para su aprobación, enmienda o devolución?:",
        a: "Antes del 1 de septiembre.",
        b: "Antes del 31 de octubre.",
        c: "Antes del 15 de octubre.",
        d: "Antes del 30 de septiembre.",
        correct: "c"
    },
    {
        id: 143,
        q: "Según dispone el artículo 171 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el Texto Refundido de la Ley Reguladora de las Haciendas Locales, contra la aprobación definitiva del Presupuesto General de una Entidad Local:",
        a: "Se podrá interponer Recurso Contencioso- Administrativo.",
        b: "Solo se podrá interponer Recurso de Reposición.",
        c: "Deberá de interponerse Recurso de Alzada.",
        d: "Se interpondrá Recurso de Revisión ante el Pleno de la Corporación.



 V.13.08.25                                                                                            Página 38
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 144,
        q: "Según el artículo 223 del Real Decreto Legislativo 2/2004, de 5 marzo, por el que se aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, en relación a la fiscalización externa de las cuentas y de la gestión económica de las Entidades Locales y de todos los organismos y sociedades de ellas dependientes:",
        a: "Es función propia del Tribunal de Cuentas, con el alcance y condiciones que establece su ley orgánica reguladora y su ley de funcionamiento.",
        b: "Es función propia de la intervención General del Estado, con el alcance y condiciones que establece su ley reguladora y de funcionamiento.",
        c: "Las Entidades Locales enviarán antes del día 30 de octubre de cada año, la cuenta general correspondiente al ejercicio económico anterior.",
        d: "La Intervención Municipal enviará antes del día 15 de octubre de cada año la cuenta general correspondiente al ejercicio económico anterior.",
        correct: "a"
    },
    {
        id: 145,
        q: "Según el artículo 186 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el Texto Refundido de la Ley Reguladora de las Haciendas Locales, ¿a quién le corresponde las funciones de ordenación de pagos?",
        a: "Al Presidente de la Entidad Local.",
        b: "Al Presidente de la Entidad Local, previo informe de la Tesorería.",
        c: "Al Pleno de la Entidad Local.",
        d: "Al Pleno y al Presidente de la Entidad Local conjuntamente.",
        correct: "a"
    },
    {
        id: 146,
        q: "Los Estados de Gastos de los Presupuestos Generales de las Entidades Locales aplicarán la clasificación:",
        a: "Por Programas, Económica y Orgánica.",
        b: "Orgánica y por Programas.",
        c: "Económica y Orgánica.",
        d: "Por Programas y Económica.",
        correct: "d"
    },
    {
        id: 147,
        q: "Según el artículo 191 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el Texto Refundido de la Ley Reguladora de las Haciendas Locales, la aprobación de la liquidación del presupuesto corresponde:",
        a: "Al Presidente de la Entidad Local, previo informe del Pleno de la Corporación.",
        b: "Al Presidente de la Entidad Local, previo informe de la Tesorería.",
        c: "Al Presidente de la Entidad Local, previo informe de la Secretaría.",
        d: "Al Presidente de la Entidad Local, previo informe de la Intervención.



 V.13.08.25                                                                                            Página 39
 Temario Específico. Auxiliar Administrativo/a
 Tema 9.La Ley de Contratos del Sector Público (I). Disposiciones Generales. Objeto y ámbito de aplicación de la Ley. Tema 10 La Ley de contratos del Sector Público (II): Contratos del Sector Público.",
        correct: "d"
    },
    {
        id: 148,
        q: "Según dispone el artículo 3.1 de la Ley 9/2017, de 8 de noviembre de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, se considera que forman parte del sector público las fundaciones públicas. A efectos de esta ley se entenderá por fundaciones públicas aquellas que reúnan alguno de los siguientes requisitos:",
        a: "Que se constituyan de forma inicial, con una aportación mayoritaria, directa o indirecta, de una o varias entidades integradas en el sector público, no pudiendo recibir dicha aportación con posterioridad a su constitución.",
        b: "Que el patrimonio de la fundación esté integrado en más de un 60% por bienes o derechos aportados o cedidos por sujetos integrantes del sector público con carácter permanente.",
        c: "Que la mayoría de derechos de votos en su patronato corresponda a representantes del sector público.",
        d: "Que se constituyan de forma inicial, con una aportación mayoritaria, directa, de una o varias entidades integradas en el sector público, pudiendo recibir dicha aportación con posterioridad a su constitución.",
        correct: "c"
    },
    {
        id: 149,
        q: "Según se regula en el artículo 18 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, para la determinación de las normas que regirán la adjudicación de los contratos mixtos, cuando un contrato mixto comprenda prestaciones propias de dos o más contratos de obras, suministros o servicios se atenderá a:",
        a: "El carácter de la prestación principal.",
        b: "El carácter de la prestación secundaria.",
        c: "El carácter de la prestación que elija el adjudicatario.",
        d: "El carácter de la prestación que elija el adjudicador.",
        correct: "a"
    },
    {
        id: 150,
        q: "Según el artículo 1.3 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, se facilitará el acceso a la contratación pública de:",
        a: "Las pequeñas empresas.",
        b: "Las pequeñas y medianas empresas.",
        c: "Las medianas empresas.",
        d: "Las pequeñas y medianas empresas y empresas de economía social.



 V.13.08.25                                                                                             Página 40
 Temario Específico. Auxiliar Administrativo/a",
        correct: "d"
    },
    {
        id: 151,
        q: "Según el artículo 3 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, a los efectos de esta Ley se considera que forman parte del sector público: (señale la incorrecta)",
        a: "Los fondos con personalidad jurídica.",
        b: "Las Mutuas colaboradoras con la Seguridad Social.",
        c: "Las fundaciones públicas.",
        d: "Las Entidades Gestoras y los Servicios Comunes de la Seguridad Social.",
        correct: "a"
    },
    {
        id: 152,
        q: "El artículo 6 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, dispone que las encomiendas de gestión reguladas en la legislación vigente en materia de régimen jurídico del sector público:",
        a: "Quedan incluidas en el ámbito de la presente Ley.",
        b: "Quedan excluidas del ámbito de la presente Ley cuando se deleguen actividades a órganos de la misma administración.",
        c: "Quedan excluidas del ámbito de la presente Ley.",
        d: "Quedan excluidas del ámbito de la presente Ley cuando se deleguen actividades a órganos de distinta administración.",
        correct: "c"
    },
    {
        id: 153,
        q: "La Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, tiene por objeto regular la contratación del sector público, a fin de garantizar que la misma se ajusta a los principios de:",
        a: "Acceso a las licitaciones restringido, publicidad y transparencia de los procedimientos, y no discriminación e igualdad de trato entre los licitadores.",
        b: "Acceso a las licitaciones restringido, publicidad y transparencia de los procedimientos, y no discriminación y jerarquía entre los licitadores.",
        c: "Libertad de acceso a las licitaciones, publicidad y transparencia de los procedimientos, y no discriminación y jerarquía entre los licitadores.",
        d: "Libertad de acceso a las licitaciones, publicidad y transparencia de los procedimientos, y no discriminación e igualdad de trato entre los licitadores.",
        correct: "d"
    },
    {
        id: 154,
        q: "¿Podrán ser objeto de los contratos de servicios, los servicios que impliquen ejercicio de la autoridad inherente a los poderes públicos? (Artículo 17 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014)",
        a: "No.",
        b: "Sí.",
        c: "En ningún caso.",
        d: "No, salvo excepciones.



 V.13.08.25                                                                                             Página 41
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 155,
        q: "La concesión de obras es un contrato que tiene por objeto la realización por el concesionario de algunas de las prestaciones a que se refiere el contrato de obras: (artículo 14 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014)",
        a: "Incluidas las de restauración y reparación de construcciones existentes, así como la conservación y mantenimiento de los elementos construidos.",
        b: "Incluidas las de restauración y reparación de construcciones existentes, excepto la conservación y mantenimiento de los elementos construidos.",
        c: "Salvo las de restauración y reparación de construcciones existentes, así como la conservación y mantenimiento de los elementos construidos.",
        d: "Incluida la conservación y mantenimiento de los elementos construidos, excepto las de restauración y reparación de construcciones existentes.",
        correct: "a"
    },
    {
        id: 156,
        q: "Queda excluido del ámbito de la presente Ley, según dispone el artículo 11 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014: (señale la incorrecta)",
        a: "La relación de servicio de los funcionarios públicos y los contratos regulados en la legislación laboral.",
        b: "Las relaciones jurídicas consistentes en la prestación de un servicio público cuya utilización por los usuarios requiera el abono de una tarifa, tasa o precio público de aplicación general.",
        c: "Los contratos relativos a servicios de arbitraje y conciliación.",
        d: "Los contratos de suministro y servicios.",
        correct: "d"
    },
    {
        id: 157,
        q: "La Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, en su artículo 1 establece que tiene por objeto regular la contratación del sector público, a fin de garantizar que la misma se ajusta a los principios de:",
        a: "Publicidad, transparencia, eficacia y eficiencia en la contratación pública.",
        b: "Eficacia y eficiencia en la contratación.",
        c: "No discriminación e igualdad de trato entre los licitadores y coordinación entre las Administraciones Públicas.",
        d: "Libertad de acceso a las licitaciones, publicidad y transparencia de los procedimientos, y no discriminación e igualdad de trato entre los licitadores.



 V.13.08.25                                                                                              Página 42
 Temario Específico. Auxiliar Administrativo/a",
        correct: "d"
    },
    {
        id: 158,
        q: "El artículo 13 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, regula el contrato de obras, según el cual, son contratos de obras aquellos que tienen por objeto uno de los siguientes:",
        a: "La ejecución de una obra sin incluir la redacción del proyecto.",
        b: "La realización de alguno de los trabajos que se enumeran en el Anexo II de la Ley de Contratos del Sector Público.",
        c: "La realización, por cualquier medio, de una obra que cumpla los requisitos fijados por la entidad del sector público contratante que ejerza una influencia decisiva en el tipo o el proyecto de la obra.",
        d: "Únicamente la realización de alguno de los trabajos que se enumeran en el Anexo I de la Ley de Contratos del Sector Público.",
        correct: "c"
    },
    {
        id: 159,
        q: "La Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, en su artículo 1 establece que en toda contratación pública se incorporarán de manera transversal y preceptiva:",
        a: "Criterios sociales y medioambientales siempre que guarde relación con el objeto del contrato.",
        b: "Criterios sociales y de calidad técnica siempre que guarden relación con el objeto del contrato.",
        c: "Criterios tecnológicos y medioambientales siempre que guarden relación con el objeto del contrato.",
        d: "Criterios de calidad técnica y medioambientales siempre que guarden relación con el objeto del contrato.",
        correct: "a"
    },
    {
        id: 160,
        q: "La Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, dispone en su artículo 4 que las relaciones jurídicas, negocios y contratos excluidos del ámbito de la presente Ley:",
        a: "Se regirán únicamente por sus normas especiales.",
        b: "Se regirán por sus normas especiales, aplicándose los principios de esta Ley para resolver las dudas y lagunas que pudieran presentarse.",
        c: "Se regirán por la Ley de Contratos del Sector Público, aplicándose los principios de sus propias normas para resolver las dudas y lagunas que pudieran presentarse.",
        d: "Se regirán por sus normas especiales y las disposiciones de desarrollo que se establezcan.



 V.13.08.25                                                                                            Página 43
 Temario Específico. Auxiliar Administrativo/a",
        correct: "b"
    },
    {
        id: 161,
        q: "Con carácter general, quedan excluidos de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, los contratos de investigación y desarrollo, excepto una serie de contratos que estén incluidos en una serie de códigos y cumplan con unas condiciones; éstas últimas son:",
        a: "Que los ingresos los obtenga exclusivamente el poder adjudicador para su utilización en el ejercicio de su actividad.",
        b: "Que los beneficios pertenezcan exclusivamente al poder adjudicador para su utilización en el ejercicio de su propia actividad y que el servicio prestado sea remunerado íntegramente por el poder adjudicador.",
        c: "Que los beneficios pertenezcan en un cincuenta por ciento al poder adjudicador para su utilización en el ejercicio de su propia actividad y que el servicio prestado sea remunerado íntegramente por el poder adjudicador",
        d: "Que los beneficios pertenezcan exclusivamente al poder adjudicador para su utilización en el ejercicio de su propia actividad y en otras nuevas actividades, y que el servicio prestado sea remunerado íntegramente por el poder adjudicador.",
        correct: "b"
    },
    {
        id: 162,
        q: "Según dispone el artículo 17 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, son contratos de servicios aquellos cuyo objeto son prestaciones de hacer consistentes en el desarrollo de una actividad dirigidas a la obtención de:",
        a: "Un resultado de obra o suministro, incluyendo aquellos en que el adjudicatario se obligue a ejecutar el servicio de forma sucesiva y por precio unitario.",
        b: "Un resultado de obra o suministro, salvo aquellos en que el adjudicatario se obligue a ejecutar el servicio de forma sucesiva y por precio unitario.",
        c: "Un resultado distinto de una obra o suministro, salvo aquellos en que el adjudicatario se obligue a ejecutar el servicio de forma sucesiva y por precio unitario.",
        d: "Un resultado distinto de una obra o suministro, incluyendo aquellos en que el adjudicatario se obligue a ejecutar el servicio de forma sucesiva y por precio unitario.",
        correct: "d"
    },
    {
        id: 163,
        q: "Quedan excluidos del ámbito de la Ley 9/2017, de 8 de noviembre de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, los convenios incluidos en el ámbito del artículo 346 del Tratado de Funcionamiento de la Unión Europea que se concluyan en el sector:",
        a: "de la defensa y la seguridad.",
        b: "de la investigación y la divulgación.",
        c: "audiovisual.",
        d: "del medio ambiente.



 V.13.08.25                                                                                              Página 44
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 164,
        q: "Según dispone el artículo 18 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, el contrato mixto:",
        a: "Únicamente puede contener prestaciones correspondientes al contrato de obra y al contrato de suministros.",
        b: "Únicamente puede contener prestaciones correspondientes al contrato de obra y al contrato de servicios.",
        c: "Únicamente puede contener prestaciones correspondientes al contrato de suministros y al contrato de servicios.",
        d: "Será aquel que contenga prestaciones correspondientes a otro u otros de distinta clase.",
        correct: "d"
    },
    {
        id: 165,
        q: "Dispone el artículo 1 de la Ley 9/2017, de 8 de noviembre de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, que en toda contratación pública se incorporarán de manera transversal y preceptiva:",
        a: "Criterios sociales y medioambientales aunque no guarde relación con el objeto del contrato.",
        b: "Criterios éticos y de transparencia siempre que guarde relación con el objeto del contrato.",
        c: "Criterios éticos y de transparencia aunque no guarde relación con el objeto del contrato.",
        d: "Criterios sociales y medioambientales siempre que guarde relación con el objeto del contrato.",
        correct: "d"
    },
    {
        id: 166,
        q: "Respecto a los partidos políticos, organizaciones sindicales, y organizaciones empresariales y asociaciones profesionales, además de las fundaciones y asociaciones vinculadas a cualquiera de ellos, cuando cumplan los requisitos para ser poder adjudicador y respecto de los contratos sujetos a regulación armonizada, deberán actuar conforme dispone el artículo 3 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, a los siguientes principios:",
        a: "Publicidad, transparencia, eficacia y eficiencia.",
        b: "Publicidad, concurrencia y no discriminación.",
        c: "Publicidad, concurrencia, transparencia, igualdad y no discriminación sin perjuicio del respeto a la autonomía de la voluntad y de la confidencialidad cuando sea procedente.",
        d: "Publicidad, no discriminación y confidencialidad.",
        correct: "c"
    },
    {
        id: 167,
        q: "Se entenderá que un contrato tiene carácter oneroso, según dispone el artículo 2 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, en los casos en que:",
        a: "El contratista obtenga algún tipo de beneficio económico de forma directa.",
        b: "El contratante obtenga algún tipo de beneficio económico, ya sea de forma directa o indirecta.",
        c: "El contratista obtenga algún tipo de beneficio económico, ya sea de forma directa o indirecta.",
        d: "El contratante obtenga algún tipo de beneficio económico de forma directa.



 V.13.08.25                                                                                            Página 45
 Temario Específico. Auxiliar Administrativo/a",
        correct: "c"
    },
    {
        id: 168,
        q: "Según el artículo 2 de la Ley 9/2017, de 8 de noviembre de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, son contratos del sector público:",
        a: "Los contratos públicos, que celebren las Universidades privadas, en el ámbito de su actividad.",
        b: "Los contratos en los que el contratista obtenga algún tipo de beneficio económico, ya sea de forma directa o indirecta.",
        c: "Los contratos onerosos, cualquiera que sea su naturaleza jurídica.",
        d: "Los contratos gratuito, cualquiera que sea su naturaleza jurídica.",
        correct: "c"
    },
    {
        id: 169,
        q: "Están incluidos en el ámbito de la Ley 9/2017, de 8 de noviembre de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014:",
        a: "La relación de servicio de los funcionarios públicos y los contratos regulados en la legislación laboral.",
        b: "Los que tengan por objeto la adquisición, el desarrollo, la producción o la coproducción de programas destinados a servicios de comunicación audiovisual o servicios de comunicación radiofónica, que sean adjudicados por proveedores de dichos servicios.",
        c: "Las relaciones jurídicas consistentes en la prestación de un servicio público cuya utilización por los usuarios requiera el abono de una tarifa, tasa o precio público de aplicación general.",
        d: "Los contratos relativos a servicios de arbitraje y conciliación.",
        correct: "b"
    },
    {
        id: 170,
        q: "No se consideran Administraciones Públicas según el artículo 3 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014:",
        a: "La Administración General del Estado, las Administraciones de las Comunidades Autónomas, las Ciudades Autónomas de Ceuta y Melilla y las Entidades que integran la Administración Local.",
        b: "Las Diputaciones Forales y las Juntas Generales de los Territorios Históricos del País Vasco en lo que respecta a su actividad de contratación.",
        c: "Las Entidades Gestoras y los Servicios Comunes de la Seguridad Social.",
        d: "Las Mutuas colaboradoras con la Seguridad Social.



 V.13.08.25                                                                                               Página 46
 Temario Específico. Auxiliar Administrativo/a",
        correct: "d"
    },
    {
        id: 171,
        q: "Es objeto de la Ley 9/2017, de 8 de noviembre de Contratos del Sector Público del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, la regulación del régimen jurídico aplicable a:",
        a: "Los efectos, cumplimiento y extinción de los contratos administrativos, en atención a los fines institucionales de carácter público que a través de los mismos se tratan de realizar.",
        b: "Los efectos y cumplimiento de los contratos administrativos, en atención a los fines institucionales de carácter público que a través de los mismos se tratan de realizar.",
        c: "Los efectos y cumplimiento de los contratos administrativos, en atención a los fines institucionales de carácter público o privado que a través de los mismos se tratan de realizar.",
        d: "Los efectos, cumplimiento y extinción de los contratos administrativos, en atención a los fines institucionales de carácter público o privado que a través de los mismos se tratan de realizar.",
        correct: "a"
    },
    {
        id: 172,
        q: "Según el artículo 2.1 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, son contratos del sector público y, en consecuencia, están sometidos a la presente Ley en la forma y términos previstos en la misma:",
        a: "Los contratos no onerosos, de naturaleza jurídica pública, que celebren las entidades enumeradas en el artículo 3 de esta ley.",
        b: "Los contratos onerosos, cualquiera que sea su naturaleza jurídica, que celebren las entidades enumeradas en el artículo 3 de esta ley.",
        c: "Los contratos onerosos, de naturaleza jurídica-pública que celebren las entidades enumeradas en el artículo 3 de esta ley.",
        d: "Los contratos no onerosos, cualquiera que sea su naturaleza jurídica, que celebren las entidades enumeradas en el artículo 3 de esta ley.



 V.13.08.25                                                                                            Página 47
 Temario Específico. Auxiliar Administrativo/a
 Tema 11.La actividad subvencional de las Administraciones Públicas (I). La Ley 38/2003, 17 de noviembre, General de subvenciones: Ámbito de aplicación y disposiciones a las subvenciones públicas comunes. Tema 12.La actividad subvencional de las Administraciones Públicas (II). La Ley 38/2003, 17 de noviembre, General de subvenciones: procedimiento de concesión y gestión de subvenciones.",
        correct: "b"
    },
    {
        id: 173,
        q: "¿Quiénes tendrán la consideración de beneficiarios según lo dispuesto en el artículo 11 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones?",
        a: "La persona que haya de realizar la actividad que fundamentó su otorgamiento o que se encuentre en la situación que legitima su concesión.",
        b: "Siempre será una persona jurídica, siendo uno de sus miembros el responsable de la misma.",
        c: "Podrán serlo cualquier tipo de unidad económica o patrimonio separado con personalidad jurídica.",
        d: "Sólo personas físicas y jurídicas.",
        correct: "a"
    },
    {
        id: 174,
        q: "El artículo 8 de la Ley 38/2003, de 17 de noviembre, General de subvenciones establece que con carácter previo al establecimiento de subvenciones, se deberán concretar en un plan estratégico de subvenciones:",
        a: "Los objetivos y efectos que se pretenden.",
        b: "El plazo necesario para la consecución de los objetivos.",
        c: "Los costes y fuentes de financiación supeditándose en todo caso al cumplimiento de los objetivos de estabilidad presupuestaria.",
        d: "Los objetivos y efectos que se pretenden en su aplicación, el plazo necesario para su consecución, los costes previsibles y sus fuentes de financiación supeditándose en todo caso al cumplimiento de los objetivos de estabilidad presupuestaria.",
        correct: "d"
    },
    {
        id: 175,
        q: "Señale el Régimen jurídico de las subvenciones:",
        a: "La Ley 38/2003, de 17 de noviembre, General de Subvenciones.",
        b: "La Ley 38/2003, de 17 de noviembre, General de Subvenciones, las restantes normas de derecho administrativo, y de forma supletoria, las normas de derecho privado.",
        c: "La Ley 38/2003, de 17 de noviembre, General de Subvenciones, sus disposiciones de desarrollo, las restantes normas de derecho administrativo, y, en su defecto, se aplicarán las normas de derecho privado.",
        d: "La Ley 38/2003, de 17 de noviembre, General de Subvenciones y sus disposiciones de desarrollo.",
        correct: "c"
    },
    {
        id: 176,
        q: "¿Qué se entiende por Administraciones públicas a los efectos de la Ley 38/2003, de 17 de noviembre, General de Subvenciones, según el artículo 3?",
        a: "La Administración General del Estado.",
        b: "La Administración General del Estado y sus Organismos autónomos.",
        c: "La Administración General del Estado y de las Comunidades Autónomas.",
        d: "La Administración General del Estado, las entidades que integran la Administración Local y la Administración de las Comunidades Autónomas.



 V.13.08.25                                                                                            Página 48
 Temario Específico. Auxiliar Administrativo/a",
        correct: "d"
    },
    {
        id: 177,
        q: "¿Cuál de los siguientes supuestos se consideran subvenciones, de acuerdo con la Ley 38/2003, de 17 de noviembre, General de Subvenciones?",
        a: "Los beneficios fiscales y de cotización a la Seguridad Social.",
        b: "Las prestaciones reconocidas por el Fondo de Garantía Salarial.",
        c: "El crédito oficial, en los supuestos en que la Administración pública subvencione al prestatario parte de los intereses de la operación de préstamo.",
        d: "Las prestaciones como consecuencia de actos de terrorismo.",
        correct: "c"
    },
    {
        id: 178,
        q: "En el caso de la cesión de datos prevista en el apartado 5 del artículo 20 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones, se instrumentará la interrelación de la Base de Datos Nacional de Subvenciones con otras bases de datos para a mejora en la lucha contra el fraude fiscal, de Seguridad Social o de subvenciones y Ayudas de Estado u otras ayudas. ¿Qué deberá asegurarse en estos casos respecto de los datos cedidos?",
        a: "El acceso, integridad, disponibilidad, autenticidad, confidencialidad, trazabilidad y conservación de los datos.",
        b: "El acceso, integridad, disponibilidad, autenticidad, confidencialidad y conservación de los datos.",
        c: "El acceso, disponibilidad, autenticidad, confidencialidad, trazabilidad y conservación de los datos.",
        d: "El acceso, integridad, disponibilidad, autenticidad, confidencialidad y trazabilidad de los datos.",
        correct: "a"
    },
    {
        id: 179,
        q: "Según el artículo 10 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones, ¿cuáles son los órganos competentes para conceder subvenciones?",
        a: "Los Ministros.",
        b: "El Consejo de Ministros.",
        c: "Los Ministros y Secretarios de Estado en la Administración General del Estado y los presidentes o directores de los organismos y entidades públicas vinculadas o dependientes de la Administración General del Estado.",
        d: "El Consejo de Ministros y la Comisión Delegada del Gobierno para Asuntos Económicos.",
        correct: "c"
    },
    {
        id: 180,
        q: "Para garantizar el derecho de los ciudadanos a conocer todas las subvenciones convocadas en cada momento y para contribuir a los principios de publicidad y transparencia, la Intervención General de la Administración del Estado publicará en su página web los siguientes contenidos: (Artículo 20 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones)",
        a: "Las convocatorias de subvenciones.",
        b: "Las subvenciones concedidas y no concedidas.",
        c: "Todas las sanciones impuestas por infracciones.",
        d: "Podrán ser publicadas las subvenciones concedidas cuando la publicación de los datos del beneficiario pueda ser contraria a la salvaguarda del honor e intimidad personal, siempre que impere el interés general.



 V.13.08.25                                                                                             Página 49
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 181,
        q: "¿Cómo será considerada la infracción del deber de secreto por parte de las autoridades y del personal al servicio de las Administraciones Públicas que tengan conocimiento de los datos contenidos en la Base de Datos? (artículo 20 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones)",
        a: "Se considerará falta disciplinaria grave.",
        b: "Con independencia de las responsabilidades penales o civiles, la infracción se considerará siempre falta disciplinaria muy grave.",
        c: "Se podrá considerar falta disciplinaria grave o muy grave, según la gravedad de los hechos.",
        d: "Se considerará falta disciplinaria leve o grave, con independencia de las responsabilidades penales o civiles que puedan corresponder.",
        correct: "b"
    },
    {
        id: 182,
        q: "¿Quiénes serán responsables de suministrar la información de forma exacta, completa, en plazo y respetando el modo de envío establecido, según dispone el artículo 20 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones?",
        a: "En el sector público estatal, los titulares de los órganos, organismos y demás entidades que concedan subvencione s y ayudas.",
        b: "En las Comunidades autónomas, la Intervención General del Estado.",
        c: "En las Entidades Locales, los órganos competentes en materia económica-financiera.",
        d: "En las Comunidades autónomas, la Intervención General del Estado y de la propia Comunidad Autónoma u órgano que designe la propia Comunidad autónoma.",
        correct: "a"
    },
    {
        id: 183,
        q: "Finalidades de la Base de Datos Nacional de subvenciones, según el artículo 20 de la Ley 38/2003, de 18 de noviembre, General de Subvenciones:",
        a: "Promover la transparencia, servir como instrumento para la planificación de las políticas públicas, mejorar la gestión y colaborar en la lucha contra el fraude de subvenciones y ayudas públicas.",
        b: "Dar transparencia a las subvenciones concedidas a nivel estatal.",
        c: "Su función principal es dar publicidad.",
        d: "su función principal es servir como instrumento para la lucha contra el fraude de subvenciones y ayudas públicas",
        correct: "a"
    },
    {
        id: 184,
        q: "Respecto al concepto de subvención, ¿qué se entiende según lo dispuesto en el artículo 2 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones?",
        a: "Toda disposición dineraria.",
        b: "Toda disposición dineraria realizada por cualquiera de los sujetos que formen parte del Sector Público.",
        c: "Toda disposición dineraria realizada por cualesquiera de los sujetos contemplados en el artículo 3 de esta ley, a favor de personas públicas o privadas y que cumpla una serie de requisitos.",
        d: "Toda disposición dineraria realizada por cualesquiera de los sujetos que formen parte del Sector Público, a favor de personas públicas o privadas y que cumpla una serie de requisitos.



 V.13.08.25                                                                                            Página 50
 Temario Específico. Auxiliar Administrativo/a",
        correct: "c"
    },
    {
        id: 185,
        q: "Señala el artículo 3.4 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones, que será igualmente aplicable esta ley a las siguientes subvenciones:",
        a: "Las establecidas en materias cuya regulación plena les corresponda a las Comunidades Autónomas y cuya gestión sea su competencia total.",
        b: "Las establecidas en materias cuya regulación plena o básica corresponda al Estado y cuya gestión sea competencia total o parcial de otras Administraciones Públicas.",
        c: "Aquellas en cuya tramitación sólo intervengan órganos de la Administración General del Estado o de las entidades de derecho público vinculadas o dependientes de aquélla.",
        d: "Aquellas en cuya tramitación sólo intervengan órganos de la Administración General de las Comunidades Autónomas o de las entidades de derecho público vinculadas o dependientes de aquéllas.",
        correct: "b"
    },
    {
        id: 186,
        q: "¿Cuál es el objeto de la Ley 38/2003, de 17 de noviembre, General de Subvenciones?",
        a: "La regulación del régimen jurídico general de las subvenciones otorgadas por las Administraciones Públicas.",
        b: "La regulación del régimen jurídico general de las subvenciones otorgadas por Órganos y Autoridades Públicas en el ámbito de sus competencias.",
        c: "La regulación del régimen jurídico general de las subvenciones otorgadas por las Administraciones Públicas en el ámbito de sus competencias.",
        d: "La regulación del régimen jurídico general de las subvenciones otorgadas por las Administraciones que forman parte del Sector Publico.",
        correct: "a"
    },
    {
        id: 187,
        q: "De acuerdo con el artículo 13.2 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones, salvo que por la naturaleza de la subvención se exceptúe por su normativa reguladora, no podrán obtener a la condición de beneficiario o entidad colaboradora:",
        a: "Las personas o entidades que hayan sido sancionadas con multas administrativas.",
        b: "Las personas o entidades que hayan solicitado la declaración de concurso voluntario.",
        c: "Las personas o entidades que lleven 6 meses sin hallarse al corriente en el cumplimiento de las obligaciones tributarias.",
        d: "Las personas o entidades que hayan sido condenadas mediante sentencia firme en los últimos 4 años por delitos de prevaricación, cohecho, malversación de caudales públicos, tráfico de influencias, fraudes y exacciones ilegales o delitos urbanísticos.",
        correct: "b"
    },
    {
        id: 188,
        q: "¿Qué carácter tiene la información incluida en la Base de Datos Nacional de Subvenciones? (artículo 20 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones)",
        a: "En todo caso, carácter reservado.",
        b: "Carácter público.",
        c: "Carácter reservado, sin que pueda ser cedida o comunicada a terceros, salvo determinadas excepciones.",
        d: "Carácter reservado y exclusivo.",
        correct: "c"
    },
    {
        id: 189,
        q: "¿Cuáles son los principios por los que se rigen la gestión de las subvenciones públicas, según la Ley 38/2003, de 17 de noviembre, General de Subvenciones?",
        a: "Publicidad, transparencia, concurrencia, objetividad, igualdad y no discriminación.",
        b: "Eficacia en la asignación y utilización de los recursos.",
        c: "Eficiencia en el cumplimiento de los objetivos fijados por la Administración concedente.",
        d: "Eficacia, jerarquía, descentralización, desconcentración y coordinación.


 V.13.08.25                                                                                            Página 51
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 190,
        q: "¿Cuál es el órgano competente para autorizar la concesión de subvenciones de cuantía superior a 12 millones de euros?",
        a: "Será necesario acuerdo del Consejo de Ministros o, en el caso de que así lo establezca la normativa reguladora de la subvención, de la Comisión Delegada del Gobierno para Asuntos Económicos.",
        b: "La Comisión Delegada del Gobierno para Asuntos Económicos.",
        c: "El Ministro de Hacienda y Administraciones Públicas.",
        d: "El Ministro de Hacienda y Administraciones Públicas, junto con la Comisión Delegada del Gobierno para Asuntos Económicos.",
        correct: "a"
    },
    {
        id: 191,
        q: "El contenido de la Ley 38/2003, de 17 de noviembre, General de subvenciones, ¿resulta de aplicación a los organismos y demás entidades de derecho público con personalidad jurídica propia, vinculadas a las Administraciones Públicas?",
        a: "No, puesto que no forman parte del concepto de Administración Pública contenido en la propia Ley.",
        b: "Serán únicamente de aplicación los principios de gestión y los de información.",
        c: "Se aplicarán cuando las subvenciones que otorguen sean consecuencia del ejercicio de potestades administrativas.",
        d: "Se aplicarán, únicamente, a los organismos y demás entidades de Derecho Público dependientes de la Administración General del Estado y de las Comunidades Autónomas.",
        correct: "c"
    },
    {
        id: 192,
        q: "Respecto a las facultades para conceder subvenciones a las que se refiere el artículo 10 de la Ley 38/2003, de 17 de noviembre, señale la respuesta correcta:",
        a: "Podrán ser objeto de desconcentración mediante real decreto acordado en Consejo de Ministros.",
        b: "Podrán ser objeto de delegación, según disponga el órgano competente.",
        c: "En ningún caso podrán delegarse dichas facultades.",
        d: "Podrán ser objeto de desconcentración siempre que se determine mediante decreto del Consejo de Ministros.",
        correct: "a"
    },
    {
        id: 193,
        q: "Dispone el artículo 2 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones, que no están comprendidas en el ámbito de aplicación:",
        a: "Las aportaciones dinerarias en concepto de cuotas.",
        b: "Las aportaciones dinerarias en concepto de cuotas, tanto ordinarias como extraordinarias, que realicen las entidades que integran la Administración Local a favor de las asociaciones a que se refiere la disposición adicional quinta de la LBRL.",
        c: "Las aportaciones dinerarias en concepto de cuotas sólo de carácter extraordinarias, que realicen las entidades que integran la Administración Local a favor de las asociaciones a que se refiere la disposición adicional quinta de la LBRL.",
        d: "Las aportaciones dinerarias en concepto de cuotas sólo de carácter ordinarias que realicen las entidades que integran la Administración Local a favor de las asociaciones a que se refiere la disposición adicional quinta de la LBRL.



 V.13.08.25                                                                                              Página 52
 Temario Específico. Auxiliar Administrativo/a",
        correct: "b"
    },
    {
        id: 194,
        q: "¿Qué establece el artículo 21 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones, respecto al Régimen de garantías?",
        a: "El Régimen de las garantías y medios de constitución que tengan que constituirse se establecerá según lo desarrollado en esta Ley y en su normativa de desarrollo.",
        b: "El Régimen de garantías, medios de constitución, depósito y cancelación que tengan que constituir los beneficiarios o las entidades colaboradoras se establecerá reglamentariamente.",
        c: "Sólo lo referente a los medios de constitución, depósito y cancelación que tengan que constituir los beneficiarios o las entidades colaboradoras se establecerán reglamentariamente.",
        d: "El Régimen de garantías, medios de constitución, depósito y cancelación que tengan que constituir los beneficiarios o las entidades colaboradoras se establecerá conforme a lo dispuesto en el instrumento jurídico de creación.",
        correct: "b"
    },
    {
        id: 195,
        q: "¿Cuál es el órgano responsable de la administración y custodia de la Base de Datos Nacional de Subvenciones, según dispone la Ley 38/2003, de 17 de noviembre, General de Subvenciones?",
        a: "El Consejo Económico y Social.",
        b: "El Consejo de Estado.",
        c: "La Intervención General de la Administración del Estado.",
        d: "El Tribunal de Cuentas.",
        correct: "c"
    },
    {
        id: 196,
        q: "Señale la respuesta correcta, según lo regulado en el artículo 3 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones, relativo al ámbito de aplicación subjetivo:",
        a: "Esta Ley no será de aplicación a las aportaciones gratuitas en ningún caso.",
        b: "Sólo se aplicará esta Ley a las aportaciones gratuitas que no tengan relación directa con el objeto de la actividad contenido en la norma de creación o en sus estatutos.",
        c: "En todo caso, las aportaciones gratuitas habrán de tener relación directa con el objeto de la actividad contenido en la norma de creación o en sus estatutos.",
        d: "Serán de aplicación los principios de gestión a todas las entregas dinerarias sin contraprestación.",
        correct: "c"
    },
    {
        id: 197,
        q: "¿Quién es el órgano responsable de la administración y custodia de la Base de Datos Nacional de subvenciones?",
        a: "Quién se determine en cada base reguladora de cada subvención.",
        b: "El Tribunal de Cuentas.",
        c: "El Tribunal de cuentas y la Intervención General de la Administración del Estado.",
        d: "La Intervención General de la Administración del Estado.



 V.13.08.25                                                                                             Página 53
 Temario Específico. Auxiliar Administrativo/a
 Tema 13. La Ley 19/2013, de 9 de diciembre, de Transparencia, Acceso a la Información Pública y Buen Gobierno. La Ley 1/2014, de 24 de junio, de Transparencia Pública de Andalucía.",
        correct: "d"
    },
    {
        id: 198,
        q: "El artículo 2 a) de la Ley 1/2014, de 24 de junio, de Transparencia Pública de Andalucía establece que a los efectos de la presente ley, se entiende por información pública:",
        a: "Los contenidos o documentos, cualquiera que sea su formato o soporte, que obren en poder de alguna de las personas y entidades incluidas en el presente título o que hayan sido elaborados o adquiridos en el ejercicio de sus funciones.",
        b: "Los contenidos o documentos, cualquiera que sea su formato o soporte, que obren en poder de alguna de las personas y entidades incluidas en el presente título.",
        c: "Los contenidos o documentos, cualquiera que sea su formato o soporte, que hayan sido elaborados o adquiridos en el ejercicio de sus funciones por alguna de las personas y entidades incluidas en el presente título.",
        d: "Los contenidos o documentos, cualquiera que sea su formato o soporte, que obren en poder de alguna de las personas y entidades incluidas en el presente título y que hayan sido elaborados o adquiridos en el ejercicio de sus funciones.",
        correct: "d"
    },
    {
        id: 199,
        q: "El artículo 7 a) de la Ley 1/2014, de 24 de junio, de Transparencia Pública de Andalucía establece que el derecho a la publicidad activa consiste en:",
        a: "El derecho de cualquier persona a acceder, en los términos previstos en esta ley, a los contenidos o documentos que obren en poder de cualesquiera de las personas y entidades incluidas en el ámbito de aplicación de la presente ley y que hayan sido elaborados o adquiridos en el ejercicio de sus funciones.",
        b: "El derecho de la persona solicitante a que sean motivadas las resoluciones que inadmitan a trámite la solicitud de acceso, que denieguen el acceso, que concedan el acceso tanto parcial como a través de una modalidad distinta a la solicitada, así como las que permitan el acceso cuando haya habido oposición de una tercera persona interesada.",
        c: "El derecho a utilizar la información obtenida sin necesidad de autorización previa y sin más limitaciones de las que deriven de esta u otras leyes.",
        d: "El derecho de cualquier persona a que los poderes públicos publiquen, en cumplimiento de la presente ley, de forma periódica y actualizada, la información veraz cuyo conocimiento sea relevante para garantizar la transparencia de su actividad relacionada con el funcionamiento y control de la actuación pública.",
        correct: "d"
    },
    {
        id: 200,
        q: "La Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno establece en su artículo 14 que el derecho de acceso podrá ser limitado cuando acceder a la información suponga un perjuicio para, marque la respuesta errónea:",
        a: "La defensa.",
        b: "Los intereses económicos y comerciales.",
        c: "La protección del medio ambiente.",
        d: "La intimidad personal y familiar.



 V.13.08.25                                                                                              Página 54
 Temario Específico. Auxiliar Administrativo/a",
        correct: "d"
    },
    {
        id: 201,
        q: "La Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno establece en su artículo 15.1, en relación con las solicitudes de ejercicio del derecho de acceso, que si la información solicitada contuviera datos personales que revelen la ideología, afiliación sindical, religión o creencias, el acceso únicamente se podrá autorizar:",
        a: "En caso de que se contase con el consentimiento expreso y por escrito del afectado, a menos que dicho afectado hubiese hecho manifiestamente públicos los datos con anterioridad a que se solicitase el acceso.",
        b: "En caso de que se cuente con el consentimiento expreso del afectado o si aquel estuviera amparado por una norma con rango de ley.",
        c: "Previa ponderación suficientemente razonada del interés público en la divulgación de la información y los derechos de los afectados cuyos datos aparezcan en la información solicitada, en particular su derecho fundamental a la protección de datos de carácter personal.",
        d: "Con carácter general, y salvo que en el caso concreto prevalezca la protección de datos personales u otros derechos constitucionalmente protegidos sobre el interés público en la divulgación que lo impida, se concederá el acceso a información.",
        correct: "a"
    },
    {
        id: 202,
        q: "La Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno establece en su artículo 15.1, en relación con las solicitudes de ejercicio del derecho de acceso, que si la información solicitada incluyese datos personales que hagan referencia al origen racial, a la salud o a la vida sexual, incluyese datos genéticos o biométricos o contuviera datos relativos a la comisión de infracciones penales o administrativas que no conllevasen la amonestación pública al infractor, el acceso solo se podrá autorizar en caso de:",
        a: "En caso de que se contase con el consentimiento expreso y por escrito del afectado, a menos que dicho afectado hubiese hecho manifiestamente públicos los datos con anterioridad a que se solicitase el acceso.",
        b: "En caso de que se cuente con el consentimiento expreso del afectado o si aquel estuviera amparado por una norma con rango de ley.",
        c: "Previa ponderación suficientemente razonada del interés público en la divulgación de la información y los derechos de los afectados cuyos datos aparezcan en la información solicitada, en particular su derecho fundamental a la protección de datos de carácter personal.",
        d: "Con carácter general, y salvo que en el caso concreto prevalezca la protección de datos personales u otros derechos constitucionalmente protegidos sobre el interés público en la divulgación que lo impida, se concederá el acceso a información.



 V.13.08.25                                                                                              Página 55
 Temario Específico. Auxiliar Administrativo/a",
        correct: "b"
    },
    {
        id: 203,
        q: "La Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno establece en su artículo 15.2, en relación con las solicitudes de ejercicio del derecho de acceso, que si la información solicitada contuviese datos meramente identificativos relacionados con la organización, funcionamiento o actividad pública del órgano, el acceso se podrá autorizar:",
        a: "En caso de que se contase con el consentimiento expreso y por escrito del afectado, a menos que dicho afectado hubiese hecho manifiestamente públicos los datos con anterioridad a que se solicitase el acceso.",
        b: "En caso de que se cuente con el consentimiento expreso del afectado o si aquel estuviera amparado por una norma con rango de ley.",
        c: "Previa ponderación suficientemente razonada del interés público en la divulgación de la información y los derechos de los afectados cuyos datos aparezcan en la información solicitada, en particular su derecho fundamental a la protección de datos de carácter personal.",
        d: "Con carácter general, y salvo que en el caso concreto prevalezca la protección de datos personales u otros derechos constitucionalmente protegidos sobre el interés público en la divulgación que lo impida, se concederá el acceso a información.",
        correct: "d"
    },
    {
        id: 204,
        q: "La Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno establece en su artículo 15.3, en relación con las solicitudes de ejercicio del derecho de acceso, que cuando la información solicitada no contuviera datos especialmente protegidos, el órgano al que se dirija la solicitud concederá el acceso:",
        a: "En caso de que se contase con el consentimiento expreso y por escrito del afectado, a menos que dicho afectado hubiese hecho manifiestamente públicos los datos con anterioridad a que se solicitase el acceso.",
        b: "En caso de que se cuente con el consentimiento expreso del afectado o si aquel estuviera amparado por una norma con rango de ley.",
        c: "Previa ponderación suficientemente razonada del interés público en la divulgación de la información y los derechos de los afectados cuyos datos aparezcan en la información solicitada, en particular su derecho fundamental a la protección de datos de carácter personal.",
        d: "Con carácter general, y salvo que en el caso concreto prevalezca la protección de datos personales u otros derechos constitucionalmente protegidos sobre el interés público en la divulgación que lo impida, se concederá el acceso a información.",
        correct: "c"
    },
    {
        id: 205,
        q: "La Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno establece en su artículo 17.1, el procedimiento para el ejercicio del derecho de acceso se iniciará con la presentación de la correspondiente solicitud, que deberá dirigirse a:",
        a: "Al titular del órgano administrativo o entidad que posea la información.",
        b: "Al titular del órgano administrativo o entidad competente para la resolución de las solicitudes de acceso a la información.",
        c: "Al superior jerárquico del titular del órgano administrativo o entidad que posea la información.",
        d: "Al superior jerárquico del titular del órgano administrativo o entidad competente para la resolución de las solicitudes de acceso a la información.



 V.13.08.25                                                                                            Página 56
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 206,
        q: "La Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno establece en su artículo 17.2, que la solicitud de acceso a la información podrá presentarse por cualquier medio que permita tener constancia de:",
        a: "La identidad del solicitante, la información que se solicita, una dirección de contacto, preferentemente electrónica, a efectos de comunicaciones y, en su caso, la modalidad que se prefiera para acceder a la información solicitada.",
        b: "Nombre y apellidos del interesado y, en su caso, de la persona que lo represente, la información que se solicita, una dirección de contacto, preferentemente electrónica, a efectos de comunicaciones y, en su caso, la modalidad que se prefiera para acceder a la información solicitada.",
        c: "La identidad del solicitante, los hechos, razones y petición en que se concrete, con toda claridad, la solicitud de información que se solicita, una dirección de contacto, preferentemente electrónica, a efectos de comunicaciones y, en su caso, la modalidad que se prefiera para acceder a la información solicitada.",
        d: "La identidad del solicitante, la información que se solicita, una dirección de contacto, preferentemente electrónica, a efectos de comunicaciones, lugar, fecha, firma y, en su caso, la modalidad que se prefiera para acceder a la información solicitada.",
        correct: "a"
    },
    {
        id: 207,
        q: "La Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno establece en su artículo 18 que se inadmitirán a trámite, mediante resolución motivada, las solicitudes:",
        a: "Referidas a información que tenga carácter auxiliar o de apoyo como la contenida en notas, borradores, opiniones, resúmenes, comunicaciones e informes internos o entre órganos o entidades administrativas.",
        b: "Que contuvieran datos personales que revelen la ideología, afiliación sindical, religión o creencias.",
        c: "Cuya concesión revele información relativa a la prevención, investigación y sanción de los ilícitos penales, administrativos o disciplinarios.",
        d: "Cuya concesión resulte incompatible con la garantía de la confidencialidad o el secreto requerido en procesos de toma de decisión.",
        correct: "a"
    },
    {
        id: 208,
        q: "La Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno establece en su artículo 20.5 que las resoluciones dictadas en materia de acceso a la información pública son recurribles:",
        a: "Directamente ante la Jurisdicción Contencioso-administrativa, sin perjuicio de la posibilidad de interposición de una reclamación potestativa ante el Consejo de Transparencia y Buen Gobierno.",
        b: "Directamente ante la Jurisdicción Contencioso-administrativa, sin perjuicio de la posibilidad de ser recurridos potestativamente en reposición ante el mismo órgano que los hubiera dictado.",
        c: "Cuando no pongan fin a la vía administrativa, en alzada ante el órgano superior jerárquico del que los dictó.",
        d: "Exclusivamente, mediante la interposición de un recurso extraordinario de revisión ante el órgano administrativo que los dictó, cuando concurra alguna de las circunstancias recogidas en el artículo 125 de la Ley de Procedimiento Administrativo Común de las Administraciones Públicas.



 V.13.08.25                                                                                             Página 57
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 209,
        q: "La Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno establece en su artículo 32 que el plazo de prescripción de las infracciones previstas en su Título II será de:",
        a: "Tres años para las infracciones muy graves, dos años para las graves y un año para las leves.",
        b: "Tres años para las infracciones muy graves, dos años para las graves y seis meses para las leves.",
        c: "Cinco años para las infracciones muy graves, tres años para las graves y un año para las leves.",
        d: "Cinco años para las infracciones muy graves, tres años para las graves y seis meses para las leves.



 V.13.08.25                                                                                             Página 58
 Temario Específico. Auxiliar Administrativo/a
 Tema 14. Principios básicos de Prevención de Riesgos Laborales. Normativa legal. Modalidades de organización de la prevención en la empresa. Gestión de la actividad preventiva.",
        correct: "c"
    },
    {
        id: 210,
        q: "Señale cuál de los siguientes no es un principio general de la acción preventiva:",
        a: "Evitar los riesgos.",
        b: "Evaluar los riesgos que no se puedan evitar.",
        c: "Tener en cuenta la evolución de la técnica.",
        d: "Adoptar medidas que antepongan la protección individual a la colectiva.",
        correct: "d"
    },
    {
        id: 211,
        q: "¿Cuál es la definición legal de accidente de trabajo?",
        a: "Toda lesión corporal que sufre un trabajador.",
        b: "Toda lesión corporal que el trabajador sufra con ocasión, o a consecuencia, del trabajo que ejecute por cuenta ajena.",
        c: "Toda enfermedad contraída a consecuencia del trabajo ejecutado por cuenta ajena.",
        d: "Toda enfermedad que sufra el trabajador mientras trabaja.",
        correct: "b"
    },
    {
        id: 212,
        q: "¿Quién debe facilitar el Libro de Incidencias?",
        a: "La Inspección de Trabajo a solicitud del Coordinador de Seguridad y Salud.",
        b: "El colegio profesional del técnico que haya aprobado el Plan.",
        c: "El Coordinador de Seguridad y Salud en fase de ejecución.",
        d: "Cualquier persona que está en la obra.",
        correct: "b"
    },
    {
        id: 213,
        q: "Señale, de las cuatro siguientes, cual es la norma legal más importante sobre seguridad y salud en el trabajo es:",
        a: "Reglamento de los Servicios de Prevención.",
        b: "Ley General de la Seguridad Social.",
        c: "Ley General de Sanidad.",
        d: "Ley de Prevención de Riesgos Laborales.",
        correct: "d"
    },
    {
        id: 214,
        q: "¿Qué órgano de la Administración vigila el cumplimiento de la normativa sobre prevención de riesgos laborales en las empresas españolas?",
        a: "Instituto Nacional de Seguridad e Higiene en el Trabajo.",
        b: "Inspección de Industria.",
        c: "Inspección de Trabajo y Seguridad Social.",
        d: "Autoridades sanitarias.",
        correct: "c"
    },
    {
        id: 215,
        q: "¿Cuál de los siguientes órganos de la Administración puede ordenar la paralización de los trabajos en los que exista riesgo grave o inminente?",
        a: "Comisión Nacional de Seguridad y Salud en el Trabajo",
        b: "Inspección de Trabajo y Seguridad Social.",
        c: "Instituto Nacional de Seguridad e Higiene en el Trabajo.",
        d: "Autoridades sanitarias.



 V.13.08.25                                                                                              Página 59
 Temario Específico. Auxiliar Administrativo/a",
        correct: "b"
    },
    {
        id: 216,
        q: "¿Cuál de las siguientes medidas de seguridad para las operaciones de levantamiento mecánico de cargas es falsa?",
        a: "El descenso de las cargas se realizará rápidamente para abastecer los tajos.",
        b: "Se prohíbe cargar un aparato con pesos superiores a la carga máxima indicada.",
        c: "No se izarán cargas sobre los trabajadores.",
        d: "La elevación se hará siempre en sentido vertical.",
        correct: "a"
    },
    {
        id: 217,
        q: "Señale cuál de estas afirmaciones es verdadera:",
        a: "El ruido siempre provoca accidentes.",
        b: "El ruido siempre provoca sordera.",
        c: "El ruido disminuye el nivel de atención y aumenta el tiempo de reacción del individuo, pudiendo ser la causa de un error que provoque un accidente.",
        d: "El ruido no provoca accidentes de trabajo ni enfermedades profesionales, únicamente produce incomodidad.",
        correct: "c"
    },
    {
        id: 218,
        q: "El objetivo de un sistema de protección colectivo es que:",
        a: "Pueda ser usado por cualquier trabajador.",
        b: "Pueda colocarse en equipos de trabajo de uso múltiple",
        c: "Actúe de manera independiente a la intención individual de su uso",
        d: "Proteja a la colectividad y elimine la necesidad de utilizar EPIs",
        correct: "d"
    },
    {
        id: 219,
        q: "Uno de los siguientes medios de protección no es colectivo. Señale cual:",
        a: "Un resguardo.",
        b: "Un interruptor diferencial.",
        c: "El arnés de seguridad.",
        d: "Sistemas de ventilación",
        correct: "c"
    },
    {
        id: 220,
        q: "Antes de utilizar un EPI:",
        a: "Se habrá seleccionado en función del riesgo a proteger.",
        b: "Se desecharán los de costo elevado.",
        c: "No será necesario que los trabajadores participen en su selección.",
        d: "Se informará a los trabajadores de la forma de pago.",
        correct: "a"
    },
    {
        id: 221,
        q: "En una obra es obligatorio que exista un Coordinador en fase de ejecución de obra, cuando:",
        a: "El presupuesto de obra supere los 450.000 euros.",
        b: "Lo decida la empresa contratista.",
        c: "Exista riesgo de caída de altura que no pueda evitarse mediante protecciones colectivas.",
        d: "En la obra intervengan más de una empresa y trabajadores autónomos o varios trabajadores autónomos.",
        correct: "d"
    },
    {
        id: 222,
        q: "¿Cuál de las siguientes afirmaciones es la más correcta a la hora de utilizar el coche particular para evacuar a un herido? Se utilizará:",
        a: "Siempre.",
        b: "Únicamente si hemos recibido un curso de primeros auxilios.",
        c: "No se recomienda trasladarles en el coche particular.",
        d: "Sólo si lo solicita el accidentado.


 V.13.08.25                                                                                            Página 60
 Temario Específico. Auxiliar Administrativo/a",
        correct: "c"
    },
    {
        id: 223,
        q: "Cuando hablamos de primeros auxilios, ¿Cuál de los siguientes aspectos NO se considera un signo vital en el primer reconocimiento del accidentado?",
        a: "Conciencia.",
        b: "Respiración.",
        c: "Coherencia al expresarse.",
        d: "Pulso.",
        correct: "c"
    },
    {
        id: 224,
        q: "¿El ruido puede ser responsable de accidentes?",
        a: "No, porque aunque disminuye el nivel de atención, es difícil que cause un error que pueda provocar un accidente.",
        b: "No de un accidente de trabajo, pero sí una enfermedad profesional.",
        c: "Sí, porque disminuye el nivel de atención y aumenta el tiempo de reacción del individuo, pudiendo ser la causa de un error que provoque un accidente.",
        d: "El ruido no provoca accidentes de trabajo ni enfermedades profesionales, únicamente produce disconfort.",
        correct: "c"
    },
    {
        id: 225,
        q: "¿Cuál de las siguientes medidas para reducir la fatiga en el trabajo es falsa?",
        a: "Adaptar la carga de trabajo a las capacidades del trabajador.",
        b: "Intentar no variar, en lo posible, las posturas de trabajo.",
        c: "Adecuar el mobiliario a las tareas.",
        d: "Controlar la cantidad y la calidad de la información tratada.",
        correct: "b"
    },
    {
        id: 226,
        q: "¿Cuál de los siguientes factores de la organización del trabajo favorece la aparición de la insatisfacción laboral?",
        a: "Las buenas relaciones con los compañeros.",
        b: "Los trabajos rutinarios.",
        c: "La estabilidad en el empleo.",
        d: "La promoción dentro de la empresa.",
        correct: "b"
    },
    {
        id: 227,
        q: "¿Cuál de los siguientes medios de protección NO es colectivo?",
        a: "Un resguardo.",
        b: "Interruptor diferencial.",
        c: "Arnés de seguridad.",
        d: "Extracción localizada.",
        correct: "c"
    },
    {
        id: 228,
        q: "Las actuaciones de entrenamiento para emergencias se realizan en los ensayos de situaciones de emergencia, que se denominan:",
        a: "Emergencias parciales.",
        b: "Emergencias generales.",
        c: "Simulacros.",
        d: "Conatos de incendio.",
        correct: "c"
    },
    {
        id: 229,
        q: "Las situaciones de emergencia se pueden clasificar, siguiendo el criterio de menor a mayor gravedad, en:",
        a: "Conato de emergencia, emergencia parcial, emergencia general y evacuación.",
        b: "Emergencia parcial, conato de emergencia, emergencia general y evacuación.",
        c: "Emergencia general, evacuación, emergencia parcial y conato de emergencia.",
        d: "Emergencia parcial, conato de emergencia, evacuación y emergencia general.
 V.13.08.25                                                                                              Página 61
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 230,
        q: "Los manipuladores que padezcan enfermedad de transmisión alimentaria o estén afecta- dos de otras enfermedades, como diarrea, infecciones de la piel, infecciones respiratorias, etc.",
        a: "Deben informar a su responsable para que valore la situación, vea la necesidad de un reconocimiento médico y, en su caso, decida su exclusión temporal de la manipulación de alimentos.",
        b: "No debe hacer nada. No tiene importancia.",
        c: "Puede afectar al sabor final del plato que se elabora.",
        d: "La manipulación de alimentos se puede llevar a cabo por personal que presente cualquier tipo de enfermedad.",
        correct: "a"
    },
    {
        id: 231,
        q: "¿Qué entendemos como “Peligro” desde la prevención de riesgos?",
        a: "Agente biológico que pueda causar daño para la salud.",
        b: "Agente físico que pueda causar daño para la salud.",
        c: "Agente químico que pueda causar daño para la salud.",
        d: "Agente biológico, químico o físico que pueda causar un daño para la salud.",
        correct: "d"
    },
    {
        id: 232,
        q: "¿Qué significa Punto de Control Critico?",
        a: "Operación, Práctica, proceso, Localización, en la que puede aplicarse alguna medida preventiva que elimine o minimice uno o más peligros.",
        b: "Medidas previamente planificadas aplicadas cuando hay una desviación de los límites críticos establecidos.",
        c: "Un conjunto de unidades de venta de un producto alimenticio, producido, fabricado o envasado en circunstancias prácticamente idénticas.",
        d: "Las acciones y actividades que pueden ser utilizadas para eliminar un peligro o reducir su incidencia a niveles aceptables.",
        correct: "a"
    },
    {
        id: 233,
        q: "Con respecto a “Si elevamos los niveles de prevención mejoramos las condiciones del trabajo”, se puede afirmar que:",
        a: "\"Niveles de prevención” y “condiciones de trabajo” no tienen nada que ver.",
        b: "Las condiciones de trabajo guardan una relación directa con la prevención.",
        c: "Los niveles de prevención son lo que podemos soportar al trabajar.",
        d: "Las condiciones de trabajo son las enfermedades profesionales.



 V.13.08.25                                                                                            Página 62
 Temario Específico. Auxiliar Administrativo/a
 Tema 15. La Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres. Las Políticas Públicas para la Igualdad y el Derecho de Igualdad y no Discriminación. El principio de igualdad en el empleo público. La Ley 12/2007, de 26 de noviembre, para la promoción de la igualdad de género en Andalucía, y la Ley 9/2018, de 8 de octubre, de modificación de la anterior.",
        correct: "b"
    },
    {
        id: 234,
        q: "El principio de igualdad de trato entre mujeres y hombres recogido en el art.3 de la Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres supone:",
        a: "La ausencia de toda discriminación.",
        b: "La ausencia de toda discriminación, directa, por razón de sexo y, especialmente, las derivadas de la maternidad.",
        c: "La ausencia de cualquier tipo de discriminación.",
        d: "La ausencia de toda discriminación, directa o indirecta, por razón de sexo, y especialmente, las derivadas de la maternidad, la asunción de obligaciones familiares y el estado civil.",
        correct: "d"
    },
    {
        id: 235,
        q: "Se considera discriminación indirecta por razón de sexo:",
        a: "La situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, salvo que dicha disposición, criterio o práctica puedan justificarse objetivamente en atención a una finalidad legítima y que los medios para alcanzar dicha finalidad sean necesarios y adecuados.",
        b: "La situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, salvo que dicha disposición, criterio o práctica puedan justificarse subjetivamente en atención a una finalidad legítima y que los medios para alcanzar dicha finalidad sean necesarios y adecuados.",
        c: "La situación en que una disposición, criterio o práctica neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, salvo que dicha disposición, criterio o práctica puedan justificarse objetivamente en atención a una finalidad legítima y que los medios para alcanzar dicha finalidad sean necesarios y adecuados.",
        d: "La situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en ventaja particular con respecto a personas del otro, salvo que dicha disposición, criterio o práctica puedan justificarse objetivamente en atención a una finalidad legítima y que los medios para alcanzar dicha finalidad sean necesarios y adecuados.",
        correct: "a"
    },
    {
        id: 236,
        q: "El acoso sexual y el acoso por razón de sexo se encuentran recogidos:",
        a: "Exclusivamente en el Código Penal.",
        b: "En el Código Penal y en la Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres.",
        c: "En ninguna ley, solo en un reglamento.",
        d: "Ninguna es correcta.



 V.13.08.25                                                                                             Página 63
 Temario Específico. Auxiliar Administrativo/a",
        correct: "b"
    },
    {
        id: 237,
        q: "¿Quiénes adoptarán, o podrán adoptar medidas específicas a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho respecto de los hombres?:",
        a: "Los Poderes Públicos.",
        b: "Las personas jurídicas públicas y privadas.",
        c: "Los Poderes Públicos, las personas físicas y jurídicas privadas.",
        d: "Ninguna es correcta.",
        correct: "c"
    },
    {
        id: 238,
        q: "¿Quién se encuentra legitimada en los litigios sobre acoso sexual y acoso por razón de sexo?",
        a: "La persona acosada.",
        b: "El Ministerio Fiscal.",
        c: "Cualquier persona que presencie los hechos.",
        d: "Todos los anteriores.",
        correct: "a"
    },
    {
        id: 239,
        q: "Los actos y las claúsulas de los negocios jurídicos que constituyan o causen discriminación por razón de sexo, se considerarán:",
        a: "Nulos.",
        b: "Nulos y sin efecto.",
        c: "Anulables.",
        d: "Subsanables.",
        correct: "b"
    },
    {
        id: 240,
        q: "El principio de igualdad de trato y de oportunidades entre mujeres y hombres informará la actuación de todos los Poderes Públicos, con carácter:",
        a: "Transversal.",
        b: "General.",
        c: "General y transversal.",
        d: "Solo en la Administración General del Estado.",
        correct: "a"
    },
    {
        id: 241,
        q: "Los poderes públicos deberán incluir sistemáticamente la variable sexo en:",
        a: "Las estadísticas y encuestas que se lleven a cabo.",
        b: "En todas sus actuaciones.",
        c: "Sólo en las recogidas de datos.",
        d: "Las estadísticas, encuestas y recogidas de datos que se lleven a cabo.",
        correct: "d"
    },
    {
        id: 242,
        q: "Indique cuál de las siguientes afirmaciones es correcta:",
        a: "Los proyectos de disposiciones de carácter general y los planes de especial relevancia económica, social, cultural y artística que se sometan a la aprobación del Consejo de Ministros, deberán incorporar un informe sobre su impacto por razón de género.",
        b: "Los planes de especial relevancia económica, social, cultural y artística que se sometan a la aprobación del Consejo de Ministros deberán incorporar un informe sobre su impacto por razón de género.",
        c: "Los proyectos de disposiciones de carácter general que se sometan a la aprobación del Consejo de Ministros deberán incorporar un informe sobre su impacto por razón de género.",
        d: "Los proyectos de disposiciones de carácter general y los planes de especial relevancia económica, social, cultural y artística que se sometan a la aprobación de las Cortes Generales deberán incorporar un informe sobre su impacto por razón de género.


 V.13.08.25                                                                                             Página 64
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 243,
        q: "Las mujeres y los hombres son iguales en:",
        a: "Dignidad humana, derechos y obligaciones.",
        b: "Dignidad humana, e iguales en derechos y deberes.",
        c: "Dignidad humana, derechos, deberes y obligaciones.",
        d: "Derechos, deberes, obligaciones y oportunidades.",
        correct: "b"
    },
    {
        id: 244,
        q: "Constituye discriminación directa por razón de sexo:",
        a: "Todo trato favorable a las mujeres embarazadas.",
        b: "Todo trato desfavorable a las mujeres embarazadas.",
        c: "Todo trato favorable a mujeres relacionado con el embarazo o maternidad.",
        d: "Todo trato desfavorable a las mujeres relacionado con el embarazo o la maternidad",
        correct: "d"
    },
    {
        id: 245,
        q: "Según el art.7 la Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres constituye acoso sexual:",
        a: "Cualquier comportamiento, verbal o físico, de naturaleza sexual que tenga el propósito o produzca el efecto de atentar contra la dignidad de una persona, en particular cuando se crea un entorno intimidatorio, degradante u ofensivo.",
        b: "Cualquier comportamiento, de naturaleza sexual que tenga el propósito o produzca el efecto de atentar contra la dignidad de una persona, en particular cuando se crea un entorno intimidatorio, degradante u ofensivo.",
        c: "Cualquier comportamiento, verbal o físico, de naturaleza sexual aunque no tenga el propósito o produzca el efecto de atentar contra la dignidad de una persona, en particular cuando se crea un entorno intimidatorio, degradante u ofensivo.",
        d: "Cualquier comportamiento, verbal, físico o psíquico, de naturaleza sexual que tenga el propósito o produzca el efecto de atentar contra la dignidad de una persona, en particular cuando se crea un entorno intimidatorio, degradante u ofensivo.",
        correct: "a"
    },
    {
        id: 246,
        q: "El Gobierno elaborará un informe periódico sobre el conjunto de sus actuaciones en relación con el principio de Igualdad entre mujeres y hombres. De este informe se dará cuenta a:",
        a: "A las Cortes Generales, a las Asambleas legislativas de las Comunidades autónomas y a las Entidades Locales.",
        b: "A la ciudadanía en general.",
        c: "A las Cortes Generales y a las Asambleas legislativas de las Comunidades autónomas.",
        d: "Las Cortes Generales.



 V.13.08.25                                                                                            Página 65
 Temario Específico. Auxiliar Administrativo/a",
        correct: "d"
    },
    {
        id: 247,
        q: "El Gobierno, en el ámbito de sus competencias, fomentará el acceso a la vivienda de las mujeres:",
        a: "En situación de necesidad y en riesgo de exclusión, y de las que hayan sido víctimas de violencia de género, en especial cuando, en ambos casos, tengan hijos menores exclusivamente a su cargo.",
        b: "En situación de necesidad o en riesgo de exclusión, y de las que hayan sido víctimas de violencia de género, en especial cuando, en ambos casos, tengan hijos menores a su cargo.",
        c: "En situación de necesidad o en riesgo de exclusión, y de las que hayan sido víctimas de violencia de género, en especial cuando, en ambos casos, tengan hijos menores exclusivamente a su cargo.",
        d: "En situación de necesidad o en riesgo de exclusión, o de las que hayan sido víctimas de violencia de género, en especial cuando, en ambos casos, tengan hijos menores exclusivamente a su cargo.",
        correct: "c"
    },
    {
        id: 248,
        q: "La Corporación RTVE, en el ejercicio de su función de servicio público, no perseguirá el siguiente objetivo:",
        a: "Reflejar adecuadamente la presencia de las mujeres en los diversos ámbitos de la vida social.",
        b: "No utilizar el lenguaje en forma no sexista.",
        c: "Adoptar, mediante la autorregulación, códigos de conducta tendentes a transmitir el contenido del principio de igualdad.",
        d: "Colaborar con las campañas institucionales dirigidas a fomentar la igualdad entre mujeres y hombres y a erradicar la violencia de género.",
        correct: "b"
    },
    {
        id: 249,
        q: "Todos los medios de comunicación:",
        a: "Respetarán la igualdad entre mujeres y hombres.",
        b: "Deberán respetar la igualdad entre mujeres y hombres.",
        c: "Respetarán la igualdad entre mujeres y hombres, en la medida de sus posibilidades.",
        d: "Podrán respetar la igualdad entre mujeres y hombres.",
        correct: "a"
    },
    {
        id: 250,
        q: "La publicidad que comporte una conducta discriminatoria, según la Ley Orgánica para la Igualdad efectiva de hombres y mujeres:",
        a: "Se considerará publicidad lícita.",
        b: "Se considerará publicidad lícita pero sancionable.",
        c: "Se considerará publicidad ilícita.",
        d: "Este tipo de publicidad se sancionará con una multa.",
        correct: "c"
    },
    {
        id: 251,
        q: "La igualdad de trato y de oportunidades entre mujeres y hombres es:",
        a: "Un principio informador del ordenamiento jurídico.",
        b: "Un derecho fundamental recogido en el artículo 10 de la Constitución.",
        c: "Un derecho fundamental del artículo 12 de la Constitución",
        d: "Un principio rector de la política económica y social.



 V.13.08.25                                                                                           Página 66
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 252,
        q: "Se entiende por composición equilibrada la presencia de mujeres y hombres de forma que, en el conjunto a que se refiera, las personas de cada sexo:",
        a: "No superen el setenta por ciento, ni sean menos del treinta por ciento.",
        b: "No superen el sesenta por ciento, ni sean menos del cuarenta por ciento.",
        c: "No superen el setenta por ciento, ni sean menos del cuarenta por ciento.",
        d: "Sean un cincuenta por ciento de cada sexo.",
        correct: "b"
    },
    {
        id: 253,
        q: "Las empresas están obligadas a respetar la igualdad de trato y de oportunidades en el ámbito laboral y, con esta finalidad, deberán adoptar medidas dirigidas a evitar cualquier tipo de discriminación laboral entre mujeres y hombres, medidas que deberán negociar, y en su caso acordar, con:",
        a: "Los representantes de los trabajadores.",
        b: "Los trabajadores.",
        c: "Los representantes legales de las empresas.",
        d: "Representantes de trabajadores y trabajadores.",
        correct: "a"
    },
    {
        id: 254,
        q: "El periodo de vigencia o duración de los planes de igualdad, que será determinado, en su caso, por las partes negociadoras, no podrá ser superior a:",
        a: "Tendrá una duración anual.",
        b: "2 años, renovable por un periodo de un año más.",
        c: "4 años.",
        d: "3 años.",
        correct: "c"
    },
    {
        id: 255,
        q: "Están obligadas a elaborar un plan de igualdad las empresas:",
        a: "De 50 o más trabajadores.",
        b: "Las empresas que tengan más de 100 trabajadores.",
        c: "Todas las empresas.",
        d: "Las empresas en las que hayan más hombres que mujeres",
        correct: "a"
    },
    {
        id: 256,
        q: "Los planes de igualdad de las empresas son un conjunto ordenado de medidas, adoptadas después de realizar un diagnóstico de situación, tendentes a alcanzar en la empresa:",
        a: "La igualdad de trato entre mujeres y hombres.",
        b: "La igualdad de oportunidades entre mujeres y hombres.",
        c: "La igualdad de trato y de oportunidades entre mujeres y hombres.",
        d: "La igualdad de trato y de oportunidades entre mujeres y hombres y a eliminar la discriminación por razón de sexo.",
        correct: "d"
    },
    {
        id: 257,
        q: "Los planes de igualdad de las empresas contendrán un conjunto ordenado de medidas evaluables dirigidas a:",
        a: "Remover los obstáculos que impiden o dificultan la igualdad efectiva de mujeres y hombres.",
        b: "Eliminar los obstáculos que impiden o dificultan la igualdad efectiva de mujeres y hombres.",
        c: "Disminuir los obstáculos que impiden o dificultan la igualdad efectiva de mujeres y hombres.",
        d: "Erradicar los obstáculos que impiden o dificultan la igualdad efectiva de mujeres y hombres.



 V.13.08.25                                                                                              Página 67
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 258,
        q: "Los planes de Igualdad se inscribirán en el Registro de Planes de Igualdad:",
        a: "Cuando expresamente se acuerde por las partes.",
        b: "Siempre.",
        c: "Sólo en el caso de que la empresa tenga más de 100 trabajadores",
        d: "Cuando se adopten medidas laborales.",
        correct: "b"
    },
    {
        id: 259,
        q: "Para impulsar la adopción voluntaria de planes de igualdad, establecerá medidas de fomento:",
        a: "El Ministerio de Igualdad.",
        b: "El Gobierno y los presidentes/as de las CCAA.",
        c: "El Gobierno, los presidentes/as de las CCAA y los Alcaldes/a.",
        d: "El Gobierno.",
        correct: "d"
    },
    {
        id: 260,
        q: "La igualdad entre mujeres y hombres empezó a ser un objetivo institucional a partir de la creación del Instituto de la mujer, en el año:",
        a: "2006.",
        b: "2008.",
        c: "2007.",
        d: "2010.",
        correct: "c"
    },
    {
        id: 261,
        q: "¿Cuántos ejes de intervención establece el III Plan Estratégico de Igualdad entre Mujeres y Hombres?",
        a: "4 ejes.",
        b: "3 ejes.",
        c: "5 ejes.",
        d: "7 ejes.",
        correct: "a"
    },
    {
        id: 262,
        q: "¿Cuántas medidas establece el III Plan Estratégico de Igualdad entre Mujeres y Hombres?",
        a: "13.",
        b: "27.",
        c: "34.",
        d: "15.",
        correct: "c"
    },
    {
        id: 263,
        q: "Se ha producido un incremento de las mujeres en puestos de responsabilidad, pero sobre todo se ha notado en:",
        a: "Los poderes legislativo y ejecutivo.",
        b: "Los poderes económico y judicial.",
        c: "Órganos constitucionales y reguladores.",
        d: "Universidades.",
        correct: "a"
    },
    {
        id: 264,
        q: "¿Quién aprueba el Plan Estratégico para la Igualdad entre Mujeres y Hombres en la AGE?",
        a: "El Congreso.",
        b: "El Gobierno.",
        c: "El Gobierno, los presidentes/as de las CCAA y los Alcaldes/as.",
        d: "El Consejo de Ministros.



 V.13.08.25                                                                                             Página 68
 Temario Específico. Auxiliar Administrativo/a",
        correct: "d"
    },
    {
        id: 265,
        q: "En el I Plan Estratégico para la Igualdad de Mujeres y hombres en Andalucía se establecieron:",
        a: "10 líneas de actuación.",
        b: "8 líneas de actuación.",
        c: "12 líneas de actuación.",
        d: "15 líneas de actuación.",
        correct: "b"
    },
    {
        id: 266,
        q: "El I Plan estratégico para la Igualdad de Mujeres y Hombres de Andalucía se estableció para los años:",
        a: "2010-2013.",
        b: "2007-2010.",
        c: "2009-2012.",
        d: "2006-2009.",
        correct: "a"
    },
    {
        id: 267,
        q: "¿Cuántas fases constituyen la elaboración de un Plan de Igualdad?",
        a: "3 fases.",
        b: "4 fases.",
        c: "2 fases.",
        d: "6 fases.",
        correct: "a"
    },
    {
        id: 268,
        q: "La Ley de Igualdad de Oportunidades es del año:",
        a: "2007.",
        b: "2008.",
        c: "2010.",
        d: "2012.",
        correct: "a"
    },
    {
        id: 269,
        q: "¿Qué son las medidas de acción positiva?",
        a: "Son actuaciones puntuales cuya finalidad es la eliminación a corto plazo de algún obstáculo concreto.",
        b: "Son actuaciones permanentes cuya finalidad es la eliminación a corto plazo de algún obstáculo concreto.",
        c: "Son actuaciones aleatorias cuya finalidad es la eliminación a corto plazo de algún obstáculo concreto.",
        d: "Son actuaciones reiteradas en el tiempo cuya finalidad es la eliminación a corto plazo de algún obstáculo concreto",
        correct: "a"
    },
    {
        id: 270,
        q: "La Cuarta Conferencia Mundial sobre las Mujeres se celebró en:",
        a: "Londres 1992.",
        b: "New York 1996.",
        c: "New York 1992.",
        d: "Pekín 1995.",
        correct: "d"
    },
    {
        id: 271,
        q: "La Comisión contra la Violencia de Género del Consejo Interterritorial del Sistema Nacional de Salud estará compuesta por representantes:",
        a: "De todas las Comunidades Autónomas con competencia en la materia.",
        b: "De las asociaciones de mujeres.",
        c: "De las asociaciones de mujeres y representantes de los trabajadores.",
        d: "De las Entidades Locales.
 V.13.08.25                                                                                             Página 69
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 272,
        q: "¿En qué artículo de la Ley Orgánica 3/2007 se establecen unas obligaciones a los poderes públicos para la adecuación de estadísticas y estudios que garanticen de forma efectiva la perspectiva de género?",
        a: "Artículo 1.",
        b: "Artículo 20.",
        c: "Artículo 19.",
        d: "Artículo 17.",
        correct: "b"
    },
    {
        id: 273,
        q: "Según la Ley 12/2007, de 26 de noviembre para la promoción de la igualdad de género en Andalucía, se entiende por interseccionalidad:",
        a: "La situación de discriminación múltiple en que una mujer padece formas agravadas y específicas de discriminación por razón de clase, etnia, religión orientación o identidad.",
        b: "La situación de discriminación múltiple en que una mujer menor de edad padece formas agravadas y específicas de discriminación por razón de clase, etnia, religión orientación o identidad.",
        c: "La situación de discriminación múltiple en que una mujer o un grupo de mujeres padece formas agravadas y específicas de discriminación por razón de clase, etnia, religión orientación o identidad.",
        d: "La situación de discriminación múltiple en que una mujer padece cualquier tipo de discriminación por razón de clase, etnia, religión orientación o identidad.",
        correct: "a"
    },
    {
        id: 274,
        q: "El Consejo de Gobierno de la Junta de Andalucía, con la participación de las Entidades Locales, formulará y aprobará, un Plan Estratégico para la igualdad de Mujeres y Hombres en Andalucía, con una periodicidad:",
        a: "Anual.",
        b: "Trimestral.",
        c: "De cuatro años.",
        d: "Que no será inferior a 4 años.",
        correct: "d"
    },
    {
        id: 275,
        q: "El Observatorio Andaluz de la Igualdad de Género se encuentra adscrito:",
        a: "A La Consejería competente de Igualdad.",
        b: "Al Consejo de Gobierno.",
        c: "Es un órgano independiente.",
        d: "A la Consejería de Educación.",
        correct: "a"
    },
    {
        id: 276,
        q: "El Plan Estratégico para la igualdad de Mujeres y Hombres en Andalucía, se aprobará a propuesta de:",
        a: "El Consejo de Gobierno.",
        b: "La Consejería competente en materia de Igualdad.",
        c: "El Consejo de Gobierno y las Entidades Locales que hayan participado en su formulación.",
        d: "El Consejo de Gobierno y las Asociaciones de mujeres más representativas.



 V.13.08.25                                                                                            Página 70
 Temario Específico. Auxiliar Administrativo/a",
        correct: "b"
    },
    {
        id: 277,
        q: "Según la Ley 12/2007, de 26 de noviembre para la promoción de la igualdad de género en Andalucía se entiende por lenguaje sexista:",
        a: "El uso discriminatorio del lenguaje que se hace por razón de la orientación sexual.",
        b: "El uso discriminatorio del lenguaje que se hace por razón de sexo y orientación sexual.",
        c: "El uso discriminatorio del lenguaje que se hace por razón de sexo.",
        d: "El uso discriminatorio que se hace por razón de las creencias religiosas.",
        correct: "c"
    },
    {
        id: 278,
        q: "Según la Ley 12/2007, de 26 de noviembre para la promoción de la igualdad de género en Andalucía, se promoverá la existencia de un servicio especializado de igualdad de género en el ámbito municipal, considerando como tales a:",
        a: "Los Puntos de Información a la mujer.",
        b: "Los Centros Municipales de Información a la mujer.",
        c: "Los Ayuntamientos.",
        d: "El IAM.",
        correct: "b"
    },
    {
        id: 279,
        q: "Se considera discriminación directa por razón de sexo:",
        a: "La situación en que se encuentra una persona que haya sido tratada en atención a su sexo de una manera menos favorable que otra.",
        b: "La situación en que se encuentra una persona que sea o haya sido tratada en atención a su sexo de una manera menos favorable que otra.",
        c: "La situación en que se encuentra una persona que sea, haya sido o pudiera ser tratada en atención a su sexo de una manera menos favorable que otra en situación comparable",
        d: "La situación en que se encuentra una persona que sea, haya sido o pudiera ser tratada en atención a su sexo de una manera menos favorable que otra en situación comparable.



 V.13.08.25                                                                                          Página 71
 Temario Específico. Auxiliar Administrativo/a
 Tema 16. La protección de datos de carácter personal: Normativa de la Unión Europea y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.",
        correct: "c"
    },
    {
        id: 280,
        q: "El artículo 2 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), establece que se aplica a:",
        a: "Al tratamiento total o parcialmente automatizado de datos personales, así como al tratamiento no automatizado de datos personales contenidos o destinados a ser incluidos en un fichero.",
        b: "Al tratamiento total o parcialmente automatizado de datos personales, así como al tratamiento automatizado de datos personales contenidos o destinados a ser incluidos en un fichero.",
        c: "Al tratamiento total y parcialmente automatizado de datos personales, así como al tratamiento automatizado de datos personales contenidos o destinados a ser incluidos en un fichero.",
        d: "Al tratamiento total o parcialmente automatizado o no automatizado de datos personales.",
        correct: "a"
    },
    {
        id: 281,
        q: "El artículo 3 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), establece que se aplica a:",
        a: "Al tratamiento de datos personales en el contexto de las actividades de un establecimiento del responsable o del encargado en la Unión, independientemente de que el tratamiento tenga lugar en la Unión o no.",
        b: "Al tratamiento de datos personales en el contexto de las actividades de un establecimiento del responsable o del encargado en la Unión, sólo cuando el tratamiento tenga lugar en la Unión.",
        c: "Al tratamiento de datos personales en el contexto de las actividades de un establecimiento del responsable o del encargado en la Unión, que afecten a nacionales de estados miembros de la Unión.",
        d: "Al tratamiento de datos personales en el contexto de las actividades de un establecimiento del responsable o del encargado en la Unión, que afecten a residentes de estados miembros de la Unión.



 V.13.08.25                                                                                            Página 72
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 282,
        q: "El artículo 4 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), define al «responsable del tratamiento» o «responsable» como:",
        a: "La persona física o jurídica, autoridad pública, servicio u otro organismo que, solo o junto con otros, determine los fines y medios del tratamiento.",
        b: "La persona física o jurídica, autoridad pública, servicio u otro organismo que, solo o junto con otros, determine los fines o medios del tratamiento.",
        c: "La persona física o jurídica, autoridad pública, servicio u otro organismo que determine los fines y medios del tratamiento.",
        d: "La persona física o jurídica, o autoridad pública que determine los fines o medios del tratamiento.",
        correct: "a"
    },
    {
        id: 283,
        q: "El artículo 6 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), establece que el tratamiento será lícito si:",
        a: "El interesado dio su consentimiento para el tratamiento de sus datos personales con la finalidad que determine el responsable.",
        b: "El tratamiento es necesario para la ejecución de un contrato en el que el interesado es parte o para la aplicación a petición de éste de medidas precontractuales.",
        c: "El tratamiento es necesario para el cumplimiento de una obligación legal aplicable al interesado.",
        d: "El tratamiento es necesario para la satisfacción de intereses legítimos perseguidos por el responsable del tratamiento cuando sea realizado por las autoridades públicas en el ejercicio de sus funciones.",
        correct: "b"
    },
    {
        id: 284,
        q: "El artículo 7 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), establece que cuando el tratamiento se base en el consentimiento del interesado:",
        a: "Deberá ser expreso y realizarse por escrito.",
        b: "Si se realiza de forma oral, el responsable que lo reciba deberá realizar una diligencia por escrito en la que conste el alcance del consentimiento.",
        c: "Sólo se exigirá la forma escrita si se presta de forma genérica para el tratamiento de cualquier dato personal destinado a una finalidad determinada.",
        d: "El responsable deberá ser capaz de demostrar que aquel consintió el tratamiento de sus datos personales.



 V.13.08.25                                                                                            Página 73
 Temario Específico. Auxiliar Administrativo/a",
        correct: "d"
    },
    {
        id: 285,
        q: "El artículo 8 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), establece en relación con la oferta directa a niños de servicios de la sociedad de la información, que el tratamiento de los datos personales de un niño se considerará lícito cuando la base de legitimación sea el consentimiento prestado por el propio niño:",
        a: "Cuando tenga como mínimo 16 años.",
        b: "Cuando tenga como mínimo14 años.",
        c: "Los Estados miembros podrán establecer por ley una edad inferior a tales fines, siempre que esta no sea inferior a 12 años.",
        d: "El consentimiento lo prestará en todo caso quien ostente la patria potestad del menor de edad.",
        correct: "a"
    },
    {
        id: 286,
        q: "De conformidad con el artículo 9 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), el tratamiento de datos personales que revelen el origen étnico o racial, las opiniones políticas, las convicciones religiosas o filosóficas, la afiliación sindical, y el tratamiento de datos genéticos, datos biométricos dirigidos a identificar de manera unívoca a una persona física, datos relativos a la salud o datos relativos a la vida sexual o la orientación sexual de una persona física:",
        a: "Está prohibido.",
        b: "Podrán tratarse lícitamente cuando resulte necesario para el cumplimiento de una misión realizada en interés público o en el ejercicio de poderes públicos conferidos al responsable del tratamiento.",
        c: "Sólo está prohibido el tratamiento de datos personales relativos a la vida sexual o la orientación sexual, las convicciones religiosas y el origen étnico o racial.",
        d: "No puede estar prohibido.",
        correct: "a"
    },
    {
        id: 287,
        q: "De conformidad con el artículo 11 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), si los fines para los cuales un responsable trata datos personales no requieren o ya no requieren la identificación de un interesado por el responsable:",
        a: "Este no estará obligado a mantener, obtener o tratar información adicional con vistas a identificar al interesado con la única finalidad de cumplir el presente Reglamento.",
        b: "Durante el plazo de un año éste estará obligado a mantener, obtener o tratar información adicional con vistas a identificar al interesado con la única finalidad de cumplir el presente Reglamento.",
        c: "Mientras trate los datos personales estará obligado a mantener, obtener o tratar información adicional con vistas a identificar al interesado con la única finalidad de cumplir el presente Reglamento.",
        d: "Estará obligado a mantener, obtener o tratar información adicional con vistas a identificar al interesado con la finalidad del cumplir el presente Reglamento.


 V.13.08.25                                                                                               Página 74
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 288,
        q: "De conformidad con el artículo 12 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), el responsable del tratamiento facilitará al interesado información relativa a sus actuaciones sobre la base de una solicitud con arreglo a los artículos 15 a 22, y, en cualquier caso,",
        a: "En el plazo de un mes a partir de la recepción de la solicitud.",
        b: "En el plazo de quince días a partir de la recepción de la solicitud.",
        c: "En el plazo de diez días a partir de la recepción de la solicitud.",
        d: "En el plazo de dos meses a partir de la recepción de la solicitud.",
        correct: "a"
    },
    {
        id: 289,
        q: "De conformidad con el artículo 13 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), cuando se obtengan de un interesado datos personales relativos a él, el responsable del tratamiento, le facilitará toda la información indicada en el citado artículo 13:",
        a: "En el momento en que estos se obtengan.",
        b: "En el plazo máximo de 72 horas.",
        c: "Tan pronto como se haya dado de alta en el Registro de Actividades de Tratamiento (RAT)",
        d: "Dentro de un plazo razonable, una vez obtenidos los datos personales, y a más tardar dentro de un mes, habida cuenta de las circunstancias específicas en las que se traten dichos datos.",
        correct: "a"
    },
    {
        id: 290,
        q: "De conformidad con el artículo 14 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), cuando los datos personales no se hayan obtenidos del interesado, el responsable del tratamiento, le facilitará toda la información indicada en el citado artículo 14:",
        a: "En el momento en que estos se obtengan.",
        b: "En el plazo máximo de 72 horas.",
        c: "Tan pronto como se haya dado de alta en el Registro de Actividades de Tratamiento (RAT)",
        d: "Dentro de un plazo razonable, una vez obtenidos los datos personales, y a más tardar dentro de un mes, habida cuenta de las circunstancias específicas en las que se traten dichos datos.



 V.13.08.25                                                                                              Página 75
 Temario Específico. Auxiliar Administrativo/a",
        correct: "d"
    },
    {
        id: 291,
        q: "El artículo 3 de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales establece que podrán dirigirse al responsable o encargado del tratamiento al objeto de solicitar el acceso a los datos personales de personas fallecidas y, en su caso, su rectificación o supresión:",
        a: "Las personas vinculadas al fallecido por razones familiares o de hecho así como sus herederos.",
        b: "Los cónyuges o parejas de hecho del fallecido o, en su ausencia, aquellas personas unidas por vínculos de parentesco de hasta el tercer grado en línea recta o segundo en línea colateral.",
        c: "Exclusivamente las personas o instituciones a las que el fallecido hubiese designado expresamente para ello.",
        d: "Únicamente las personas vinculadas al fallecido por razones familiares.",
        correct: "a"
    },
    {
        id: 292,
        q: "El artículo 82 del Estatuto de Autonomía de Andalucía atribuye a la Comunidad Autónoma de Andalucía, en materia de protección de datos de carácter personal, la competencia:",
        a: "Exclusiva.",
        b: "Compartida.",
        c: "Ejecutiva.",
        d: "Se trata de una competencia atribuida a la Agencia Española de Protección de Datos.",
        correct: "c"
    },
    {
        id: 293,
        q: "El artículo 1 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos) establece que tiene por objeto",
        a: "Establecer las normas relativas a la protección de las personas físicas y jurídicas en lo que respecta al tratamiento de los datos personales y las normas relativas a la libre circulación de tales datos.",
        b: "Proteger los derechos y libertades fundamentales de las personas físicas y jurídicas, en particular, su derecho a la protección de los datos personales.",
        c: "Las respuestas a) y b) son correctas.",
        d: "Las respuestas a) y b) son incorrectas.",
        correct: "d"
    },
    {
        id: 294,
        q: "2. El artículo 2 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), establece que se aplica a:",
        a: "Al tratamiento total o parcialmente automatizado de datos personales, así como al tratamiento no automatizado de datos personales contenidos o destinados a ser incluidos en un fichero.",
        b: "Al tratamiento total o parcialmente automatizado de datos personales, así como al tratamiento automatizado de datos personales contenidos o destinados a ser incluidos en un fichero.",
        c: "Al tratamiento total y parcialmente automatizado de datos personales, así como al tratamiento automatizado de datos personales contenidos o destinados a ser incluidos en un fichero.",
        d: "Todas las respuestas son incorrectas.
 V.13.08.25                                                                                              Página 76
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 295,
        q: "El artículo 2 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), establece que no se aplica al tratamiento de datos personales:",
        a: "En el ejercicio de una actividad no comprendida en el ámbito de aplicación del Derecho de la Unión.",
        b: "Efectuado por una persona física en el ejercicio de actividades exclusivamente personales o domésticas.",
        c: "Por parte de las autoridades competentes con fines de prevención, investigación, detección o enjuiciamiento de infracciones penales, o de ejecución de sanciones penales, incluida la de protección frente a amenazas a la seguridad pública y su prevención.",
        d: "Las respuestas a), b) y c) son correctas.",
        correct: "d"
    },
    {
        id: 296,
        q: "El artículo 3 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), establece que se aplica a:",
        a: "Al tratamiento de datos personales en el contexto de las actividades de un establecimiento del responsable o del encargado en la Unión, independientemente de que el tratamiento tenga lugar en la Unión o no.",
        b: "Al tratamiento de datos personales en el contexto de las actividades de un establecimiento del responsable o del encargado en la Unión, sólo cuando el tratamiento tenga lugar en la Unión.",
        c: "Al tratamiento de datos personales en el contexto de las actividades de un establecimiento del responsable o del encargado en la Unión, que afecten a nacionales de estados miembros de la Unión.",
        d: "Al tratamiento de datos personales en el contexto de las actividades de un establecimiento del responsable o del encargado en la Unión, que afecten a residentes de estados miembros de la Unión.",
        correct: "a"
    },
    {
        id: 297,
        q: "El artículo 4 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), define al «responsable del tratamiento» o «responsable» como:",
        a: "La persona física o jurídica, autoridad pública, servicio u otro organismo que, solo o junto con otros, determine los fines y medios del tratamiento.",
        b: "La persona física o jurídica, autoridad pública, servicio u otro organismo que, solo o junto con otros, determine los fines o medios del tratamiento.",
        c: "La persona física o jurídica, autoridad pública, servicio u otro organismo que determine los fines y medios del tratamiento.",
        d: "Todas las respuestas son incorrectas.



 V.13.08.25                                                                                            Página 77
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 298,
        q: "El artículo 6 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), establece que el tratamiento será lícito si:",
        a: "El interesado dio su consentimiento para el tratamiento de sus datos personales con la finalidad que determine el responsable.",
        b: "El tratamiento es necesario para la ejecución de un contrato en el que el interesado es parte o para la aplicación a petición de éste de medidas precontractuales.",
        c: "El tratamiento es necesario para el cumplimiento de una obligación legal aplicable al interesado.",
        d: "El tratamiento es necesario para la satisfacción de intereses legítimos perseguidos por el responsable del tratamiento cuando sea realizado por las autoridades públicas en el ejercicio de sus funciones.",
        correct: "b"
    },
    {
        id: 299,
        q: "El artículo 7 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), establece que cuando el tratamiento se base en el consentimiento del interesado:",
        a: "Deberá ser expreso y realizarse por escrito.",
        b: "Si se realiza de forma oral, el responsable que lo reciba deberá realizar una diligencia por escrito en la que conste el alcance del consentimiento.",
        c: "Sólo se exigirá la forma escrita si se presta de forma genérica para el tratamiento de cualquier dato personal destinado a una finalidad determinada.",
        d: "El responsable deberá ser capaz de demostrar que aquel consintió el tratamiento de sus datos personales.",
        correct: "d"
    },
    {
        id: 300,
        q: "El artículo 8 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), establece en relación con la oferta directa a niños de servicios de la sociedad de la información, que el tratamiento de los datos personales de un niño se considerará lícito cuando la base de legitimación sea el consentimiento prestado por el propio niño:",
        a: "Cuando tenga como mínimo16 años.",
        b: "Cuando tenga como mínimo 14 años.",
        c: "Los Estados miembros podrán establecer por ley una edad inferior a tales fines, siempre que esta no sea inferior a 12 años.",
        d: "El consentimiento lo prestará en todo caso quien ostente la patria potestad del menor de edad.



 V.13.08.25                                                                                            Página 78
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 301,
        q: "De conformidad con el artículo 9 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), el tratamiento de datos personales que revelen el origen étnico o racial, las opiniones políticas, las convicciones religiosas o filosóficas, la afiliación sindical, y el tratamiento de datos genéticos, datos biométricos dirigidos a identificar de manera unívoca a una persona física, datos relativos a la salud o datos relativos a la vida sexual o la orientación sexual de una persona física:",
        a: "Está prohibido.",
        b: "Podrán tratarse lícitamente cuando resulte necesario para el cumplimiento de una misión realizada en interés público o en el ejercicio de poderes públicos conferidos al responsable del tratamiento.",
        c: "Sólo está prohibido el tratamiento de datos personales relativos a la vida sexual o la orientación sexual, las convicciones religiosas y el origen étnico o racial.",
        d: "Todas las respuestas son erróneas.",
        correct: "a"
    },
    {
        id: 302,
        q: "De conformidad con el artículo 10 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), el tratamiento de datos personales relativos a condenas e infracciones penales o medidas de seguridad conexas sobre la base del consentimiento prestado por los interesados",
        a: "Está prohibido.",
        b: "Sólo podrá llevarse a cabo bajo la supervisión de las autoridades públicas que establezca garantías adecuadas para los derechos y libertades de los interesados.",
        c: "Sólo podrá llevarse a cabo cuando lo autorice el Derecho de la Unión o de los Estados miembros que establezca garantías adecuadas para los derechos y libertades de los interesados.",
        d: "Las respuestas b) y c) son correctas.",
        correct: "d"
    },
    {
        id: 303,
        q: "De conformidad con el artículo 11 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), si los fines para los cuales un responsable trata datos personales no requieren o ya no requieren la identificación de un interesado por el responsable,",
        a: "Este no estará obligado a mantener, obtener o tratar información adicional con vistas a identificar al interesado con la única finalidad de cumplir el presente Reglamento.",
        b: "Durante el plazo de un año éste estará obligado a mantener, obtener o tratar información adicional con vistas a identificar al interesado con la única finalidad de cumplir el presente Reglamento.",
        c: "Mientras trate los datos personales estará obligado a mantener, obtener o tratar información adicional con vistas a identificar al interesado con la única finalidad de cumplir el presente Reglamento.",
        d: "Ninguna de las respuestas es correcta.



 V.13.08.25                                                                                               Página 79
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 304,
        q: "De conformidad con el artículo 12 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), el responsable del tratamiento facilitará al interesado información relativa a sus actuaciones sobre la base de una solicitud con arreglo a los artículos 15 a 22, y, en cualquier caso,",
        a: "En el plazo de un mes a partir de la recepción de la solicitud.",
        b: "En el plazo de quince días a partir de la recepción de la solicitud.",
        c: "En el plazo de diez días a partir de la recepción de la solicitud.",
        d: "En el plazo de dos meses a partir de la recepción de la solicitud.",
        correct: "a"
    },
    {
        id: 305,
        q: "De conformidad con el artículo 13 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), cuando se obtengan de un interesado datos personales relativos a él, el responsable del tratamiento, le facilitará toda la información indicada en el citado artículo 13:",
        a: "En el momento en que estos se obtengan.",
        b: "En el plazo máximo de 72 horas.",
        c: "Tan pronto como se haya dado de alta en el Registro de Actividades de Tratamiento (RAT).",
        d: "dentro de un plazo razonable, una vez obtenidos los datos personales, y a más tardar dentro de un mes, habida cuenta de las circunstancias específicas en las que se traten dichos datos.",
        correct: "a"
    },
    {
        id: 306,
        q: "De acuerdo con el Decreto del Presidente de la Diputación Provincial de Málaga nº: 2020/1405 por el que se regula el 'Registro de Actividades de Tratamiento' de datos personales efectuadas bajo la responsabilidad de la Diputación corresponderá la condición de responsable de los tratamientos que se lleven a cabo:",
        a: "A la persona titular de la Presidencia de la Diputación.",
        b: "A los diputados y diputadas integrantes de la Junta de Gobierno.",
        c: "A los diputados y diputadas integrantes de la Comisión de Derechos y Libertades ciudadanas.",
        d: "A las personas titulares de las Jefaturas de las Unidades Organizativas o Servicios de la Diputación.",
        correct: "d"
    },
    {
        id: 307,
        q: "De acuerdo con el Decreto del Presidente de la Diputación Provincial de Málaga nº: 2020/1405 por el que se regula el 'Registro de Actividades de Tratamiento' de datos personales efectuadas bajo la responsabilidad de la Diputación corresponderá adoptar las medidas técnicas y organizativas necesarias para velar por el cumplimiento de la legislación vigente en materia de protección de datos personales, transparencia y Esquema Nacional de Seguridad:",
        a: "A la persona titular de la Presidencia de la Diputación.",
        b: "A los diputados y diputadas integrantes de la Junta de Gobierno.",
        c: "A los diputados y diputadas integrantes de la Comisión de Derechos y Libertades ciudadanas",
        d: "A las personas titulares de las Jefaturas de las Unidades Organizativas o Servicios de la Diputación.


 V.13.08.25                                                                                              Página 80
 Temario Específico. Auxiliar Administrativo/a",
        correct: "d"
    },
    {
        id: 308,
        q: "De conformidad con el artículo 14 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), cuando los datos personales no se hayan obtenidos del interesado, el responsable del tratamiento, le facilitará toda la información indicada en el citado artículo 14:",
        a: "En el momento en que estos se obtengan.",
        b: "En el plazo máximo de 72 horas.",
        c: "Tan pronto como se haya dado de alta en el Registro de Actividades de Tratamiento (RAT).",
        d: "Dentro de un plazo razonable, una vez obtenidos los datos personales, y a más tardar dentro de un mes, habida cuenta de las circunstancias específicas en las que se traten dichos datos.",
        correct: "d"
    },
    {
        id: 309,
        q: "El artículo 3 de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales establece que podrán dirigirse al responsable o encargado del tratamiento al objeto de solicitar el acceso a los datos personales de personas fallecidas y, en su caso, su rectificación o supresión:",
        a: "Las personas vinculadas al fallecido por razones familiares o de hecho así como sus herederos.",
        b: "Los cónyuges o parejas de hecho del fallecido o, en su ausencia, aquellas personas unidas por vínculos de parentesco de hasta el tercer grado en línea recta o segundo en línea colateral.",
        c: "Exclusivamente las personas o instituciones a las que el fallecido hubiese designado expresamente para ello.",
        d: "Todas las respuestas son erróneas.",
        correct: "a"
    },
    {
        id: 310,
        q: "De acuerdo con el Decreto del Presidente de la Diputación Provincial de Málaga nº: 2020/1405 por el que se regula el 'Registro de Actividades de Tratamiento' de datos personales efectuadas bajo la responsabilidad de la Diputación, corresponderá prestar asesoramiento y supervisión en la adopción de las medidas técnicas y organizativas necesarias para velar por el cumplimiento de la legislación vigente en materia de protección de datos personales, transparencia y Esquema Nacional de Seguridad:",
        a: "Al Delegado o Delegada de Protección de Datos y a la persona que ocupe el cargo de Responsable de Seguridad.",
        b: "Al Delegado o Delegada de Protección de Datos y a la persona que ocupe el cargo de Responsable de Sistemas.",
        c: "Al Delegado o Delegada de Protección de Datos y a la persona que ocupe la Presidencia del Comité de Seguridad.",
        d: "Al Delegado o Delegada de Protección de Datos.",
        correct: "a"
    },
    {
        id: 311,
        q: "El artículo 7 de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales establece que el tratamiento de los datos personales de un menor de edad únicamente podrá fundarse en su consentimiento cuando sea mayor de",
        a: "Trece años.",
        b: "Catorce años.",
        c: "Quince años.",
        d: "Dieciséis años.
 V.13.08.25                                                                                              Página 81
 Temario Específico. Auxiliar Administrativo/a",
        correct: "b"
    },
    {
        id: 312,
        q: "El artículo 82 del Estatuto de Autonomía de Andalucía atribuye a la Comunidad Autónoma de Andalucía, en materia de protección de datos de carácter personal, la competencia:",
        a: "Exclusiva.",
        b: "Compartida.",
        c: "Ejecutiva.",
        d: "Se trata de una competencia atribuida a la Agencia Española de Protección de Datos.",
        correct: "c"
    },
    {
        id: 313,
        q: "El artículo 82 del Estatuto de Autonomía de Andalucía atribuye a la Comunidad Autónoma de Andalucía la competencia sobre protección de datos de carácter personal, gestionados por:",
        a: "Las instituciones autonómicas de Andalucía, Administración autonómica, Administraciones locales, y otras entidades de derecho público y privado dependientes de cualquiera de ellas, así como por las universidades del sistema universitario andaluz.",
        b: "Las Corporaciones de Derecho Público con sede en Andalucía, la Administración autonómica, Administraciones locales, y otras entidades de derecho público y privado dependientes de cualquiera de ellas, así como por las universidades del sistema universitario andaluz.",
        c: "Las Fundaciones de la Comunidad Autónoma de Andalucía, Administración autonómica, Administraciones locales, y otras entidades de derecho público y privado dependientes de cualquiera de ellas, así como por las universidades del sistema universitario andaluz.",
        d: "Los Consorcios del Sector Público Andaluz, Administración autonómica, Administraciones locales, y otras entidades de derecho público y privado dependientes de cualquiera de ellas, así como por las universidades del sistema universitario andaluz.",
        correct: "a"
    },
    {
        id: 314,
        q: "La disposición adicional séptima de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales establece que la identificación de los interesados en las notificaciones por medio de anuncios y publicaciones de actos administrativos, cuando sea necesaria la publicación de un acto administrativo que contuviese datos personales del afectado,",
        a: "Se identificará al mismo mediante su nombre y apellidos, añadiendo cuatro cifras numéricas aleatorias del documento nacional de identidad, número de identidad de extranjero, pasaporte o documento equivalente.",
        b: "Se identificará al afectado exclusivamente mediante el número completo de su documento nacional de identidad, número de identidad de extranjero, pasaporte o documento equivalente.",
        c: "Se identificará al mismo mediante su nombre y apellidos, añadiendo la cuatro últimas cifras numéricas del documento nacional de identidad, número de identidad de extranjero, pasaporte o documento equivalente.",
        d: "Todas las respuestas son erróneas.



 V.13.08.25                                                                                            Página 82
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
    {
        id: 315,
        q: "La disposición adicional séptima de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales establece que la notificación por medio de anuncios, particularmente en los supuestos a los que se refiere el artículo 44 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas,",
        a: "Se identificará al afectado exclusivamente mediante el número completo de su documento nacional de identidad, número de identidad de extranjero, pasaporte o documento equivalente.",
        b: "Se identificará al mismo mediante su nombre y apellidos, añadiendo cuatro cifras numéricas aleatorias del documento nacional de identidad, número de identidad de extranjero, pasaporte o documento equivalente.",
        c: "Se identificará al mismo mediante su nombre y apellidos, añadiendo la cuatro últimas cifras numéricas del documento nacional de identidad, número de identidad de extranjero, pasaporte o documento equivalente.",
        d: "Todas las respuestas son erróneas.



 V.13.08.25                                                                                            Página 83
 Temario Específico. Auxiliar Administrativo/a",
        correct: "a"
    },
];

module.exports = db;
