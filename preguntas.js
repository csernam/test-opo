const db = [
    {
        id: 1,
        q: "¿En qué municipios el Pleno celebrará sesión ordinaria como mínimo cada mes?",
        a: "En Ayuntamientos de municipios de más de 50.000 habitantes y en las Diputaciones Provinciales.",
        b: "En Ayuntamientos de municipios de una población entre 5.001 y 20.000.",
        c: "En Municipios de hasta 5.000 habitantes.",
        d: "En Ayuntamientos de municipios de más de 20.000 habitantes y en las Diputaciones Provinciales.",
        correct: "d"
    },
    {
        id: 2,
        q: "Las sesiones extraordinarias del Pleno se convocan por el Alcalde o Presidente:",
        a: "A iniciativa propia o a solicitud de la cuarta parte, al menos, del número legal de miembros de la Corporación.",
        b: "A solicitud de cualquier Concejal.",
        c: "A iniciativa propia o a solicitud de la cuarta parte, al menos, del número legal de miembros de la Corporación.",
        d: "Solo a iniciativa del Alcalde.",
        correct: "c"
    },
    {
        id: 3,
        q: "¿Cuál es el quórum de asistencia para la válida constitución del Pleno?",
        a: "Un tercio del número legal de miembros.",
        b: "Un tercio del número legal de miembros, que nunca podrá ser inferior a tres, y se requiere la asistencia del Presidente y del Secretario o de quienes legalmente les sustituyan.",
        c: "La mayoría absoluta de los miembros.",
        d: "La presencia del Alcalde exclusivamente.",
        correct: "b"
    },
    {
        id: 4,
        q: "Como regla general, los acuerdos de las Corporaciones Locales se adoptan por:",
        a: "Mayoría simple de los miembros presentes.",
        b: "Mayoría absoluta.",
        c: "Unanimidad.",
        d: "Mayoría de dos tercios.",
        correct: "a"
    },
    {
        id: 5,
        q: "En el caso de que en una votación en el Pleno se produzca un empate, se efectuará una nueva votación y si persistiera el empate, decidirá:",
        a: "El voto de calidad del Presidente.",
        b: "El voto del Secretario.",
        c: "Se pospone el asunto para la siguiente sesión.",
        d: "Se decide por sorteo.",
        correct: "a"
    },
    {
        id: 6,
        q: "Según el artículo 46 de la Ley 7/1985, en ausencia del Presidente o de quién legalmente haya de sustituirle, el Pleno quedará válidamente constituido:",
        a: "Siempre que concurra la mitad del número legal de miembros del mismo, y será presidido por el miembro de la corporación de mayor edad entre los presentes.",
        b: "Siempre que concurra un tercio del número legal de miembros del mismo.",
        c: "El Pleno no puede quedar válidamente constituido sin la presencia del Presidente o de quién legalmente le sustituya.",
        d: "Siempre que concurra un tercio del número legal de miembros del mismo, y será presidido por el miembro de la Corporación de mayor antigüedad.",
        correct: "c" // Verificado en tabla de soluciones 
    },
    {
        id: 7,
        q: "Según el artículo 77 del ROF, existen tres tipos de sesiones del Pleno que son:",
        a: "Ordinarias, especiales y extraordinarias de carácter urgente.",
        b: "Ordinarias, urgentes y extraordinarias.",
        c: "Ordinarias, extraordinarias y extraordinarias de carácter urgente.",
        d: "Ordinarias, extraordinarias y de carácter urgente.",
        correct: "c"
    },
    {
        id: 8,
        q: "¿Qué condición impone el ROF respecto a las sesiones extraordinarias urgentes?",
        a: "No existen ese tipo de sesiones.",
        b: "Deben ser convocadas por el Alcalde y por los miembros de la Corporación.",
        c: "Tienen que celebrarse al día siguiente de su convocatoria.",
        d: "Debe incluirse como primer punto del orden del día el pronunciamiento del Pleno sobre la urgencia.",
        correct: "d"
    },
    {
        id: 9,
        q: "Según el artículo 78 del ROF, las sesiones ordinarias del Pleno son aquellas que:",
        a: "Se convocan por el Presidente.",
        b: "Sólo tratan asuntos, pero no los votan.",
        c: "Tienen una periodicidad establecida de antemano.",
        d: "Se convocan a solicitud de los concejales.",
        correct: "c"
    },
    {
        id: 10,
        q: "Sobre el desarrollo de las sesiones (Art. 87 ROF), ¿qué se establece?",
        a: "Toda sesión habrá de respetar el principio de unidad de acto y se procurará que termine en el mismo día de su comienzo.",
        b: "El Presidente podrá denegar interrupciones a su prudente arbitrio.",
        c: "Si la sesión terminase sin resolver todos los asuntos, no se podrá levantar hasta fijar la próxima fecha.",
        d: "El Presidente podrá acordar interrupciones únicamente para descanso.",
        correct: "a"
    },
    {
        id: 11,
        q: "El plazo para convocar sesión extraordinaria solicitada es:",
        a: "Dentro de los 5 días siguientes a la petición.",
        b: "Dentro de los 10 días siguientes a la petición.",
        c: "Dentro de los 30 días siguientes a la petición.",
        d: "Dentro de los 4 días siguientes a la petición.",
        correct: "d"
    },
    {
        id: 12,
        q: "¿Quiénes tienen derecho a obtener copias y certificaciones de los acuerdos locales?",
        a: "Todos los ciudadanos.",
        b: "Todos los españoles.",
        c: "Todos los que tengan la condición de vecino.",
        d: "Todos los residentes en territorio español.",
        correct: "a"
    },
    {
        id: 13,
        q: "El Pleno celebrará sesión ordinaria cada tres meses (Art. 46 Ley 7/1985) en:",
        a: "Municipios de más de 20.000 habitantes.",
        b: "Municipios de entre 5.001 y 20.000 habitantes.",
        c: "Municipios de hasta 250 habitantes.",
        d: "Municipios de hasta 5.000 habitantes.",
        correct: "d"
    },
    {
        id: 14,
        q: "¿Para qué acuerdo NO se requiere mayoría absoluta (Art. 47 Ley 7/1985)?",
        a: "Cesión gratuita de bienes a otras Administraciones.",
        b: "Enajenación de bienes cuando exceda del 30% de los recursos ordinarios.",
        c: "Alteración de la calificación jurídica de bienes demaniales.",
        d: "Cesión por cualquier título del aprovechamiento de bienes comunales.",
        correct: "d"
    },
    {
        id: 15,
        q: "El Pleno celebrará sesión ordinaria cada dos meses en:",
        a: "Municipios de entre 10.001 y 50.000 habitantes.",
        b: "Municipios de hasta 5.000 habitantes.",
        c: "Municipios de entre 5.001 y 20.000 habitantes.",
        d: "Municipios de más de 20.000 habitantes.",
        correct: "c"
    },
    {
        id: 16,
        q: "Cuando se produce un empate en una votación:",
        a: "Se repite la votación, y si persiste, decide el voto de calidad del Presidente.",
        b: "Se vuelve a votar al final de la sesión.",
        c: "Se deja el asunto sobre la mesa.",
        d: "Se vuelve a votar y si persiste se realiza una última votación.",
        correct: "a"
    },
    {
        id: 17,
        q: "¿Cómo se lleva a cabo el control y fiscalización del Pleno sobre otros órganos?",
        a: "A través del Requerimiento de presencia e información.",
        b: "Sólo a través de la Moción de censura.",
        c: "El Reglamento Orgánico Municipal podrá establecer otros medios.",
        d: "El Reglamento Orgánico Municipal no podrá establecer otros medios.",
        correct: "c"
    },
    {
        id: 18,
        q: "¿Cuál es el sistema normal de votación en las sesiones del Pleno?",
        a: "Indistintamente ordinaria y nominal.",
        b: "Nominal por solicitud de grupo municipal.",
        c: "La votación ordinaria.",
        d: "La votación secreta.",
        correct: "c"
    },
    {
        id: 19,
        q: "Definición: 'Propuesta de modificación de un dictamen presentada por escrito antes de la deliberación':",
        a: "Ruego.",
        b: "Moción.",
        c: "Enmienda.",
        d: "Dictamen.",
        correct: "c"
    },
    {
        id: 20,
        q: "Existe mayoría simple en un órgano colegiado local cuando:",
        a: "Los votos afirmativos son más que los negativos.",
        b: "Los votos afirmativos superan a los negativos.",
        c: "Los votos afirmativos son la mitad más uno.",
        d: "Los votos afirmativos son más de la mitad del número legal de miembros.",
        correct: "a"
    },
    {
        id: 21,
        q: "¿Cuándo tendrán carácter secreto las sesiones del Pleno?",
        a: "Nunca, siempre son públicas.",
        b: "Cuando se acuerde por mayoría absoluta.",
        c: "Asuntos del Art. 18.1 CE cuando se acuerde por mayoría absoluta.",
        d: "Asuntos del Art. 18.1 CE cuando se acuerde por unanimidad.",
        correct: "c"
    },
    {
        id: 22,
        q: "¿Cuáles se consideran sesiones ordinarias del Pleno?",
        a: "Las convocadas por iniciativa propia del Alcalde.",
        b: "Aquellas cuya periodicidad está preestablecida.",
        c: "Aquellas para tratar asuntos urgentes.",
        d: "Aquellas con punto sobre el motivo de la sesión.",
        correct: "b"
    },
    {
        id: 23,
        q: "Entre convocatoria y celebración de Junta de Gobierno no podrán transcurrir:",
        a: "Menos de dos días hábiles.",
        b: "Menos de 24 horas.",
        c: "Más de 24 horas.",
        d: "Más de diez días.",
        correct: "b"
    },
    {
        id: 24,
        q: "La Junta de Gobierno Local celebrará sesión constitutiva:",
        a: "Dentro de los diez días siguientes a la designación de sus miembros.",
        b: "Dentro de los veinte días siguientes.",
        c: "Dentro de los quince días siguientes.",
        d: "Dentro de los cinco días siguientes.",
        correct: "a"
    },
    {
        id: 25,
        q: "La ejecución del acto impugnado se entenderá suspendida (Art. 117.3 Ley 39/2015) si en un mes:",
        a: "No se ha dictado y notificado resolución expresa sobre la suspensión.",
        b: "No se ha dictado resolución en 60 días.",
        c: "No se ha dictado resolución en 90 días.",
        d: "No se ha dictado resolución en 15 días.",
        correct: "a"
    },
    {
        id: 26,
        q: "Sobre la convalidación de actos, NO es correcto:",
        a: "La Administración podrá convalidar actos anulables.",
        b: "El efecto es desde su fecha, salvo retroactividad.",
        c: "Si falta autorización, puede convalidarse por el órgano competente.",
        d: "Si es incompetencia no determinante de nulidad, la convalidación puede hacerla un órgano no superior.",
        correct: "d"
    },
    {
        id: 27,
        q: "Sobre la declaración de lesividad (Art. 107 Ley 39/2015):",
        a: "Requiere aprobación del Consejo de Ministros.",
        b: "Exige autorización de Hacienda.",
        c: "Requiere dictamen favorable del Consejo de Estado.",
        d: "Exigirá la previa audiencia de cuantos aparezcan como interesados.",
        correct: "d"
    },
    {
        id: 28,
        q: "¿Qué actos serán motivados con referencia a hechos y fundamentos de derecho?",
        a: "Los que amplíen derechos.",
        b: "Los que resuelvan revisión de oficio, recursos y los que declaren inadmisión.",
        c: "Los que continúen con el criterio precedente.",
        d: "Los que acepten pruebas propuestas.",
        correct: "b"
    },
    {
        id: 29,
        q: "Según la Ley 39/2015, el contenido de los actos se ajustará:",
        a: "Al ordenamiento jurídico y será adecuado a los fines de aquellos.",
        b: "Exclusivamente a la Ley 39/2015.",
        c: "Al ordenamiento y adecuado a los fines de la Ley 39/2015.",
        d: "Exclusivamente a los fines de la ley.",
        correct: "a"
    },
    {
        id: 30,
        q: "Si un órgano ejerce competencia de forma verbal y son resoluciones:",
        a: "El titular debe autorizar una relación de las dictadas verbalmente.",
        b: "Se debe autorizar relación de notificaciones.",
        c: "Se debe autorizar relación de las dictadas por escrito.",
        d: "No es necesaria relación alguna.",
        correct: "a"
    },
    {
        id: 31,
        q: "Si una Administración cree que un acto de otra es ilegal, podrá interponer:",
        a: "Recurso extraordinario de revisión.",
        b: "Recurso de alzada.",
        c: "Recurso contencioso-administrativo.",
        d: "Recurso potestativo de reposición.",
        correct: "c"
    },
    {
        id: 32,
        q: "Respecto a la ejecutividad (Art. 38 Ley 39/2015):",
        a: "Los actos sujetos al Derecho Administrativo serán ejecutivos con arreglo a esta Ley.",
        b: "Con arreglo a la Ley de la Jurisdicción Contenciosa.",
        c: "Con arreglo a la Constitución.",
        d: "Con arreglo a la Ley de Régimen Jurídico del Sector Público.",
        correct: "a"
    },
    {
        id: 33,
        q: "Ponen fin a la vía administrativa (Art. 114 Ley 39/2015):",
        a: "Acuerdos y contratos financieros finalizadores.",
        b: "Demás resoluciones cuando una disposición así lo establezca.",
        c: "La resolución de responsabilidad patrimonial.",
        d: "Pactos y convenios si lo dice un reglamento.",
        correct: "b"
    },
    {
        id: 34,
        q: "Excepcionalmente, podrá otorgarse eficacia retroactiva a los actos:",
        a: "Si son favorables y los hechos no existían en la fecha de retroacción.",
        b: "Si son desfavorables y los hechos existían.",
        c: "Si son favorables y los hechos ya existían en la fecha de retroacción.",
        d: "Si son desfavorables y los hechos no existían.",
        correct: "c"
    },
    {
        id: 35,
        q: "Contra actos de trámite que deciden el fondo del asunto cabe:",
        a: "Recursos de alzada y reposición.",
        b: "Recurso de revisión.",
        c: "Recurso ordinario.",
        d: "Recurso extraordinario.",
        correct: "a"
    },
    {
        id: 36,
        q: "¿Qué debe ser adecuado a los fines de los actos administrativos?",
        a: "La tramitación.",
        b: "La motivación.",
        c: "El fundamento.",
        d: "El contenido.",
        correct: "d"
    },
    {
        id: 37,
        q: "Los actos administrativos se presumen válidos y producen efectos desde:",
        a: "La fecha en que se dicten, en cualquier caso.",
        b: "La fecha en que se dicten, salvo que se disponga otra cosa.",
        c: "El día siguiente a que se dicten.",
        d: "El día siguiente, salvo que se disponga otra cosa.",
        correct: "b"
    },
    {
        id: 38,
        q: "¿En qué procedimientos la motivación se rige por sus normas de convocatoria?",
        a: "En todos los actos de procedimientos selectivos.",
        b: "En los actos que pongan fin a procedimientos selectivos y de concurrencia competitiva.",
        c: "En todos los actos que pongan fin a un procedimiento.",
        d: "En los actos que el órgano estime convenientes.",
        correct: "b"
    },
    {
        id: 39,
        q: "Sobre la motivación en procedimientos selectivos:",
        a: "No precisarán motivación.",
        b: "Se hará conforme a las normas de convocatoria, debiendo quedar acreditados los fundamentos.",
        c: "Se hará conforme a la Ley 39/2015.",
        d: "Se hará conforme a las normas de convocatoria sin necesidad de acreditar fundamentos.",
        correct: "b"
    },
    {
        id: 40,
        q: "Sobre la inderogabilidad singular (Art. 37 Ley 39/2015):",
        a: "Resoluciones generales no pueden vulnerar lo particular.",
        b: "Resoluciones particulares no pueden vulnerar lo general, aunque vengan de órgano superior.",
        c: "Resoluciones generales no pueden vulnerar lo particular, aunque vengan de superior.",
        d: "Resoluciones particulares no pueden vulnerar lo general, salvo que vengan de superior.",
        correct: "b"
    },
    {
        id: 41,
        q: "En el recurso de alzada, el plazo máximo para resolver y notificar es:",
        a: "Tres meses.",
        b: "Dos meses.",
        c: "Un mes.",
        d: "Quince días.",
        correct: "a"
    },
    {
        id: 42,
        q: "La revisión de actos nulos puede tener lugar:",
        a: "Sólo a instancia del interesado.",
        b: "En los cuatro años siguientes.",
        c: "En cualquier momento.",
        d: "Sólo por propia iniciativa.",
        correct: "c"
    },
    {
        id: 43,
        q: "Las Administraciones declararán de oficio la nulidad de actos (Art. 47.1):",
        a: "Antes del trámite de audiencia por iniciativa propia.",
        b: "En cualquier momento a solicitud de interesado.",
        c: "Antes del trámite de audiencia por iniciativa propia o solicitud.",
        d: "En cualquier momento, de oficio o a solicitud, previo dictamen favorable del órgano consultivo.",
        correct: "d"
    },
    {
        id: 44,
        q: "El recurso de revisión por error de hecho se interpondrá en el plazo de:",
        a: "1 mes.",
        b: "2 meses.",
        c: "3 meses.",
        d: "4 años siguientes a la notificación.",
        correct: "d"
    },
    {
        id: 45,
        q: "Si un acto deba notificarse a una pluralidad de personas (Art. 45 Ley 39/2015):",
        a: "Se realizará siempre mediante notificación individual.",
        b: "La publicación sustituirá a la notificación.",
        c: "No es necesaria ni notificación ni publicación.",
        d: "Se publicará solo si lo solicita el interesado.",
        correct: "b"
    },
    {
        id: 46,
        q: "El plazo para interponer recurso de alzada contra acto expreso es de:",
        a: "Diez días.",
        b: "Quince días.",
        c: "Un mes.",
        d: "Dos meses.",
        correct: "c"
    },
    {
        id: 47,
        q: "El plazo para interponer recurso potestativo de reposición contra acto expreso es:",
        a: "Quince días.",
        b: "Un mes.",
        c: "Dos meses.",
        d: "Tres meses.",
        correct: "b"
    },
    {
        id: 48,
        q: "El plazo máximo para dictar y notificar la resolución del recurso de reposición es:",
        a: "Quince días.",
        b: "Un mes.",
        c: "Dos meses.",
        d: "Tres meses.",
        correct: "b"
    },
    {
        id: 49,
        q: "Contra la resolución de un recurso de alzada:",
        a: "Cabe interponer nuevo recurso de alzada.",
        b: "Cabe recurso de reposición.",
        c: "No cabe ningún otro recurso administrativo, salvo el extraordinario de revisión.",
        d: "Solo cabe recurso ante el Defensor del Pueblo.",
        correct: "c"
    },
    {
        id: 50,
        q: "¿Qué recurso cabe contra las disposiciones administrativas de carácter general?",
        a: "Recurso de alzada.",
        b: "Recurso de reposición.",
        c: "No cabe recurso en vía administrativa.",
        d: "Recurso extraordinario de revisión.",
        correct: "c"
    },
    {
        id: 51,
        q: "Si al interponer un recurso de alzada se alega la nulidad de pleno derecho:",
        a: "El órgano puede suspender la ejecución del acto.",
        b: "El acto queda suspendido automáticamente.",
        c: "No puede suspenderse en ningún caso.",
        d: "Se anula el acto de forma inmediata.",
        correct: "a"
    },
    {
        id: 52,
        q: "El recurso extraordinario de revisión se interpondrá ante:",
        a: "El órgano superior jerárquico.",
        b: "El órgano que dictó el acto objeto del recurso.",
        c: "El Tribunal Supremo.",
        d: "El Juzgado de lo Contencioso.",
        correct: "b"
    },
    {
        id: 53,
        q: "¿En qué plazo se interpone el recurso de revisión si aparecieron documentos de valor esencial?",
        a: "Un mes.",
        b: "Dos meses.",
        c: "Tres meses desde el conocimiento de los documentos.",
        d: "Seis meses.",
        correct: "c"
    },
    {
        id: 54,
        q: "La Administración podrá rectificar errores materiales, de hecho o aritméticos:",
        a: "En el plazo de un año.",
        b: "En el plazo de cuatro años.",
        c: "En cualquier momento.",
        d: "Solo si lo autoriza un Juez.",
        correct: "c"
    },
    {
        id: 55,
        q: "La declaración de nulidad de los actos anulables (lesividad) requiere:",
        a: "Que no hayan pasado más de cuatro años desde que se dictó el acto.",
        b: "Que hayan pasado al menos cinco años.",
        c: "No tiene límite de plazo.",
        d: "Que el acto sea favorable para la Administración.",
        correct: "a"
    },
    {
        id: 56,
        q: "En el procedimiento de revisión de oficio, el transcurso de tres meses sin resolución:",
        a: "Produce la caducidad si se inició de oficio.",
        b: "Produce el silencio positivo.",
        c: "No tiene efectos jurídicos.",
        d: "Se entiende estimada la revisión.",
        correct: "a"
    },
    {
        id: 57,
        q: "El interesado podrá entender desestimado su recurso de revisión si pasan:",
        a: "Un mes sin resolución.",
        b: "Dos meses.",
        c: "Tres meses desde su interposición.",
        d: "Seis meses.",
        correct: "c"
    },
    {
        id: 58,
        q: "Los actos que incurran en cualquier infracción del ordenamiento jurídico son:",
        a: "Nulos de pleno derecho.",
        b: "Anulables.",
        c: "Irregulares pero válidos.",
        d: "Inexistentes.",
        correct: "b"
    },
    {
        id: 59,
        q: "La nulidad de pleno derecho de un acto administrativo:",
        a: "Solo puede ser declarada por el Alcalde.",
        b: "Afecta a actos que vulneren la Constitución.",
        c: "Siempre es subsanable.",
        d: "No impide que el acto produzca efectos normales.",
        correct: "b"
    },
    {
        id: 60,
        q: "El defecto de forma solo determinará la anulabilidad cuando:",
        a: "El acto sea dictado por órgano incompetente.",
        b: "Carezca de los requisitos formales indispensables para alcanzar su fin o produzca indefensión.",
        c: "No se notifique en el plazo de diez días.",
        d: "Se dicte verbalmente.",
        correct: "b"
    },
    {
        id: 61,
        q: "La realización de actuaciones administrativas fuera del tiempo establecido:",
        a: "Implica siempre la nulidad del acto.",
        b: "Solo implicará la anulabilidad cuando así lo imponga la naturaleza del término o plazo.",
        c: "No tiene ninguna importancia.",
        d: "Supone la caducidad inmediata del procedimiento.",
        correct: "b"
    },
    {
        id: 62,
        q: "En la resolución de un recurso, la Administración:",
        a: "Solo puede decidir sobre lo solicitado por el interesado.",
        b: "Decidirá cuantas cuestiones plantee el expediente, hayan sido o no alegadas.",
        c: "No puede agravar la situación inicial del recurrente.",
        d: "Las respuestas b y c son correctas.",
        correct: "d"
    },
    {
        id: 63,
        q: "Son actos nulos de pleno derecho los que:",
        a: "Sean dictados por órgano manifiestamente incompetente por razón de la materia o del territorio.",
        b: "Tengan un contenido imposible.",
        c: "Sean constitutivos de infracción penal o se dicten como consecuencia de esta.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 64,
        q: "¿Qué actos de las Entidades Locales ponen fin a la vía administrativa?",
        a: "Los del Pleno, los Alcaldes o Presidentes y las Juntas de Gobierno.",
        b: "Solo los del Pleno.",
        c: "Solo los de los Alcaldes.",
        d: "Ninguno, siempre hay que ir al Juzgado.",
        correct: "a"
    },
    {
        id: 65,
        q: "El plazo para notificar una resolución administrativa es de:",
        a: "Cinco días.",
        b: "Diez días a partir de la fecha en que el acto haya sido dictado.",
        c: "Quince días.",
        d: "Un mes.",
        correct: "b"
    },
    {
        id: 66,
        q: "La notificación debe contener:",
        a: "El texto íntegro del acto.",
        b: "Si es definitivo o no en vía administrativa.",
        c: "Los recursos que procedan, órgano y plazo.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 67,
        q: "Si la notificación es defectuosa pero el interesado realiza actuaciones que suponen el conocimiento del contenido:",
        a: "Sigue siendo nula.",
        b: "Surtirá efecto a partir de la fecha de tales actuaciones.",
        c: "La Administración debe repetirla obligatoriamente.",
        d: "Se sanciona al funcionario responsable.",
        correct: "b"
    },
    {
        id: 68,
        q: "En las notificaciones en papel, si nadie se hace cargo en el domicilio:",
        a: "Se deja en el buzón.",
        b: "Se hace constar en el expediente y se repite una sola vez en hora distinta dentro de los tres días siguientes.",
        c: "Se publica directamente en el BOE.",
        d: "Se devuelve al remitente y se archiva.",
        correct: "b"
    },
    {
        id: 69,
        q: "La publicación de un acto en el diario oficial correspondiente:",
        a: "Es opcional siempre.",
        b: "Sustituye a la notificación cuando el acto tenga por destinatario a una pluralidad indeterminada de personas.",
        c: "Solo se hace si el interesado no tiene domicilio conocido.",
        d: "Es gratuita para las empresas.",
        correct: "b"
    },
    {
        id: 70,
        q: "Son interesados en el procedimiento administrativo:",
        a: "Quienes lo promuevan como titulares de derechos o intereses legítimos.",
        b: "Quienes tengan derechos que puedan resultar afectados por la decisión.",
        c: "Aquellos cuyos intereses legítimos puedan resultar afectados y se personen en el procedimiento.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 71,
        q: "La capacidad de obrar ante las Administraciones Públicas la tienen:",
        a: "Solo las personas físicas mayores de edad.",
        b: "Las personas físicas o jurídicas que la tengan según las normas civiles.",
        c: "Solo los españoles.",
        d: "Solo quienes tengan DNI electrónico.",
        correct: "b"
    },
    {
        id: 72,
        q: "Los menores de edad tienen capacidad de obrar para el ejercicio de sus derechos:",
        a: "Nunca, siempre necesitan tutor.",
        b: "Cuando el ordenamiento jurídico lo permita sin asistencia de la persona que ejerza la patria potestad o tutela.",
        c: "Solo a partir de los 16 años.",
        d: "Solo para pedir becas.",
        correct: "b"
    },
    {
        id: 73,
        q: "Para interponer recursos, desistir de acciones o renunciar a derechos en nombre de otro:",
        a: "Basta con decir que se es representante.",
        b: "Debe acreditarse la representación.",
        c: "Solo puede hacerlo un abogado o procurador.",
        d: "No se permite la representación en esos casos.",
        correct: "b"
    },
    {
        id: 74,
        q: "La falta o insuficiente acreditación de la representación:",
        a: "Impide tener por presentado el escrito.",
        b: "No impide que se tenga por realizado el acto siempre que se aporte o subsane en el plazo de diez días.",
        c: "Anula todo lo actuado anteriormente.",
        d: "Obliga a empezar el procedimiento de nuevo.",
        correct: "b"
    },
    {
        id: 75,
        q: "Si en un escrito figuran varios interesados y no se designa representante:",
        a: "Las actuaciones se entenderán con el que figure en primer término.",
        b: "Se enviará notificación a todos ellos individualmente.",
        c: "El escrito se considera nulo.",
        d: "Se elige al azar.",
        correct: "a"
    },
    {
        id: 76,
        q: "La Administración Pública está obligada a dictar resolución expresa:",
        a: "Solo en los procedimientos iniciados a solicitud de interesado.",
        b: "En todos los procedimientos y a notificarla cualquiera que sea su forma de iniciación.",
        c: "Solo si hay presupuesto.",
        d: "Nunca en los procedimientos de oficio.",
        correct: "b"
    },
    {
        id: 77,
        q: "El plazo máximo para resolver y notificar, si no lo fija la norma reguladora, será de:",
        a: "Un mes.",
        b: "Tres meses.",
        c: "Seis meses.",
        d: "Un año.",
        correct: "b"
    },
    {
        id: 78,
        q: "Cuando las normas no fijen un plazo máximo, este no podrá exceder de:",
        a: "Tres meses.",
        b: "Seis meses salvo que una Ley o norma de la UE establezca uno mayor.",
        c: "Nueve meses.",
        d: "Cuatro meses.",
        correct: "b"
    },
    {
        id: 79,
        q: "En los procedimientos iniciados a solicitud de interesado, el vencimiento del plazo máximo sin notificación:",
        a: "Permite entenderla siempre estimada.",
        b: "Permite entenderla estimada, salvo que una norma con rango de Ley establezca lo contrario.",
        c: "Supone la caducidad.",
        d: "Obliga al funcionario a dimitir.",
        correct: "b"
    },
    {
        id: 80,
        q: "El silencio administrativo tiene carácter desestimatorio en:",
        a: "Procedimientos de ejercicio del derecho de petición.",
        b: "Aquellos cuya estimación transfiera al solicitante facultades sobre el dominio público.",
        c: "Procedimientos de impugnación de actos y disposiciones.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 81,
        q: "La estimación por silencio administrativo tiene a todos los efectos la consideración de:",
        a: "Acto administrativo finalizador del procedimiento.",
        b: "Un simple trámite.",
        c: "Acto anulable.",
        d: "Certificado de buena conducta.",
        correct: "a"
    },
    {
        id: 82,
        q: "La desestimación por silencio administrativo tiene los solos efectos de:",
        a: "Permitir a los interesados la interposición del recurso que proceda.",
        b: "Finalizar el procedimiento definitivamente.",
        c: "Aceptar la culpabilidad de la Administración.",
        d: "No tiene ningún efecto.",
        correct: "a"
    },
    {
        id: 83,
        q: "En los procedimientos de oficio de los que pudiera derivarse el reconocimiento de derechos:",
        a: "El silencio es positivo.",
        b: "El silencio es negativo.",
        c: "Los interesados podrán entender desestimadas sus pretensiones por silencio.",
        d: "No existe el silencio.",
        correct: "c"
    },
    {
        id: 84,
        q: "En procedimientos de los que se sigan efectos desfavorables o de gravamen (de oficio):",
        a: "El silencio es positivo.",
        b: "Se producirá la caducidad.",
        c: "El procedimiento continúa indefinidamente.",
        d: "Se archiva por falta de interés.",
        correct: "b"
    },
    {
        id: 85,
        q: "La obligación de resolver de la Administración se mantiene:",
        a: "Solo mientras no pase el plazo.",
        b: "Aunque haya vencido el plazo y aunque haya operado el silencio.",
        c: "Solo si el interesado lo vuelve a pedir.",
        d: "Hasta que el Alcalde diga lo contrario.",
        correct: "a"
    },
{
        id: 86,
        q: "La recusación de un funcionario (Art. 24 LRJSP):",
        a: "Debe plantearse por escrito una vez dictada la resolución.",
        b: "Podrá promoverse por los interesados en cualquier momento de la tramitación del procedimiento.",
        c: "Solo puede plantearse por otros funcionarios.",
        d: "No existe la figura de la recusación para funcionarios, solo para jueces.",
        correct: "b"
    },
    {
        id: 87,
        q: "¿Cuál de las siguientes NO es una causa de abstención (Art. 23 LRJSP)?",
        a: "Tener interés personal en el asunto.",
        b: "Tener una cuenta bancaria en la misma entidad que el interesado.",
        c: "Tener parentesco de consanguinidad dentro del cuarto grado con el interesado.",
        d: "Tener amistad íntima con alguna de las personas interesadas.",
        correct: "b"
    },
    {
        id: 88,
        q: "La abstención se comunicará al superior jerárquico, quien resolverá:",
        a: "En el plazo de diez días.",
        b: "Lo antes posible.",
        c: "En el plazo de quince días.",
        d: "No es necesaria la comunicación.",
        correct: "b"
    },
    {
        id: 89,
        q: "En los términos y plazos administrativos, si no se expresa otra cosa, se entiende que estos son:",
        a: "Días naturales.",
        b: "Días laborables según el convenio colectivo.",
        c: "Días hábiles.",
        d: "Horas.",
        correct: "c"
    },
    {
        id: 90,
        q: "Se consideran días inhábiles a efectos de cómputo de plazos:",
        a: "Solo los domingos.",
        b: "Los sábados y domingos exclusivamente.",
        c: "Sábados, domingos y los declarados festivos.",
        d: "Solo los festivos nacionales.",
        correct: "c"
    },
    {
        id: 91,
        q: "Si el plazo se fija en meses o años, estos se computarán:",
        a: "De 30 en 30 días.",
        b: "A partir del día siguiente a la notificación o publicación.",
        c: "De fecha a fecha.",
        d: "Las respuestas b y c son correctas.",
        correct: "d"
    },
    {
        id: 92,
        q: "Si en el mes de vencimiento de un plazo de fecha a fecha no hubiera día equivalente:",
        a: "El plazo expira el último día del mes.",
        b: "Se añaden los días que falten del mes siguiente.",
        c: "El plazo se considera nulo.",
        d: "Se cuenta hasta el primer día del mes siguiente.",
        correct: "a"
    },
    {
        id: 93,
        q: "Cuando un día fuese hábil en el municipio del interesado e inhábil en la sede del órgano (o viceversa):",
        a: "Se considera siempre hábil.",
        b: "Se considerará inhábil en todo caso.",
        c: "Se considera hábil solo si es festivo nacional.",
        d: "El interesado elige qué día le conviene más.",
        correct: "b"
    },
    {
        id: 94,
        q: "La Administración podrá conceder una ampliación de los plazos establecidos:",
        a: "Solo si lo pide un juez.",
        b: "De oficio o a petición de los interesados, si las circunstancias lo aconsejan y no se perjudican derechos de terceros.",
        c: "Nunca, los plazos son improrrogables.",
        d: "Solo si el funcionario está de vacaciones.",
        correct: "b"
    },
    {
        id: 95,
        q: "La decisión sobre la ampliación de plazos:",
        a: "Es recurrible en alzada.",
        b: "Es recurrible en reposición.",
        c: "No es susceptible de recurso, sin perjuicio del que proceda contra la resolución que ponga fin al procedimiento.",
        d: "Debe publicarse en el BOE.",
        correct: "c"
    },
    {
        id: 96,
        q: "En el procedimiento de urgencia, los plazos previstos para el procedimiento ordinario:",
        a: "Se mantienen igual.",
        b: "Se reducen a la mitad.",
        c: "Se reducen a un tercio.",
        d: "Se eliminan.",
        correct: "b"
    },
    {
        id: 97,
        q: "Los documentos que los interesados dirijan a los órganos de las Administraciones Públicas podrán presentarse:",
        a: "En el registro electrónico de la Administración u Organismo al que se dirijan.",
        b: "En las oficinas de Correos.",
        c: "En las representaciones diplomáticas u oficinas consulares de España en el extranjero.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 98,
        q: "¿Quiénes están obligados a relacionarse a través de medios electrónicos con las Administraciones Públicas?",
        a: "Las personas jurídicas.",
        b: "Las entidades sin personalidad jurídica.",
        c: "Quienes ejerzan una actividad profesional que requiera colegiación obligatoria.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 99,
        q: "Los interesados tienen derecho a no aportar documentos que:",
        a: "Sean muy voluminosos.",
        b: "Ya se encuentren en poder de la Administración actuante o hayan sido elaborados por cualquier otra Administración.",
        c: "Estén en un idioma extranjero.",
        d: "Sean privados.",
        correct: "b"
    },
    {
        id: 100,
        q: "Si una solicitud de iniciación no reúne los requisitos exigidos:",
        a: "Se archiva directamente.",
        b: "Se requiere al interesado para que en un plazo de diez días subsane la falta o acompañe los documentos preceptivos.",
        c: "Se le sanciona por presentar mal el documento.",
        d: "El funcionario debe corregirla de oficio.",
        correct: "b"
    },
    {
        id: 101,
        q: "El plazo de subsanación de diez días podrá ser ampliado hasta cinco días:",
        a: "A petición del interesado o iniciativa del órgano, cuando la aportación de los documentos requeridos presente dificultades especiales.",
        b: "Si el interesado vive fuera de España.",
        c: "Solo en procedimientos sancionadores.",
        d: "Nunca se puede ampliar.",
        correct: "a"
    },
    {
        id: 102,
        q: "Los interesados podrán, en cualquier momento del procedimiento anterior al trámite de audiencia:",
        a: "Pedir que se dicte ya la sentencia.",
        b: "Aducir alegaciones y aportar documentos u otros elementos de juicio.",
        c: "Cambiar el objeto del procedimiento.",
        d: "Exigir la dimisión del instructor.",
        correct: "b"
    },
    {
        id: 103,
        q: "Los hechos relevantes para la decisión de un procedimiento podrán acreditarse:",
        a: "Solo mediante documentos públicos.",
        b: "Por cualquier medio de prueba admisible en Derecho.",
        c: "Solo mediante testigos.",
        d: "Solo si el instructor los ha visto personalmente.",
        correct: "b"
    },
    {
        id: 104,
        q: "El periodo de prueba en un procedimiento administrativo será:",
        a: "De 10 a 30 días.",
        b: "De 5 a 15 días.",
        c: "Fijado por el interesado.",
        d: "De un mes mínimo.",
        correct: "a"
    },
    {
        id: 105,
        q: "Los informes serán, por regla general:",
        a: "Preceptivos y vinculantes.",
        b: "Facultativos y no vinculantes.",
        c: "Preceptivos y no vinculantes.",
        d: "Facultativos y vinculantes.",
        correct: "b"
    },
    {
        id: 106,
        q: "El plazo para emitir un informe, si no se indica otro, será de:",
        a: "Cinco días.",
        b: "Diez días.",
        c: "Quince días.",
        d: "Un mes.",
        correct: "b"
    },
    {
        id: 107,
        q: "El trámite de audiencia a los interesados se realizará:",
        a: "Al principio del procedimiento.",
        b: "Inmediatamente antes de redactar la propuesta de resolución.",
        c: "Después de dictar la resolución.",
        d: "Solo si lo pide el interesado por escrito.",
        correct: "b"
    },
    {
        id: 108,
        q: "El plazo para el trámite de audiencia será de:",
        a: "No inferior a diez ni superior a quince días.",
        b: "Diez días fijos.",
        c: "Cinco días.",
        d: "Un mes.",
        correct: "a"
    },
    {
        id: 109,
        q: "Se podrá prescindir del trámite de audiencia cuando:",
        a: "La Administración tenga prisa.",
        b: "No figuren en el procedimiento ni sean tenidos en cuenta otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.",
        c: "El procedimiento sea de poca cuantía económica.",
        d: "Haya muchos interesados.",
        correct: "b"
    },
    {
        id: 110,
        q: "Todo interesado podrá desistir de su solicitud o renunciar a sus derechos:",
        a: "Solo si la ley lo permite expresamente.",
        b: "En cualquier momento del procedimiento.",
        c: "Solo antes de la fase de prueba.",
        d: "Solo si no hay otros interesados.",
        correct: "b"
    },
    {
        id: 111,
        q: "La resolución que ponga fin al procedimiento decidirá:",
        a: "Solo sobre la primera petición del interesado.",
        b: "Todas las cuestiones planteadas por los interesados y aquellas otras derivadas del mismo.",
        c: "Solo sobre lo que el funcionario considere importante.",
        d: "Lo que diga el Alcalde de palabra.",
        correct: "b"
    },
    {
        id: 112,
        q: "En los procedimientos tramitados a solicitud del interesado, la resolución será congruente con las peticiones formuladas por este:",
        a: "Sin que en ningún caso pueda agravar su situación inicial.",
        b: "Pudiendo agravar su situación si es justo.",
        c: "Excepto en temas de dinero.",
        d: "La ley no dice nada sobre la congruencia.",
        correct: "a"
    },
    {
        id: 113,
        q: "Se entiende por 'puesto de trabajo':",
        a: "El lugar físico donde se trabaja.",
        b: "La unidad básica de la estructura organizativa.",
        c: "El despacho del funcionario.",
        d: "La mesa y la silla asignadas.",
        correct: "b"
    },
    {
        id: 114,
        q: "Los funcionarios de carrera se rigen por:",
        a: "El Derecho Laboral.",
        b: "El Derecho Administrativo y el Estatuto Básico del Empleado Público.",
        c: "El Código Civil.",
        d: "Las normas de la empresa privada.",
        correct: "b"
    },
    {
        id: 115,
        q: "Son empleados públicos (Art. 8 TREBEP):",
        a: "Funcionarios de carrera e interinos.",
        b: "Personal laboral (fijo, por tiempo indefinido o temporal).",
        c: "Personal eventual.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 116,
        q: "Los funcionarios interinos son nombrados como tales por circunstancias de necesidad y urgencia para:",
        a: "La existencia de plazas vacantes cuando no sea posible su cobertura por funcionarios de carrera.",
        b: "La sustitución transitoria de los titulares.",
        c: "La ejecución de programas de carácter temporal, que no podrán tener una duración superior a tres años.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 117,
        q: "El personal eventual realiza funciones de:",
        a: "Tramitación de expedientes.",
        b: "Confianza o asesoramiento especial.",
        c: "Limpieza y mantenimiento.",
        d: "Atención al público en ventanilla.",
        correct: "b"
    },
    {
        id: 118,
        q: "El cese del personal eventual se produce:",
        a: "Cuando así lo decida la autoridad que los nombró.",
        b: "En todo caso, cuando se produzca el cese de dicha autoridad.",
        c: "Tras cuatro años de servicio.",
        d: "Las respuestas a y b son correctas.",
        correct: "d"
    },
    {
        id: 119,
        q: "Los funcionarios de carrera se agrupan en:",
        a: "Cuerpos, escalas, especialidades u otros sistemas que incorporen competencias comunes.",
        b: "Sindicatos.",
        c: "Partidos políticos.",
        d: "Gremios.",
        correct: "a"
    },
    {
        id: 120,
        q: "Para el acceso al Grupo A de funcionarios se exige:",
        a: "Título de Bachiller.",
        b: "Título universitario de Grado.",
        c: "Título de Graduado en ESO.",
        d: "Título de Técnico Superior.",
        correct: "b"
    },
    {
        id: 121,
        q: "El Grupo B de funcionarios exige el título de:",
        a: "Doctor.",
        b: "Técnico Superior.",
        c: "Bachiller.",
        d: "Graduado Escolar.",
        correct: "b"
    },
    {
        id: 122,
        q: "Para el acceso al Grupo C, Subgrupo C1, se exige:",
        a: "Título de Bachiller o Técnico.",
        b: "Título de Graduado en ESO.",
        c: "Título Universitario.",
        d: "No se exige título.",
        correct: "a"
    },
    {
        id: 123,
        q: "Para el acceso al Grupo C, Subgrupo C2, se exige:",
        a: "Título de Bachiller.",
        b: "Título de Graduado en Educación Secundaria Obligatoria.",
        c: "Título de Técnico Superior.",
        d: "Certificado de estudios primarios.",
        correct: "b"
    },
    {
        id: 124,
        q: "La condición de funcionario de carrera se adquiere por el cumplimiento sucesivo de:",
        a: "Superación del proceso selectivo.",
        b: "Nombramiento por la autoridad competente y publicación en el diario oficial.",
        c: "Acto de acatamiento de la Constitución y toma de posesión.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 125,
        q: "Son causas de pérdida de la condición de funcionario de carrera:",
        a: "La renuncia a la condición de funcionario.",
        b: "La jubilación total del funcionario.",
        c: "La pena principal o accesoria de inhabilitación absoluta o especial para cargo público que tuviera carácter firme.",
        d: "Todas son correctas.",
        correct: "d"
    },
{
        id: 126,
        q: "La renuncia a la condición de funcionario:",
        a: "Inhabilita para un nuevo ingreso en la Administración Pública.",
        b: "No inhabilita para un nuevo ingreso a través de las pruebas selectivas correspondientes.",
        c: "Debe ser aceptada por el sindicato mayoritario.",
        d: "Solo puede realizarse tras 10 años de servicio.",
        correct: "b"
    },
    {
        id: 127,
        q: "La jubilación de los funcionarios públicos podrá ser:",
        a: "Voluntaria, a solicitud del interesado.",
        b: "Forzosa, al cumplir la edad legalmente establecida.",
        c: "Por la declaración de incapacidad permanente para el ejercicio de sus funciones.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 128,
        q: "Los funcionarios tienen derecho a la progresión en la carrera profesional y promoción interna conforme a los principios de:",
        a: "Antigüedad y jerarquía.",
        b: "Igualdad, mérito y capacidad.",
        c: "Libre designación por el Alcalde.",
        d: "Necesidad del servicio exclusivamente.",
        correct: "b"
    },
    {
        id: 129,
        q: "¿Cuál de los siguientes es un derecho individual ejercido de forma colectiva?",
        a: "La formación continua.",
        b: "La libertad sindical.",
        c: "La percepción de retribuciones.",
        d: "La defensa jurídica.",
        correct: "b"
    },
    {
        id: 130,
        q: "Los empleados públicos tienen derecho a una protección eficaz en materia de:",
        a: "Seguridad y salud en el trabajo.",
        b: "Inversiones financieras.",
        c: "Vivienda digna.",
        d: "Transporte gratuito.",
        correct: "a"
    },
    {
        id: 131,
        q: "En cuanto a la jornada de trabajo, las Administraciones Públicas establecen la jornada general y las especiales:",
        a: "De forma unilateral por el pleno.",
        b: "Previa negociación colectiva con los representantes sindicales.",
        c: "Según lo que dicte el Código Laboral.",
        d: "Igual para todos los municipios de España por Ley.",
        correct: "b"
    },
    {
        id: 132,
        q: "Las retribuciones de los funcionarios de carrera se clasifican en:",
        a: "Sueldo y trienios.",
        b: "Básicas y complementarias.",
        c: "Fijas y variables.",
        d: "Ordinarias y extraordinarias.",
        correct: "b"
    },
    {
        id: 133,
        q: "Son retribuciones básicas:",
        a: "El sueldo y los trienios.",
        b: "El sueldo y el complemento de destino.",
        c: "El complemento específico.",
        d: "La gratificación por servicios extraordinarios.",
        correct: "a"
    },
    {
        id: 134,
        q: "El sueldo de los funcionarios se fija en la Ley de Presupuestos Generales del Estado en función de:",
        a: "La edad del funcionario.",
        b: "El grupo o subgrupo en que se clasifique el Cuerpo o Escala.",
        c: "El número de hijos.",
        d: "La comunidad autónoma de residencia.",
        correct: "b"
    },
    {
        id: 135,
        q: "Los trienios consisten en una cantidad igual para cada Grupo o Subgrupo, por cada:",
        a: "Año de servicio.",
        b: "Dos años de servicio.",
        c: "Tres años de servicio.",
        d: "Cinco años de servicio.",
        correct: "c"
    },
    {
        id: 136,
        q: "El complemento de destino retribuye:",
        a: "La especial dificultad técnica del puesto.",
        b: "La progresión alcanzada por el funcionario dentro del sistema de carrera administrativa (nivel del puesto).",
        c: "Las horas extra.",
        d: "El desplazamiento al lugar de trabajo.",
        correct: "b"
    },
    {
        id: 137,
        q: "El complemento específico retribuye:",
        a: "La antigüedad.",
        b: "Condiciones particulares de los puestos (dificultad técnica, dedicación, responsabilidad, peligrosidad).",
        c: "El cumplimiento de objetivos.",
        d: "Los años de carrera.",
        correct: "b"
    },
    {
        id: 138,
        q: "Las gratificaciones por servicios extraordinarios se conceden por:",
        a: "Trabajos realizados fuera de la jornada normal, y no pueden ser fijas en su cuantía ni periódicas en su devengo.",
        b: "Peligrosidad.",
        c: "Tener más de 20 años de servicio.",
        d: "Idiomas.",
        correct: "a"
    },
    {
        id: 139,
        q: "Los funcionarios de carrera podrán encontrarse en las siguientes situaciones:",
        a: "Servicio activo y Servicios especiales.",
        b: "Excedencia.",
        c: "Suspensión de funciones.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 140,
        q: "Se hallarán en situación de 'Servicio Activo':",
        a: "Quienes presten servicios en su condición de funcionarios en cualquier Administración Pública.",
        b: "Quienes estén de vacaciones.",
        c: "Quienes disfruten de licencias que comporten reserva del puesto.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 141,
        q: "Los funcionarios pasarán a la situación de 'Servicios Especiales' cuando:",
        a: "Sean nombrados miembros del Gobierno o de los órganos de gobierno de las CCAA.",
        b: "Sean elegidos miembros de las Cortes Generales o asambleas legislativas de las CCAA.",
        c: "Sean adscritos a misiones en organismos internacionales.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 142,
        q: "La excedencia voluntaria por interés particular requiere haber prestado servicios efectivos durante:",
        a: "Un año inmediatamente anterior.",
        b: "Cinco años inmediatamente anteriores.",
        c: "Diez años.",
        d: "No requiere tiempo mínimo.",
        correct: "b"
    },
    {
        id: 143,
        q: "La excedencia por cuidado de hijos tiene una duración máxima de:",
        a: "Tres años para cada hijo.",
        b: "Un año.",
        c: "Dos años.",
        d: "Cinco años.",
        correct: "a"
    },
    {
        id: 144,
        q: "Durante el primer año de excedencia por cuidado de hijo, el funcionario tiene derecho a:",
        a: "Reserva de su puesto de trabajo.",
        b: "Reserva de un puesto en la misma localidad.",
        c: "Solo a que se le compute la antigüedad.",
        d: "No tiene ningún derecho de reserva.",
        correct: "a"
    },
    {
        id: 145,
        q: "La excedencia por razón de violencia de género:",
        a: "No exige periodo mínimo de servicios previos.",
        b: "Durante los primeros seis meses se tiene derecho a la reserva del puesto.",
        c: "Los seis primeros meses se percibirán las retribuciones íntegras.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 146,
        q: "La suspensión de funciones puede ser:",
        a: "Solo firme.",
        b: "Solo provisional.",
        c: "Provisional o firme.",
        d: "Voluntaria.",
        correct: "c"
    },
    {
        id: 147,
        q: "La suspensión provisional podrá acordarse preventivamente durante la tramitación de un:",
        a: "Recurso de alzada.",
        b: "Periodo de vacaciones.",
        c: "Examen médico.",
        d: "Expediente disciplinario o proceso judicial.",
        correct: "d"
    },
    {
        id: 148,
        q: "La suspensión provisional no podrá exceder de:",
        a: "Un mes.",
        b: "Tres meses.",
        c: "Seis meses.",
        d: "Un año.",
        correct: "c"
    },
    {
        id: 149,
        q: "El Código de Conducta de los empleados públicos se divide en:",
        a: "Principios éticos y principios de conducta.",
        b: "Normas buenas y normas malas.",
        c: "Leyes y reglamentos.",
        d: "Derechos y deberes.",
        correct: "a"
    },
    {
        id: 150,
        q: "Los empleados públicos deben actuar con arreglo a los principios de:",
        a: "Objetividad e integridad.",
        b: "Neutralidad y responsabilidad.",
        c: "Imparcialidad y transparencia.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 151,
        q: "Se considera falta muy grave (Art. 95 TREBEP):",
        a: "El abandono del servicio.",
        b: "La falta de puntualidad injustificada.",
        c: "El descuido en el aseo personal.",
        d: "No llevar el uniforme.",
        correct: "a"
    },
    {
        id: 152,
        q: "Es una falta muy grave:",
        a: "La incorrección con el público.",
        b: "El retraso en el despacho de asuntos.",
        c: "Toda actuación que suponga discriminación por razón de origen racial, religión, sexo u orientación sexual.",
        d: "La ausencia de un día sin causa.",
        correct: "c"
    },
    {
        id: 153,
        q: "Las sanciones disciplinarias pueden ser:",
        a: "Separación del servicio (solo para funcionarios).",
        b: "Suspensión de funciones.",
        c: "Traslado forzoso.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 154,
        q: "El procedimiento disciplinario debe garantizar:",
        a: "La separación entre la fase instructora y la sancionadora.",
        b: "Que el Alcalde decida siempre sin escuchar al funcionario.",
        c: "Que no haya pruebas de testigos.",
        d: "Que el sancionado pague las costas del proceso.",
        correct: "a"
    },
    {
        id: 155,
        q: "¿Cuál es el órgano de gobierno y administración de la Provincia?",
        a: "La Diputación Provincial.",
        b: "El Ayuntamiento.",
        c: "La Junta de Andalucía.",
        d: "La Subdelegación del Gobierno.",
        correct: "a"
    },
    {
        id: 156,
        q: "La Diputación está integrada por:",
        a: "El Alcalde y los Concejales.",
        b: "El Delegado del Gobierno.",
        c: "El Presidente y los Vicepresidentes.",
        d: "El Presidente, los Vicepresidentes, la Junta de Gobierno y el Pleno.",
        correct: "d"
    },
    {
        id: 157,
        q: "El número de Diputados se determina según:",
        a: "La extensión territorial de la provincia.",
        b: "El número de municipios.",
        c: "El presupuesto de la provincia.",
        d: "El número de residentes en la provincia.",
        correct: "d"
    },
    {
        id: 158,
        q: "Para una provincia de entre 500.001 y 1.000.000 de residentes (como Málaga en ciertos tramos), corresponden:",
        a: "25 Diputados.",
        b: "27 Diputados.",
        c: "31 Diputados.",
        d: "13 Diputados.",
        correct: "c"
    },
    {
        id: 159,
        q: "Los Diputados provinciales son elegidos por y entre:",
        a: "Los ciudadanos directamente.",
        b: "Los Concejales de los Ayuntamientos de la provincia.",
        c: "El Gobierno de la Nación.",
        d: "La Junta de Andalucía.",
        correct: "b"
    },
    {
        id: 160,
        q: "El Presidente de la Diputación es elegido por:",
        a: "Los ciudadanos.",
        b: "El Pleno de la Diputación de entre sus miembros.",
        c: "El Rey.",
        d: "Los Alcaldes de la provincia.",
        correct: "b"
    },
    {
        id: 161,
        q: "Para ser elegido Presidente en primera votación se requiere:",
        a: "Mayoría simple.",
        b: "Mayoría absoluta.",
        c: "Dos tercios de los votos.",
        d: "Unanimidad.",
        correct: "b"
    },
    {
        id: 162,
        q: "En segunda votación para Presidente de la Diputación basta con:",
        a: "Mayoría de dos tercios.",
        b: "Mayoría simple.",
        c: "Ser el diputado de más edad.",
        d: "Ser el diputado con más votos en su municipio.",
        correct: "b"
    },
    {
        id: 163,
        q: "El Presidente puede cesar por:",
        a: "Dimisión.",
        b: "Pérdida de la condición de Diputado.",
        c: "Moción de censura o cuestión de confianza.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 164,
        q: "Los Vicepresidentes son nombrados y cesados por:",
        a: "El Pleno.",
        b: "El Presidente, de entre los miembros de la Junta de Gobierno.",
        c: "El Ministerio de Política Territorial.",
        d: "Sorteo.",
        correct: "b"
    },
    {
        id: 165,
        q: "La Junta de Gobierno está integrada por el Presidente y un número de Diputados no superior a:",
        a: "Un tercio del número legal de los mismos.",
        b: "La mitad.",
        c: "Tres diputados.",
        d: "Diez diputados.",
        correct: "a"
    },
{
        id: 166,
        q: "La Junta de Gobierno Local tiene como función propia:",
        a: "La aprobación del presupuesto.",
        b: "La asistencia al Presidente en el ejercicio de sus atribuciones.",
        c: "La elección del Presidente.",
        d: "La votación de la moción de censura.",
        correct: "b"
    },
    {
        id: 167,
        q: "El Pleno de la Diputación puede delegar competencias en:",
        a: "Cualquier funcionario.",
        b: "Solo en el Presidente.",
        c: "El Presidente y la Junta de Gobierno Local.",
        d: "No puede delegar ninguna competencia.",
        correct: "c"
    },
    {
        id: 168,
        q: "Es competencia propia de la Diputación (Art. 36 LBRL):",
        a: "La coordinación de los servicios municipales entre sí.",
        b: "La asistencia y cooperación jurídica, económica y técnica a los Municipios.",
        c: "La prestación de servicios públicos de carácter supramunicipal.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 169,
        q: "La Diputación debe asegurar la prestación integral de servicios en los municipios de menos de:",
        a: "50.000 habitantes.",
        b: "20.000 habitantes.",
        c: "5.000 habitantes.",
        d: "1.000 habitantes.",
        correct: "b"
    },
    {
        id: 170,
        q: "El Plan Provincial de Cooperación a las obras y servicios de competencia municipal se aprueba por:",
        a: "El Pleno de la Diputación.",
        b: "El Gobierno de la Nación.",
        c: "La Junta de Andalucía.",
        d: "Cada Ayuntamiento individualmente.",
        correct: "a"
    },
    {
        id: 171,
        q: "Las Haciendas Locales se nutren de:",
        a: "Tributos propios (tasas, contribuciones especiales e impuestos).",
        b: "Participación en los tributos del Estado y CCAA.",
        c: "Subvenciones y precios públicos.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 172,
        q: "Son impuestos de exacción obligatoria en los Ayuntamientos:",
        a: "IBI, IAE e IVTM.",
        b: "ICIO y Plusvalía.",
        c: "Tasas de basuras.",
        d: "Contribuciones especiales.",
        correct: "a"
    },
    {
        id: 173,
        q: "El IBI (Impuesto sobre Bienes Inmuebles) es un impuesto:",
        a: "Directo, real y de carácter obligatorio.",
        b: "Indirecto y voluntario.",
        c: "Que solo pagan las empresas.",
        d: "Que gestiona exclusivamente el Estado.",
        correct: "a"
    },
    {
        id: 174,
        q: "El IAE (Impuesto sobre Actividades Económicas) grava:",
        a: "La propiedad de locales.",
        b: "El mero ejercicio de actividades empresariales, profesionales o artísticas.",
        c: "Los beneficios anuales de las empresas.",
        d: "Las compras de materias primas.",
        correct: "b"
    },
    {
        id: 175,
        q: "Están exentos del pago del IAE:",
        a: "Las personas físicas.",
        b: "Los sujetos pasivos que tengan un importe neto de cifra de negocios inferior a 1.000.000 de euros.",
        c: "Las entidades públicas.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 176,
        q: "El IVTM (Impuesto sobre Vehículos de Tracción Mecánica) lo paga:",
        a: "El conductor del vehículo.",
        b: "Quien figure como titular del vehículo en el permiso de circulación.",
        c: "El fabricante.",
        d: "El taller mecánico.",
        correct: "b"
    },
    {
        id: 177,
        q: "El ICIO (Impuesto sobre Construcciones, Instalaciones y Obras) es un impuesto:",
        a: "Obligatorio.",
        b: "Potestativo (el municipio decide si lo impone).",
        c: "Que paga el Ayuntamiento a la Diputación.",
        d: "Que grava la venta de casas.",
        correct: "b"
    },
    {
        id: 178,
        q: "Las tasas se diferencian de los precios públicos en que las primeras:",
        a: "Son voluntarias.",
        b: "Se refieren a servicios de solicitud obligatoria o que no se prestan por el sector privado.",
        c: "Son mucho más caras.",
        d: "Solo las cobran las Diputaciones.",
        correct: "b"
    },
    {
        id: 179,
        q: "El Presupuesto General de las Entidades Locales es:",
        a: "Un plan de gastos para 10 años.",
        b: "La expresión cifrada, conjunta y sistemática de las obligaciones y previsiones de ingresos de un ejercicio.",
        c: "Un documento secreto.",
        d: "Solo obligatorio para municipios grandes.",
        correct: "b"
    },
    {
        id: 180,
        q: "El ejercicio presupuestario coincide con:",
        a: "El curso escolar.",
        b: "El año natural (1 de enero al 31 de diciembre).",
        c: "La duración de la legislatura.",
        d: "El año fiscal americano.",
        correct: "b"
    },
    {
        id: 181,
        q: "El presupuesto se divide en dos estados principales:",
        a: "Pasivo y Activo.",
        b: "Ingresos y Gastos.",
        c: "Créditos y Deudas.",
        d: "Nóminas y Obras.",
        correct: "b"
    },
    {
        id: 182,
        q: "La estructura de los estados de gastos del presupuesto se clasifica en:",
        a: "Económica y por programas.",
        b: "Alfabética.",
        c: "Por el nombre de los concejales.",
        d: "Solo por el importe.",
        correct: "a"
    },
    {
        id: 183,
        q: "La clasificación económica de los gastos se divide en:",
        a: "Capítulos, artículos, conceptos y subconceptos.",
        b: "Temas y subtemas.",
        c: "Páginas y párrafos.",
        d: "Urgentes y normales.",
        correct: "a"
    },
    {
        id: 184,
        q: "El Capítulo 1 de gastos corresponde a:",
        a: "Inversiones reales.",
        b: "Gastos de personal.",
        c: "Gastos corrientes en bienes y servicios.",
        d: "Deuda pública.",
        correct: "b"
    },
    {
        id: 185,
        q: "El Capítulo 6 de gastos corresponde a:",
        a: "Transferencias corrientes.",
        b: "Gastos financieros.",
        c: "Inversiones reales.",
        d: "Activos financieros.",
        correct: "c"
    },
    {
        id: 186,
        q: "La aprobación inicial del presupuesto corresponde al:",
        a: "Alcalde.",
        b: "Pleno de la Corporación.",
        c: "Interventor.",
        d: "Ministerio de Hacienda.",
        correct: "b"
    },
    {
        id: 187,
        q: "Tras la aprobación inicial, el presupuesto se expone al público por un plazo de:",
        a: "10 días.",
        b: "15 días hábiles.",
        c: "30 días.",
        d: "Un mes.",
        correct: "b"
    },
    {
        id: 188,
        q: "Si no se presentan reclamaciones en el periodo de exposición, el presupuesto:",
        a: "Debe votarse de nuevo.",
        b: "Se considera definitivamente aprobado.",
        c: "Se anula.",
        d: "Se envía al Rey.",
        correct: "b"
    },
    {
        id: 189,
        q: "Si al iniciarse el año natural no se hubiera aprobado el presupuesto:",
        a: "No se puede gastar nada.",
        b: "Se prorroga automáticamente el del ejercicio anterior.",
        c: "Se cierra el Ayuntamiento.",
        d: "Se pide un préstamo urgente.",
        correct: "b"
    },
    {
        id: 190,
        q: "Las modificaciones de crédito pueden ser:",
        a: "Créditos extraordinarios y suplementos de crédito.",
        b: "Transferencias de crédito.",
        c: "Generaciones de crédito por ingresos.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 191,
        q: "La ordenación de pagos corresponde a:",
        a: "El Pleno.",
        b: "El Alcalde o Presidente de la Corporación.",
        c: "El Tesorero.",
        d: "El Interventor.",
        correct: "b"
    },
    {
        id: 192,
        q: "El control interno de la gestión económico-presupuestaria lo ejerce:",
        a: "La Tesorería.",
        b: "La Intervención.",
        c: "El Banco de España.",
        d: "Una empresa de auditoría privada.",
        correct: "b"
    },
    {
        id: 193,
        q: "La función de Tesorería incluye:",
        a: "El manejo y custodia de fondos, valores y arqueos.",
        b: "La aprobación de facturas.",
        c: "La redacción del presupuesto.",
        d: "La fiscalización de los actos.",
        correct: "a"
    },
    {
        id: 194,
        q: "El Texto Refundido de la Ley de Contratos del Sector Público clasifica los contratos en:",
        a: "Obras, servicios, suministros, concesión de obras y concesión de servicios.",
        b: "Internos y externos.",
        c: "Caros y baratos.",
        d: "Escritos y verbales.",
        correct: "a"
    },
    {
        id: 195,
        q: "Son contratos de obras aquellos que tienen por objeto:",
        a: "La compra de ordenadores.",
        b: "La realización de un trabajo que recaiga sobre un bien inmueble.",
        c: "La limpieza de oficinas.",
        d: "La redacción de un proyecto.",
        correct: "b"
    },
    {
        id: 196,
        q: "El contrato de suministros tiene por objeto:",
        a: "La construcción de un puente.",
        b: "La adquisición, el arrendamiento financiero o el arrendamiento de productos o bienes muebles.",
        c: "La contratación de personal interino.",
        d: "La organización de un concierto.",
        correct: "b"
    },
    {
        id: 197,
        q: "Los contratos menores son aquellos que:",
        a: "Duran menos de una semana.",
        b: "Tienen un valor estimado inferior a 40.000€ (obras) o 15.000€ (suministro/servicio).",
        c: "Solo pueden firmar los secretarios.",
        d: "No necesitan factura.",
        correct: "b"
    },
    {
        id: 198,
        q: "La duración de los contratos de servicios, por regla general, no podrá exceder de:",
        a: "Un año.",
        b: "Cinco años (incluidas las prórrogas).",
        c: "Diez años.",
        d: "Cualquier tiempo.",
        correct: "b"
    },
    {
        id: 199,
        q: "El órgano de contratación en las Entidades Locales suele ser:",
        a: "El Alcalde/Presidente o el Pleno, según la cuantía.",
        b: "Siempre el Interventor.",
        c: "El Jefe de Compras.",
        d: "El Estado.",
        correct: "a"
    },
    {
        id: 200,
        q: "El expediente de contratación termina con:",
        a: "La oferta del licitador.",
        b: "La resolución de adjudicación.",
        c: "El pago de la factura.",
        d: "La jubilación del funcionario.",
        correct: "b"
    },
    {
        id: 201,
        q: "¿Cuál es la norma fundamental que rige el funcionamiento de la Diputación de Málaga?",
        a: "La Constitución Española.",
        b: "El Reglamento Orgánico de la Diputación de Málaga.",
        c: "El Código Civil.",
        d: "La Ley de Carreteras.",
        correct: "b"
    },
    {
        id: 202,
        q: "Los grupos políticos de la Diputación se constituyen mediante:",
        a: "Escrito dirigido al Presidente firmado por todos sus integrantes.",
        b: "Una llamada telefónica.",
        c: "Anuncio en prensa.",
        d: "Orden de la Junta de Andalucía.",
        correct: "a"
    },
    {
        id: 203,
        q: "La Junta de Portavoces está integrada por:",
        a: "Todos los Diputados.",
        b: "El Presidente y los Portavoces de los Grupos Políticos.",
        c: "Solo los diputados del equipo de gobierno.",
        d: "Los funcionarios de carrera.",
        correct: "b"
    },
    {
        id: 204,
        q: "Las Comisiones Informativas tienen como función:",
        a: "Dictar resoluciones finales.",
        b: "El estudio, informe o consulta de los asuntos que hayan de ser sometidos a la decisión del Pleno.",
        c: "Organizar las fiestas de la provincia.",
        d: "Pagar las nóminas.",
        correct: "b"
    },
    {
        id: 205,
        q: "La Comisión Especial de Cuentas es:",
        a: "Voluntaria.",
        b: "Prohibida por ley.",
        c: "De existencia preceptiva (obligatoria).",
        d: "Solo para Ayuntamientos.",
        correct: "c"
    },
    {
        id: 206,
        q: "El orden del día de las sesiones del Pleno lo fija:",
        a: "El Secretario.",
        b: "El Presidente.",
        c: "El Portavoz de la oposición.",
        d: "Por sorteo entre los diputados.",
        correct: "b"
    },
    {
        id: 207,
        q: "En las sesiones ordinarias, el orden del día debe incluir el punto de:",
        a: "Ruegos y preguntas.",
        b: "Lectura de poemas.",
        c: "Venta de patrimonio.",
        d: "Nombramiento de asesores.",
        correct: "a"
    },
    {
        id: 208,
        q: "Las actas de las sesiones son redactadas y autorizadas por:",
        a: "El Presidente.",
        b: "El Secretario General.",
        c: "El Interventor.",
        d: "Cualquier administrativo.",
        correct: "b"
    },
    {
        id: 209,
        q: "El tablón de anuncios de la Diputación es actualmente:",
        a: "Solo un tablón de madera en la entrada.",
        b: "Sustituido o complementado por el Tablón de Edictos Electrónico (Sede Electrónica).",
        c: "Inexistente.",
        d: "Un periódico local.",
        correct: "b"
    },
    {
        id: 210,
        q: "La sede electrónica de la Diputación de Málaga permite:",
        a: "Presentar instancias y documentos por registro telemático.",
        b: "Consultar el estado de tramitación de expedientes.",
        c: "Recibir notificaciones electrónicas.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 211,
        q: "El derecho de acceso a la información pública (Transparencia) puede ser ejercido por:",
        a: "Solo los residentes en Málaga.",
        b: "Todas las personas, en los términos previstos en la Constitución y las Leyes.",
        c: "Solo los abogados.",
        d: "Solo los diputados.",
        correct: "b"
    },
{
        id: 212,
        q: "¿Cuál de los siguientes es un centro dependiente de la Diputación de Málaga?",
        a: "El Museo Picasso.",
        b: "El Centro de Ediciones de la Diputación de Málaga (CEDMA).",
        c: "El Aeropuerto de Málaga.",
        d: "La Universidad de Málaga.",
        correct: "b"
    },
    {
        id: 213,
        q: "La atención al ciudadano en la Diputación se rige por principios de:",
        a: "Secretismo y demora.",
        b: "Exclusividad para residentes en la capital.",
        c: "Solo atención telefónica.",
        d: "Celeridad, transparencia y eficacia.",
        correct: "d"
    },
    {
        id: 214,
        q: "En el entorno Windows, ¿qué combinación de teclas se usa para copiar un elemento seleccionado?",
        a: "Ctrl + X.",
        b: "Ctrl + V.",
        c: "Ctrl + C.",
        d: "Alt + F4.",
        correct: "c"
    },
    {
        id: 215,
        q: "En un procesador de textos como Word, la función 'Negrita' sirve para:",
        a: "Cambiar el idioma del texto.",
        b: "Resaltar el texto aumentando el grosor del trazo de los caracteres.",
        c: "Borrar el párrafo.",
        d: "Subrayar las palabras.",
        correct: "b"
    },
    {
        id: 216,
        q: "En una hoja de cálculo (Excel), las celdas se identifican por:",
        a: "Una letra (columna) y un número (fila).",
        b: "Solo por colores.",
        c: "Por el nombre del usuario.",
        d: "Por el tamaño de la fuente.",
        correct: "a"
    },
    {
        id: 217,
        q: "¿Qué es el hardware de un ordenador?",
        a: "Los programas y aplicaciones.",
        b: "El sistema operativo.",
        c: "Los componentes físicos del sistema (monitor, teclado, CPU, etc.).",
        d: "La conexión a internet.",
        correct: "c"
    },
    {
        id: 218,
        q: "El Reglamento General de Protección de Datos (RGPD) protege:",
        a: "Solo los datos de las empresas.",
        b: "Los datos de personas fallecidas.",
        c: "Los datos de los ordenadores de la Administración.",
        d: "Los datos de carácter personal de las personas físicas.",
        correct: "d"
    },
    {
        id: 219,
        q: "El derecho de 'Acceso' en protección de datos permite:",
        a: "Entrar en el despacho del Alcalde.",
        b: "Borrar todos mis datos de internet.",
        c: "Conocer si sus datos están siendo tratados y con qué finalidad.",
        d: "Modificar los datos erróneos.",
        correct: "c"
    },
    {
        id: 220,
        q: "El derecho de 'Supresión' también es conocido como:",
        a: "Derecho al olvido.",
        b: "Derecho de rectificación.",
        c: "Derecho de oposición.",
        d: "Derecho de portabilidad.",
        correct: "a"
    },
    {
        id: 221,
        q: "¿Qué significan las siglas TIC?",
        a: "Técnicas de Inteligencia Colectiva.",
        b: "Tecnologías de la Información y la Comunicación.",
        c: "Tratamiento de Información Computarizada.",
        d: "Transporte de Información Centralizada.",
        correct: "b"
    },
    {
        id: 222,
        q: "Un archivo con extensión .pdf es:",
        a: "Una imagen editable.",
        b: "Un formato de documento portátil.",
        c: "Una hoja de cálculo.",
        d: "Un virus informático.",
        correct: "b"
    },
    {
        id: 223,
        q: "En una base de datos, un 'registro' es:",
        a: "El nombre de la base de datos.",
        b: "El conjunto de campos que contienen los datos de una unidad o elemento.",
        c: "La impresora conectada.",
        d: "La copia de seguridad.",
        correct: "b"
    },
    {
        id: 224,
        q: "La Sede Electrónica de la Diputación de Málaga debe estar disponible:",
        a: "Solo de 8:00 a 15:00.",
        b: "Las 24 horas del día, todos los días del año.",
        c: "Solo los días laborables.",
        d: "Cuando el informático esté presente.",
        correct: "b"
    },
    {
        id: 225,
        q: "¿Qué es la firma electrónica?",
        a: "Una foto de nuestra firma escaneada.",
        b: "Un conjunto de datos en forma electrónica que permite identificar al firmante.",
        c: "El nombre escrito en el email.",
        d: "Un sello de caucho digital.",
        correct: "b"
    },
    {
        id: 226,
        q: "El certificado digital es emitido por:",
        a: "Cualquier ciudadano.",
        b: "Una Autoridad de Certificación.",
        c: "El fabricante del ordenador.",
        d: "La policía local.",
        correct: "b"
    },
    {
        id: 227,
        q: "En el correo electrónico, el campo 'CCO' sirve para:",
        a: "Enviar una copia visible a todos.",
        b: "Enviar una copia oculta a los destinatarios.",
        c: "Adjuntar archivos pesados.",
        d: "Poner el asunto del mensaje.",
        correct: "b"
    },
    {
        id: 228,
        q: "Un navegador web es:",
        a: "Un dispositivo físico.",
        b: "Un software que permite visualizar páginas web (como Chrome o Firefox).",
        c: "Una carpeta del disco duro.",
        d: "El cable de internet.",
        correct: "b"
    },
    {
        id: 229,
        q: "La 'Nube' (Cloud Computing) permite:",
        a: "Guardar archivos solo en el pendrive.",
        b: "Almacenar y acceder a datos y programas a través de internet.",
        c: "Limpiar el teclado del ordenador.",
        d: "Predecir el tiempo meteorológico.",
        correct: "b"
    },
    {
        id: 230,
        q: "El Registro de Entrada de la Diputación de Málaga:",
        a: "Es solo para cartas de papel.",
        b: "Es único para toda la Corporación, aunque existan oficinas auxiliares.",
        c: "No admite documentos de ciudadanos de fuera de Málaga.",
        d: "Solo funciona con cita previa obligatoria por ley.",
        correct: "b"
    },
    {
        id: 231,
        q: "La Ley de Igualdad establece que las Administraciones Públicas deben:",
        a: "Ignorar la diferencia de sexos.",
        b: "Integrar el principio de igualdad de trato y oportunidades entre mujeres y hombres.",
        c: "Contratar solo a mujeres.",
        d: "No tener planes de igualdad.",
        correct: "b"
    },
    {
        id: 232,
        q: "El lenguaje no sexista en la Administración busca:",
        a: "Utilizar solo términos masculinos.",
        b: "Evitar el uso de expresiones que invisibilicen o minusvaloren a un sexo.",
        c: "Inventar palabras nuevas.",
        d: "No escribir documentos.",
        correct: "b"
    },
    {
        id: 233,
        q: "¿Qué es un periférico de entrada?",
        a: "La impresora.",
        b: "El teclado.",
        c: "El monitor.",
        d: "Los altavoces.",
        correct: "b"
    },
    {
        id: 234,
        q: "¿Qué es un periférico de salida?",
        a: "El ratón.",
        b: "El escáner.",
        c: "La impresora.",
        d: "El micrófono.",
        correct: "c"
    },
    {
        id: 235,
        q: "La memoria RAM de un ordenador es:",
        a: "Una memoria de almacenamiento permanente.",
        b: "Una memoria de acceso aleatorio y volátil (se borra al apagar).",
        c: "El lector de CD.",
        d: "La tarjeta de red.",
        correct: "b"
    },
    {
        id: 236,
        q: "En Word, la opción 'Justificar' un texto significa:",
        a: "Explicar por qué se ha escrito.",
        b: "Alinear el texto simultáneamente a los márgenes izquierdo y derecho.",
        c: "Ponerlo todo en mayúsculas.",
        d: "Insertar una imagen.",
        correct: "b"
    },
    {
        id: 237,
        q: "Una red LAN es:",
        a: "Una red de área mundial.",
        b: "Una red de área local (limitada a un edificio u oficina).",
        c: "Un tipo de monitor.",
        d: "Un sistema operativo antiguo.",
        correct: "b"
    },
    {
        id: 238,
        q: "¿Cuál de las siguientes es una unidad de medida de información?",
        a: "Kilómetro.",
        b: "Gigabyte.",
        c: "Litro.",
        d: "Vatio.",
        correct: "b"
    },
    {
        id: 239,
        q: "Un 'backup' es:",
        a: "Un error del sistema.",
        b: "Una copia de seguridad de los datos.",
        c: "La pantalla de inicio.",
        d: "Un tipo de virus.",
        correct: "b"
    },
    {
        id: 240,
        q: "La protección de datos de carácter personal es un derecho:",
        a: "Fundamental recogido en la Constitución (Art. 18.4).",
        b: "Que no existe en España.",
        c: "Solo para famosos.",
        d: "Exclusivo de los jueces.",
        correct: "a"
    },
    {
        id: 241,
        q: "En el Ayuntamiento, el Padrón Municipal es:",
        a: "Un registro de empresas.",
        b: "El registro administrativo donde constan los vecinos del municipio.",
        c: "Una lista de coches.",
        d: "El inventario de muebles.",
        correct: "b"
    },
    {
        id: 242,
        q: "Toda persona que viva en España está obligada a inscribirse en el Padrón:",
        a: "Del municipio en el que resida habitualmente.",
        b: "Del municipio donde nació.",
        c: "De la capital de provincia.",
        d: "Solo si tiene casa propia.",
        correct: "a"
    },
    {
        id: 243,
        q: "La condición de vecino se adquiere:",
        a: "Al comprar una vivienda.",
        b: "En el momento de la inscripción en el Padrón.",
        c: "Tras vivir 10 años en el pueblo.",
        d: "Por votación de los concejales.",
        correct: "b"
    },
    {
        id: 244,
        q: "El sistema operativo es:",
        a: "Un programa de dibujo.",
        b: "El software básico que gestiona los recursos del hardware.",
        c: "La conexión a la luz.",
        d: "El manual de instrucciones.",
        correct: "b"
    },
    {
        id: 245,
        q: "En una hoja de cálculo, una fórmula siempre comienza con el signo:",
        a: "+",
        b: "=",
        c: "*",
        d: "$",
        correct: "b"
    },
    {
        id: 246,
        q: "El servicio de 'ventanilla única' permite:",
        a: "Comprar entradas para el teatro.",
        b: "Presentar documentos para cualquier administración en un solo punto de acceso.",
        c: "Pagar solo en efectivo.",
        d: "Hablar solo con el Alcalde.",
        correct: "b"
    },
    {
        id: 247,
        q: "La confidencialidad de los datos personales significa:",
        a: "Que los datos deben ser públicos.",
        b: "Que solo pueden acceder a ellos personas autorizadas.",
        c: "Que se pueden vender a empresas.",
        d: "Que no se pueden guardar en ordenadores.",
        correct: "b"
    },
    {
        id: 248,
        q: "En Windows, la 'Papelera de Reciclaje' sirve para:",
        a: "Almacenar archivos borrados temporalmente antes de su eliminación definitiva.",
        b: "Limpiar el virus del ordenador.",
        c: "Guardar las fotos favoritas.",
        d: "Imprimir borradores.",
        correct: "a"
    },
    {
        id: 249,
        q: "Una 'URL' es:",
        a: "Un tipo de ordenador.",
        b: "La dirección única de una página web en internet.",
        c: "Un lenguaje de programación.",
        d: "Un componente de la placa base.",
        correct: "b"
    },
    {
        id: 250,
        q: "La cultura de la transparencia en la Diputación de Málaga implica:",
        a: "Ocultar los presupuestos.",
        b: "Hacer pública la información relevante sobre la gestión y el uso de fondos públicos.",
        c: "No atender las quejas.",
        d: "Solo dar información a los amigos.",
        correct: "b"
    },
    {
        id: 251,
        q: "¿Qué es un cortafuegos (Firewall)?",
        a: "Un programa para hacer barbacoas.",
        b: "Un sistema de seguridad que controla el tráfico de red entrante y saliente.",
        c: "Una pieza del ventilador del PC.",
        d: "Un tipo de cable de red.",
        correct: "b"
    },
    {
        id: 252,
        q: "En el correo electrónico, 'Adjuntar' significa:",
        a: "Borrar el mensaje.",
        b: "Incluir un archivo junto con el cuerpo del mensaje.",
        c: "Enviar el correo dos veces.",
        d: "Cambiar la contraseña.",
        correct: "b"
    },
    {
        id: 253,
        q: "El teletrabajo en las Administraciones Públicas:",
        a: "Está prohibido siempre.",
        b: "Es una modalidad de prestación de servicios a distancia mediante TIC.",
        c: "Solo es para los jefes.",
        d: "No requiere conexión a internet.",
        correct: "b"
    },
    {
        id: 254,
        q: "La ergonomía informática estudia:",
        a: "La velocidad de los procesadores.",
        b: "La adaptación del entorno de trabajo (silla, pantalla, teclado) al usuario para evitar lesiones.",
        c: "El precio de los componentes.",
        d: "La capacidad del disco duro.",
        correct: "b"
    },
    {
        id: 255,
        q: "La Sede Electrónica debe garantizar la identificación de:",
        a: "Solo la Administración titular.",
        b: "La Administración titular y, en su caso, del ciudadano que accede.",
        c: "Solo de los funcionarios.",
        d: "De nadie, es anónima.",
        correct: "b"
    },
    {
        id: 256,
        q: "Un 'link' o hipervínculo es:",
        a: "Un error de conexión.",
        b: "Un elemento que al pulsar sobre él dirige a otra ubicación o documento.",
        c: "Un componente del ratón.",
        d: "Un virus de publicidad.",
        correct: "b"
    },
    {
        id: 257,
        q: "La base de datos del Padrón Municipal es cedida a:",
        a: "Empresas de publicidad.",
        b: "Otras Administraciones Públicas que la necesiten para el ejercicio de sus competencias.",
        c: "Cualquier persona que la pida.",
        d: "Nadie, es secreta en absoluto.",
        correct: "b"
    },
    {
        id: 258,
        q: "¿Qué es el 'Phishing'?",
        a: "Un deporte de riesgo.",
        b: "Un método de estafa para obtener información confidencial de forma fraudulenta.",
        c: "Una actualización de Windows.",
        d: "Un tipo de memoria RAM.",
        correct: "b"
    },
    {
        id: 259,
        q: "La atención telefónica de la Diputación debe ser:",
        a: "Cortante y rápida.",
        b: "Amable, clara y facilitadora de la información solicitada.",
        c: "Solo en inglés.",
        d: "Solo grabaciones automáticas.",
        correct: "b"
    },
    {
        id: 260,
        q: "El Boletín Oficial de la Provincia de Málaga (BOP) es gestionado por:",
        a: "El Ayuntamiento de Málaga.",
        b: "La Diputación de Málaga.",
        c: "La Junta de Andalucía.",
        d: "El Estado.",
        correct: "b"
    },
{
        id: 261,
        q: "En el explorador de archivos de Windows, para seleccionar varios archivos alternos se debe mantener pulsada la tecla:",
        a: "Shift (Mayús).",
        b: "Ctrl.",
        c: "Alt.",
        d: "Tab.",
        correct: "b"
    },
    {
        id: 262,
        q: "Un procesador de textos permite:",
        a: "Solo escribir texto sin formato.",
        b: "Crear, editar, dar formato e imprimir documentos de texto.",
        c: "Únicamente enviar correos electrónicos.",
        d: "Gestionar el hardware de la impresora.",
        correct: "b"
    },
    {
        id: 263,
        q: "En Excel, para sumar el rango de celdas desde A1 hasta A5, la fórmula correcta es:",
        a: "=SUMA(A1;A5)",
        b: "=SUMA(A1:A5)",
        c: "=A1+A5",
        d: "SUMAR A1 A5",
        correct: "b"
    },
    {
        id: 264,
        q: "¿Qué es un virus informático?",
        a: "Un fallo físico del disco duro.",
        b: "Un programa malicioso que tiene por objeto alterar el normal funcionamiento de la computadora.",
        c: "Un componente de la placa base.",
        d: "Una actualización del sistema operativo.",
        correct: "b"
    },
    {
        id: 265,
        q: "La 'Sede Electrónica' de la Diputación de Málaga garantiza:",
        a: "La integridad y veracidad de la información y servicios a los que se accede.",
        b: "Que el ciudadano no tenga que pagar impuestos.",
        c: "Que todos los trámites se resuelvan en un día.",
        d: "El acceso exclusivo a funcionarios.",
        correct: "a"
    },
    {
        id: 266,
        q: "¿Qué es el Esquema Nacional de Seguridad (ENS)?",
        a: "Un plan de vigilancia de los edificios públicos.",
        b: "El conjunto de principios y requisitos para garantizar la seguridad de la información tratada en medios electrónicos.",
        c: "Un software antivirus gratuito.",
        d: "La policía nacional informática.",
        correct: "b"
    },
    {
        id: 267,
        q: "El derecho a la portabilidad de los datos consiste en:",
        a: "Poder llevar el ordenador al trabajo.",
        b: "Recibir los datos personales en un formato estructurado y transmitirlos a otro responsable.",
        c: "Cambiar de número de teléfono.",
        d: "Publicar los datos en redes sociales.",
        correct: "b"
    },
    {
        id: 268,
        q: "La Ley 19/2013 de Transparencia se aplica a:",
        a: "Todas las Administraciones Públicas.",
        b: "Solo al Gobierno del Estado.",
        c: "Solo a las empresas privadas.",
        d: "Solo a los ciudadanos extranjeros.",
        correct: "a"
    },
    {
        id: 269,
        q: "El Portal de Transparencia de la Diputación de Málaga publica:",
        a: "Información institucional, organizativa y de planificación.",
        b: "Información de relevancia jurídica y económica.",
        c: "Los sueldos de los cargos electos.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 270,
        q: "¿Qué es una 'Cookie' en navegación web?",
        a: "Un virus que borra el disco duro.",
        b: "Un archivo enviado por un sitio web que se almacena en el navegador del usuario para recordar datos.",
        c: "Una pieza del ratón.",
        d: "El nombre de un navegador.",
        correct: "b"
    },
    {
        id: 271,
        q: "La firma electrónica reconocida o cualificada tiene:",
        a: "El mismo valor jurídico que la firma manuscrita.",
        b: "Menos valor que la firma manuscrita.",
        c: "Solo valor para documentos privados.",
        d: "Valor solo si se imprime.",
        correct: "a"
    },
    {
        id: 272,
        q: "En el Ayuntamiento, el órgano encargado de la gestión del Padrón es:",
        a: "La Comunidad Autónoma.",
        b: "El propio Ayuntamiento.",
        c: "El Instituto Nacional de Estadística (INE).",
        d: "La Diputación.",
        correct: "b"
    },
    {
        id: 273,
        q: "El 'Tablón de Edictos' de la Sede Electrónica tiene como fin:",
        a: "Publicar actos y comunicaciones que deban surtir efectos de notificación por edictos.",
        b: "Poner anuncios de compraventa.",
        c: "Publicar fotos de los eventos de la provincia.",
        d: "Sustituir al periódico local.",
        correct: "a"
    },
    {
        id: 274,
        q: "Los sistemas de identificación electrónica permitidos en la Administración son:",
        a: "Sistemas basados en certificados electrónicos.",
        b: "Sistemas de clave concertada (Cl@ve).",
        c: "DNI electrónico.",
        d: "Todas son correctas.",
        correct: "d"
    },
    {
        id: 275,
        q: "En Protección de Datos, el 'Delegado de Protección de Datos' (DPD):",
        a: "Informa y asesora al responsable sobre sus obligaciones.",
        b: "Es el encargado de borrar los archivos.",
        c: "Es un representante de los ciudadanos.",
        d: "Solo existe en las empresas de informática.",
        correct: "a"
    },
    {
        id: 276,
        q: "¿Qué es el 'Escritorio' en Windows?",
        a: "El mueble donde se pone el PC.",
        b: "La pantalla inicial que aparece tras cargar el sistema operativo.",
        c: "Una carpeta de documentos antiguos.",
        d: "El menú de configuración de la impresora.",
        correct: "b"
    },
    {
        id: 277,
        q: "Un 'Megabyte' equivale aproximadamente a:",
        a: "100 bytes.",
        b: "1.000 bits.",
        c: "1.024 Kilobytes.",
        d: "1.000 Terabytes.",
        correct: "c"
    },
    {
        id: 278,
        q: "La función principal de un antivirus es:",
        a: "Hacer que el ordenador vaya más rápido.",
        b: "Detectar, bloquear y eliminar código malicioso.",
        c: "Limpiar el polvo de la CPU.",
        d: "Conectar el ordenador a internet.",
        correct: "b"
    },
    {
        id: 279,
        q: "El derecho a la rectificación en protección de datos permite:",
        a: "Borrar los datos personales.",
        b: "Oponerse al tratamiento de los datos.",
        c: "Obtener la corrección de los datos personales inexactos o incompletos.",
        d: "Pedir una copia de los datos.",
        correct: "c"
    },
    {
        id: 280,
        q: "La 'Sede Electrónica' de la Diputación de Málaga utiliza para su identificación:",
        a: "Un certificado de sede electrónica o sello electrónico.",
        b: "Una contraseña de administrador.",
        c: "Un código de barras.",
        d: "No necesita identificarse.",
        correct: "a"
    },
    {
        id: 281,
        q: "Los servicios provinciales de la Diputación de Málaga se organizan en:",
        a: "Delegaciones y Áreas de Gobierno.",
        b: "Empresas privadas externas.",
        c: "Solo en el Palacio de la Marina.",
        d: "No tienen organización fija.",
        correct: "a"
    },
    {
        id: 282,
        q: "El Centro de Ediciones de la Diputación de Málaga (CEDMA) se encarga de:",
        a: "La edición de libros, el BOP y publicaciones de interés provincial.",
        b: "Vender periódicos nacionales.",
        c: "La gestión de los colegios de la provincia.",
        d: "La construcción de carreteras.",
        correct: "a"
    },
    {
        id: 283,
        q: "¿Cuál de estos programas es una Base de Datos?",
        a: "Word.",
        b: "Access.",
        c: "PowerPoint.",
        d: "Paint.",
        correct: "b"
    },
    {
        id: 284,
        q: "En un navegador, el 'Historial' sirve para:",
        a: "Ver las noticias del día.",
        b: "Ver la lista de páginas web visitadas anteriormente.",
        c: "Configurar la conexión Wi-Fi.",
        d: "Borrar el disco duro.",
        correct: "b"
    },
    {
        id: 285,
        q: "¿Qué es el 'Spam'?",
        a: "Un tipo de memoria rápida.",
        b: "Correo electrónico no deseado, generalmente con fines publicitarios, enviado de forma masiva.",
        c: "Un componente de la placa base.",
        d: "Un software de diseño gráfico.",
        correct: "b"
    },
    {
        id: 286,
        q: "La 'Atención Primaria' al ciudadano en la Diputación se realiza a través de:",
        a: "La Oficina de Atención al Ciudadano.",
        b: "Solo mediante carta certificada.",
        c: "Los juzgados de guardia.",
        d: "La policía nacional.",
        correct: "a"
    },
    {
        id: 287,
        q: "La Ley 39/2015 establece que el registro electrónico debe ser:",
        a: "Interoperable (que pueda conectarse con otros registros).",
        b: "Manual y en papel.",
        c: "Secreto para los ciudadanos.",
        d: "Solo para empresas con más de 100 empleados.",
        correct: "a"
    },
    {
        id: 288,
        q: "¿Qué es una 'Hoja de Cálculo'?",
        a: "Un programa para escribir cartas.",
        b: "Un software que permite manipular datos numéricos y alfanuméricos en tablas.",
        c: "Un visor de fotos.",
        d: "Un sistema para enviar faxes.",
        correct: "b"
    },
    {
        id: 289,
        q: "La seguridad física en informática se refiere a:",
        a: "Tener un buen antivirus.",
        b: "La protección del hardware ante desastres naturales, robos o sabotajes.",
        c: "No compartir la contraseña.",
        d: "Actualizar el software.",
        correct: "b"
    },
    {
        id: 290,
        q: "El principio de 'Dato Único' significa que:",
        a: "El ciudadano solo tiene un nombre.",
        b: "La administración no debe pedir al ciudadano datos que ya obren en su poder.",
        c: "Solo se puede presentar un documento al día.",
        d: "El presupuesto es solo un número.",
        correct: "b"
    },
    {
        id: 291,
        q: "En Word, la opción 'Guardar como' permite:",
        a: "Cerrar el programa sin guardar.",
        b: "Guardar el archivo con un nombre, formato o ubicación diferentes.",
        c: "Imprimir el documento directamente.",
        d: "Borrar el contenido del archivo.",
        correct: "b"
    },
    {
        id: 292,
        q: "¿Qué es un 'USB'?",
        a: "Un tipo de monitor.",
        b: "Un puerto o conexión estándar para periféricos y dispositivos de almacenamiento.",
        c: "Un lenguaje de programación.",
        d: "Un protocolo de seguridad militar.",
        correct: "b"
    },
    {
        id: 293,
        q: "La ética profesional del auxiliar administrativo implica:",
        a: "Contar los asuntos del Ayuntamiento a los amigos.",
        b: "La reserva, el respeto a la legalidad y la atención eficiente al público.",
        c: "Hacer los trámites más lentos si no le cae bien el ciudadano.",
        d: "No usar el ordenador.",
        correct: "b"
    },
    {
        id: 294,
        q: "¿Qué es el 'Software Libre'?",
        a: "Software que es gratis siempre.",
        b: "Software que respeta la libertad de los usuarios para ejecutar, copiar, estudiar, cambiar y mejorar el programa.",
        c: "Software que no tiene virus.",
        d: "Software que solo funciona en Linux.",
        correct: "b"
    },
    {
        id: 295,
        q: "La Sede Electrónica debe disponer de un sistema de:",
        a: "Verificación de los certificados de la sede.",
        b: "Pago de multas solo en criptomonedas.",
        c: "Chat para juegos.",
        d: "No necesita sistemas adicionales.",
        correct: "a"
    },
    {
        id: 296,
        q: "El derecho a la información pública puede ser limitado por:",
        a: "La seguridad nacional o la protección de datos personales.",
        b: "El capricho del funcionario.",
        c: "Que la información sea muy aburrida.",
        d: "No puede ser limitado nunca.",
        correct: "a"
    },
    {
        id: 297,
        q: "Un 'Proyector' es un periférico de:",
        a: "Entrada.",
        b: "Salida.",
        c: "Almacenamiento.",
        d: "Procesamiento.",
        correct: "b"
    },
    {
        id: 298,
        q: "La Ley de Protección de Datos prohíbe el tratamiento de datos que revelen:",
        a: "La dirección postal.",
        b: "El origen étnico, opiniones políticas o convicciones religiosas (salvo excepciones legales).",
        c: "El número de teléfono móvil.",
        d: "El nombre y apellidos.",
        correct: "b"
    },
    {
        id: 299,
        q: "En Excel, las columnas se identifican con:",
        a: "Números.",
        b: "Letras.",
        c: "Símbolos.",
        d: "Colores.",
        correct: "b"
    },
    {
        id: 300,
        q: "La firma electrónica se basa en la criptografía de:",
        a: "Clave única.",
        b: "Clave pública y clave privada (asimétrica).",
        c: "Códigos de barras.",
        d: "Letras griegas.",
        correct: "b"
    },
    {
        id: 301,
        q: "¿Qué es el 'Ancho de Banda'?",
        a: "El tamaño del monitor.",
        b: "La capacidad de transmisión de datos de una conexión de red.",
        c: "El peso del ordenador.",
        d: "La cantidad de teclas del teclado.",
        correct: "b"
    },
    {
        id: 302,
        q: "El principio de 'Eficacia' en la Administración significa:",
        a: "Gastar mucho dinero.",
        b: "Lograr los objetivos y resultados fijados.",
        c: "Tardar mucho en responder.",
        d: "No hacer nada.",
        correct: "b"
    },
    {
        id: 303,
        q: "La 'Carpeta Ciudadana' permite:",
        a: "Comprar ropa online.",
        b: "Acceder en un solo punto a la información sobre sus expedientes en distintas administraciones.",
        c: "Guardar documentos de papel en casa.",
        d: "Enviar correos a los vecinos.",
        correct: "b"
    },
    {
        id: 304,
        q: "En Word, para insertar una tabla se debe ir a la pestaña:",
        a: "Inicio.",
        b: "Insertar.",
        c: "Diseño de página.",
        d: "Referencias.",
        correct: "b"
    },
    {
        id: 305,
        q: "Un 'Router' sirve para:",
        a: "Imprimir documentos.",
        b: "Interconectar redes de ordenadores y gestionar el tráfico de datos.",
        c: "Escanear fotos.",
        d: "Enfriar la CPU.",
        correct: "b"
    },
    {
        id: 306,
        q: "La transparencia pasiva es el derecho de los ciudadanos a:",
        a: "Ver la televisión pública.",
        b: "Solicitar y obtener información pública que no esté publicada en el portal.",
        c: "No pagar impuestos.",
        d: "Votar cada cuatro años.",
        correct: "b"
    },
    {
        id: 307,
        q: "¿Qué es la 'Propiedad Intelectual' del software?",
        a: "El derecho a copiarlo gratis.",
        b: "La protección legal de los derechos de los autores sobre sus programas.",
        c: "El precio de la licencia.",
        d: "La marca del ordenador.",
        correct: "b"
    },
    {
        id: 308,
        q: "La firma electrónica tiene por objeto garantizar:",
        a: "La autenticidad, integridad y el no repudio.",
        b: "Que el ordenador no se rompa.",
        c: "Que la conexión a internet sea rápida.",
        d: "Que el papel no se moje.",
        correct: "a"
    },
    {
        id: 309,
        q: "En Windows, la combinación de teclas Ctrl + Alt + Supr sirve para:",
        a: "Apagar el monitor.",
        b: "Acceder al administrador de tareas o opciones de seguridad.",
        c: "Imprimir el documento.",
        d: "Subir el volumen.",
        correct: "b"
    },
    {
        id: 310,
        q: "El derecho a la limitación del tratamiento permite:",
        a: "Que los datos sean borrados.",
        b: "Que el tratamiento de los datos se suspenda en determinadas condiciones.",
        c: "Que se publiquen en el BOE.",
        d: "Que se envíen a otro país.",
        correct: "b"
    },
    {
        id: 311,
        q: "Una 'Red Social' corporativa en la Administración busca:",
        a: "Que los empleados pierdan el tiempo.",
        b: "Fomentar la colaboración, comunicación e intercambio de conocimiento entre empleados.",
        c: "Sustituir al registro oficial.",
        d: "Publicar fotos de vacaciones.",
        correct: "b"
    },
    {
        id: 312,
        q: "En Excel, un 'Libro' es:",
        a: "Un manual de ayuda.",
        b: "El archivo que contiene una o varias hojas de cálculo.",
        c: "La impresora.",
        d: "Una fórmula compleja.",
        correct: "b"
    },
    {
        id: 313,
        q: "El servicio de 'Notificaciones Electrónicas' requiere:",
        a: "Que el ciudadano tenga un buzón físico más grande.",
        b: "Que el ciudadano disponga de una dirección electrónica habilitada o acceda a la sede.",
        c: "Que el ciudadano sepa hablar inglés.",
        d: "No requiere nada especial.",
        correct: "b"
    },
    {
        id: 314,
        q: "La 'Brecha Digital' es:",
        a: "Una rotura en el cable de fibra óptica.",
        b: "La desigualdad en el acceso, uso o impacto de las TIC entre distintos grupos sociales.",
        c: "Un error de Windows.",
        d: "La distancia entre dos ordenadores.",
        correct: "b"
    },
    {
        id: 315,
        q: "El objetivo final de la Administración Electrónica es:",
        a: "Obligar a todos a usar ordenadores.",
        b: "Ofrecer mejores servicios, más rápidos, eficaces y cercanos al ciudadano.",
        c: "Ahorrar papel únicamente.",
        d: "Que no haya funcionarios en las oficinas.",
        correct: "b"
    }
];               
