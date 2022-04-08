<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10">
      <v-card class="pa-4 my-4 pb-1">
        <p class="text-h4 mb-1">
          Analyse des programmes des candidats
        </p>
        <p class="overline pt-2 pb-1 text--secondary">
          Analyse basée sur les programmes des candidats et un briefing de l'IFRI
          <a
            href="https://www.ifri.org/fr/publications/briefings-de-lifri/souverainete-numerique-bilan-quinquennat-propositions-candidats"
            target="_blank"
            class="text-decoration-none"
          >
            <v-icon small class="mb-1">
              mdi-information-outline
            </v-icon>
          </a>
        </p>
        <div class="text-justify">
          <p>
            Curieux de mieux comprendre les promesses des candidats aux élections présidentielles de 2022 ?
            Cette page regroupe les éléments clés des programmes des différents candidats ainsi que des pistes de regard critique sur les propositions.
          </p>
          <ColabParagraph
            page-specific-text="Malgré nos efforts d'objectivité, certaines remarques peuvent être jugées subjectives : les retours sont les bienvenus."
          />
          <p>
            Globalement, le constat est bon puisque les candidats adoptent tous une vision maximaliste de la souveraineté numérique
            en englobant protection des données et volet industriel / économique.
            Il y a également un consensus sur le fait que les acteurs chinois doivent, comme les autres, se soumettre au droit européen.
          </p>
          <p>
            Pour apporter un regard critique sur ces positions enthousiastes, il convient de réellement penser la faisabilité des propositions en termes de lois et règlements (notamment européennes) et d'efficacité pour les acteurs et citoyens.
            En outre, en dépit d'une mention systématique de la nécessité de limiter la puissance des géants du Net américains et chinois,
            la souveraineté numérique n'apparait pas dans les programmes comme un enjeu stratégique structurant pour la politique étrangère et de défense (enjeux de sécurité, gouvernance internationale, relations États-Unis/Chine, etc.).
            Enfin, il est rarement fait notion de la montée en puissance de la Chine dans le domaine malgré le fait que son modèle de valeur soit encore plus éloigné du nôtre que le modèle américain.
          </p>
          <p>
            Afin de rentrer plus en détails dans les propositions des différents candidats, nous avons parcouru leurs programmes et regroupé cinq propositions saillantes pour chacun d'entre eux.
            En cliquant sur la photo d'un candidat, vous trouverez le lien vers son programme ainsi que ses cinq propositions clées avec le lien vers la page du programme la détaillant. Pour chacune des propositions,
            une couleur indique l'intensité du lien avec la question de la souveraineté numérique (vert = très lié, bleu = lié, gris = non lié mais dans le domaine numérique).
            Les titres et les détails des propositions sont directement extraits des programmes et toute modification est indiquée entre crochets.
          </p>
          <div>
            <v-row class="my-4 d-flex justify-space-between">
              <v-col
                v-for="(program, i) in programs"
                :key="i"
                cols="auto"
              >
                <v-avatar
                  size="84"
                  @click="select(i)"
                >
                  <v-img
                    :src="program.image"
                    :alt="program.name"
                    position="center top"
                  />
                </v-avatar>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-card>
      <v-card class="px-4 pb-4 my-4">
        <div v-if="selected === null" class="pt-4">
          Veuillez cliquer sur l'image du candidat dont vous voulez connaître le programme autour de la souveraineté numérique
        </div>
        <div v-else>
          <v-fade-transition
            v-for="(p, i) in programs"
            :key="i"
            hide-on-leave
          >
            <div
              v-show="i === selected"
            >
              <v-row align="center" class="spacer" no-gutters>
                <v-avatar class="ml-3" size="56">
                  <v-img :src="p.image" :alt="p.name" position="center top" />
                </v-avatar>
                <v-col cols="auto">
                  <v-card-title>{{ p.name }}</v-card-title>
                  <v-card-subtitle>{{ p.party }}</v-card-subtitle>
                </v-col>
                <v-col cols="auto" order-sm="last" class="ml-auto">
                  <v-btn elevation="4" fab :href="p.link" target="_blank" class="mr-2">
                    <v-icon>
                      mdi-newspaper-variant-multiple-outline
                    </v-icon>
                  </v-btn>
                </v-col>
                <v-col style="text-align: center;">
                  <v-card-title class="justify-center">
                    {{ p.mentions }} mentions
                  </v-card-title>
                  <v-card-subtitle>du mot "numérique" dans le programme</v-card-subtitle>
                </v-col>
              </v-row>
              <v-divider :class="{ 'pb-2': p.infos }" />
              <div>
                <div class="text-justify" v-html="p.infos" />
                <v-card-title>
                  Propositions
                </v-card-title>
                <v-alert
                  v-for="measure in p.measures"
                  :key="measure.proposition"
                  border="left"
                  :color="measureColor(measure.tier)"
                  text
                  dense
                >
                  <p class="overline mb-1 font-weight-bold">
                    • {{ measure.proposition }}
                    <EuropeFlagIcon v-if="measure.eu" class="mb-1 ml-1" />
                    <v-btn
                      text
                      icon
                      x-small
                      class="mb-1"
                      :href="getLink(p, measure)"
                      target="_blank"
                    >
                      <v-icon small>
                        mdi-clipboard-search-outline
                      </v-icon>
                    </v-btn>
                  </p>
                  <v-divider class="pb-2" />
                  <p class="body-2 text--secondary mb-0 text-justify">
                    {{ measure.details }}
                  </p>
                </v-alert>
              </div>
              <div hidden>
                <v-card-title>
                  Regards critiques
                </v-card-title>
                <p v-for="limit in p.limits" :key="limit">
                  {{ limit }}
                </p>
              </div>
            </div>
          </v-fade-transition>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      selected: null,
      programs: [{
      /*
        name: 'Anne Hidalgo',
        party: 'Parti Socialiste',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Anne_Hidalgo%2C_f%C3%A9vrier_2014.jpg/440px-Anne_Hidalgo%2C_f%C3%A9vrier_2014.jpg',
        link: '/programs/hidalgo.pdf',
        mentions: 14,
        infos: 'Anne Hidalgo ne fournit pas de programme spécifique pour le numérique mais égrène son programme principal de propositions liées au numérique. Nous avons ci-dessous repris les 5 propositions principales les plus liées à la souveraineté numérique.',
        measures: [{
          proposition: 'Déployer les pédagogies ouvertes et inclusives',
          details: 'Pour préparer nos enfants au monde dans lequel ils vivront, l’école doit être au rendez-vous par de nouvelles pédagogies : [...], apprendre les nouveaux langages du numérique, apprendre à s’informer, etc.',
          page: 21,
          tier: 1
        }, {
          proposition: 'Lancer quatre grandes odyssées industrielles de demain autour de l’économie de la vie',
          details: 'La réindustrialisation de la France est indispensable pour recréer des emplois de qualité, redynamiser nos territoires, soutenir notre effort de recherche et l’innovation et garantir notre indépendance. Nous organiserons cet effort national autour de quatre grandes odyssées, qui correspondent aux grands besoins actuels et futurs (économie de la vie) de la société : la santé, l’énergie, la mobilité et le numérique, comme vaincre les maladies dégénératives à horizon 2035 ou atteindre l’autonomie énergétique décarbonée en 2050.',
          page: 33,
          tier: 1
        }, {
          proposition: 'Redémarrer les capacités de recherche et d’innovation de la France',
          details: 'En 2027, nous aurons rattrapé notre retard en R&D, avec un effort atteignant 3 % du PIB à la fin du quinquennat. Dans cet effort, la recherche publique sera privilégiée, en particulier dans les secteurs relatifs aux quatre odyssées stratégiques (santé, énergie, mobilité et numérique).',
          page: 34,
          tier: 1
        }, {
          proposition: 'L’Europe est l’instrument de notre souveraineté',
          details: 'Elle est un atout puissant pour maîtriser notre avenir face aux grands défis auxquels tous les Européens sont confrontés : changement climatique et crise de la biodiversité, crises sanitaires et alimentaires, influence des multinationales et notamment des géants du numérique mais aussi défis géopolitiques. [...] L’Europe est aujourd’hui clairement l’instrument de notre souveraineté.',
          page: 37,
          eu: true,
          tier: 2
        }, {
          proposition: 'Adapter les règles budgétaires de l’UE aux défis du XXIe siècle',
          details: 'Pour être à la hauteur de l’enjeu, l’Union doit être dotée de nouvelles ressources propres afin que son budget soit renforcé : taxe sur les transactions financières et sur les géants du numérique, [...].',
          page: 37,
          eu: true,
          tier: 2
        }],
        limits: [
          'limit',
          'limit2'
        ]
      }, {
      */
        name: 'Marine Le Pen',
        party: 'Rassemblement National',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Le_Pen%2C_Marine-9586_%28cropped%29.jpg/440px-Le_Pen%2C_Marine-9586_%28cropped%29.jpg',
        link: '/programs/le-pen-num.pdf',
        mentions: 25,
        infos: "Bien qu'aucune mention ne soit faite du numérique dans son <a href='/programs/le-pen.pdf'>programme principal</a>, Marine Le Pen propose un programme spécifique sur le numérique d'une dizaine de pages. " +
          "\"<em>Parvenir à la souveraineté numérique</em>\" est d'ailleurs le premier des 5 propositions présentées dans le document." +
          '<br/><br/>Le constat de la remise en cause de notre souveraineté numérique y est fait selon 4 axes : ' +
          'exploitation de nos données par des acteurs étrangers, dépendance aux étrangers dans le domaine de la sécurité, ' +
          'concurrence numérique déséquilibrée et risques cybers.',
        measures: [{
          proposition: 'Parvenir à la souveraineté numérique',
          details: 'Favoriser l’émergence d’acteurs français ou européens dans tous les domaines du numérique. ' +
            'Cela passe par davantage de recherche scientifique, par des aides ciblées en faveur des entreprises du numérique, ' +
            'mais aussi par la priorité à donner aux fournisseurs français ou européens. Cela se traduira par : ' +
            'un recours exclusif à des fournisseurs français pour la commande publique dans les domaines militaires et de sécurité nationale, ' +
            'et pour le reste de la commande publique, une priorité accordée à des fournisseurs européens [...], ' +
            'le contrôle strict [...] [du rachat] des entreprises françaises de pointe du secteur du numérique stratégique [...], ' +
            "la mise en place d’une fiscalité juste, au niveau de l’Union européenne ou de l'O.C.D.E. [...] et " +
            'le contrôle accru du respect intégral, par les entreprises étrangères, du droit français et européen [...]. ' +
            "[Ces mesures s'appuieront sur des collaborations européennes (cloud & telecom notamment) et sur un Fonds souverain français.]",
          page: 6,
          tier: 1
        }, {
          proposition: 'Imposer le respect de la loi française aux acteurs du numérique',
          details: ' Collaborer avec les services de police, de justice et de gendarmerie dans le cadre d’enquêtes ayant trait au harcèlement en ligne, à la diffamation, à la contrefaçon [...], ' +
            'respecter strictement le droit européen et français en matière de protection des données personnelles, ' +
            'ne plus imposer leur censure sur les contenus qu’ils diffusent en fonction de leurs propres règles [...], ' +
            'mettre un terme à toutes leurs pratiques anticoncurrentielles, ' +
            'accorder le statut de salariés aux chauffeurs et livreurs des plateformes numériques [...], ' +
            'payer en France des impôts correspondant à l’activité qu’ils y ont et aux profits qu’ils y font [...] et ' +
            'imposer, lorsque c’est nécessaire, par impératif stratégique ou en sanction de la violation de nos règles, aux entreprises étrangères exerçant en France une ouverture de capital, une cession partielle de leurs activités [...].',
          page: 9,
          tier: 1
        }, {
          proposition: 'Rendre obligatoire l’hébergement des données [françaises] [...] en France ou dans l’[UE], par des opérateurs français ou européens',
          details: 'Les principes régissant la collecte de ces données personnelles seront renforcés' +
            ' en facilitant l’intelligibilité et le paramétrage du consentement à leur prélèvement ainsi qu’à la publicité ciblée, ' +
            'la règle étant leur désactivation par défaut, et leur interdiction totale lorsque l’usager est mineur. ' +
            'Les prestataires européens ayant besoin de données pour nourrir leurs algorithmes, ' +
            'je propose que leur nationalité leur permette un droit de traitement des données par défaut ' +
            'là où des prestataires étrangers devront apporter des garanties supplémentaires pour exercer ce droit.',
          page: 10,
          ue: true,
          tier: 1
        }, {
          proposition: 'Renforcer la cybersécurité et maîtriser le cyberespace',
          details: 'Pour garantir un haut niveau de sécurité dans le cyberespace aux Français et aux entreprises, ' +
            'je renforcerai la cybersécurité nationale dans toutes ses dimensions : infrastructures, matériels, logiciels, capacités de détection d’attaques, formations spécialisées et sensibilisation du public. [...] ' +
            'Je renforcerai les capacités de l’Agence nationale de la sécurité des systèmes d’information (A.N.S.S.I.), ' +
            'ceux de la Direction générale de la sécurité extérieure (D.G.S.E.) et les capacités militaires dans ce domaine, ' +
            'et je créerai des « commandos numériques » chargés à la fois de réagir à des attaques contre des services informatiques (neutralisation et contre-attaque) ' +
            'et de mener des simulations d’offensives numériques pour éprouver la sécurité de nos services.',
          page: 12,
          tier: 2
        }, {
          proposition: 'Réduire la fracture numérique',
          details: 'Une meilleure couverture du territoire [...], ' +
            'un accroissement de nos capacités de formation au numérique, tant dans les filières de pointe que dans l’initiation, ' +
            'une politique volontariste de lutte contre l’illectronisme [...] et ' +
            'maintenir des présences physiques de fonctionnaires ou agents des services publics [...].',
          page: 7,
          tier: 2
        }],
        limits: [
          'limit',
          'limit2'
        ]
      }, {
        name: 'Emmanuel Macron',
        party: 'La République en marche',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Emmanuel_Macron_in_2019.jpg/220px-Emmanuel_Macron_in_2019.jpg',
        link: '/programs/macron.pdf',
        infos: 'La question de la souveraineté numérique n\'apparaît pas dans le programme principal d\'Emmanuel Macron. ' +
          "Néanmoins, dans son <a href='https://avecvous.fr/notre-action/numerique' target='_blank'> bilan thématique relatif au numérique</a>, " +
          'des actions visant à "mieux réguler les grandes entreprises du numérique" ont été mises en avant (DSA / DMA, accord OCDE en matière de fiscalité, ...).' +
          ' En outre, si le sujet ne semble pas directement porté par le candidat, le ministère' +
          ' de l\'Économie, dans le cadre de la présidence française du Conseil de l\'Union européenne, a organisé les 7 et 8 février' +
          ' derniers une conférence intitulée "Construire la souveraineté numérique de l’Europe". Cependant, il convient de noter que peu' +
          ' d\'industriels européens du cloud ont été invités à participer à ce colloque.',
        mentions: 9,
        measures: [{
          proposition: 'Assurer la puissance de l’Europe',
          details: 'Assurer son autonomie\n' +
            'technologique, en investissant pour\n' +
            'développer ses champions,\n' +
            'en se protégeant dans les domaines\n' +
            'les plus stratégiques, en se dotant\n' +
            'des infrastructures essentielles,\n' +
            'comme un « cloud » et une constellation de satellites.',
          page: 12,
          eu: true,
          tier: 1
        }, {
          proposition: 'Rendre notre société plus résiliente',
          details: 'Une augmentation des moyens\n' +
            'de l’Agence nationale de la sécurité\n' +
            'des systèmes d’information pour\n' +
            'renforcer la capacité de lutte\n' +
            'et de soutien cyber aux entreprises\n' +
            'françaises.',
          page: 12,
          tier: 2
        }, {
          proposition: 'Une France créative et productive (volet numérique)',
          details: 'Généraliser l’enseignement\n' +
            'du code informatique et des usages\n' +
            'numériques à partir de la 5e.\n' +
            ' Transformer l’État par le numérique\n' +
            ' : «TousAntiCovid» a montré\n' +
            'comment les procédures pouvaient\n' +
            'ainsi être simplifiées.\n' +
            ' 20000 accompagnateurs\n' +
            'pour aider les Français qui en ont\n' +
            'besoin dans la maîtrise des outils\n' +
            'numériques et leurs démarches\n' +
            'quotidiennes.',
          page: 9,
          tier: 2
        }, {
          proposition: 'Une France créative et productive (volet culture)',
          details: 'Un investissement pour construire\n' +
            'des métavers européens et proposer\n' +
            'des expériences en réalité virtuelle,\n' +
            'autour de nos musées, de notre\n' +
            'patrimoine et de nouvelles créations,\n' +
            'en protégeant les droits d’auteur\n' +
            'et droits voisins.',
          page: 9,
          eu: true,
          tier: 3
        }, {
          proposition: 'Simplifier la vie',
          details: 'Achever la couverture numérique du territoire par la fibre d\'ici 2025.',
          page: 6,
          tier: 3
        }],
        limits: [
          'limit',
          'limit2'
        ]
      }, {
        name: 'Jean-Luc Mélenchon',
        party: 'L\'Union populaire',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Jean_Luc_MELENCHON_in_the_European_Parliament_in_Strasbourg%2C_2016_%28cropped%29.jpg/220px-Jean_Luc_MELENCHON_in_the_European_Parliament_in_Strasbourg%2C_2016_%28cropped%29.jpg',
        link: '/programs/melenchon.pdf',
        mentions: 22,
        infos: 'La synthèse du programme de Jean-Luc Mélenchon n\'accorde que peu de place à la question du numérique (5 mentions) et ne mentionne pas le sujet de la souveraineté numérique.' +
          ' En revanche, le <a href=\'https://laec.fr/\'>programme complet</a> mentionne (à la toute fin cependant) la question de la souveraineté numérique. Dans la section correspondante,' +
          ' les logiciels libres apparaissent comme un moyen clé pour réduire notre dépendance vis-à-vis des GAFAM. Nous n\'avons cependant pu repérer que 3 propositions en lien avec la souveraineté numérique.',
        measures: [{
          proposition: 'Garantir la souveraineté numérique de la France',
          details: 'Créer une agence publique des logiciels libres chargée de planifier leur développement stratégique domaine par domaine en identifiant les manques et en finançant les projets-clés.' +
            ' Permettre à tous les citoyens et à toutes les entreprises l\'accès à des services et logiciels en ligne hébergés sur des serveurs français de droit français.' +
            ' Garantir l’hébergement des données des services publics français et des entreprises essentielles sur des serveurs de droit français situés en France.' +
            ' Rétablir la propriété française publique sur Alcatel Submarine Networks. ' +
            ' Garantir la neutralité du Net, c’est à dire l’accès égal de chacun et l’égalité de traitement.',
          page: 10,
          tier: 1
        }, {
          proposition: 'Affirmer le caractère d\'intérêt général de la révolution numérique',
          details: 'Constitutionnaliser le droit au chiffrement des données et des communications.' +
            ' Aller plus loin que le règlement européen de protection des données pour agir contre les discriminations entraînées par le traitement algorithmique des données personnelles, en dotant la Commission nationale de l’informatique et des libertés (CNIL) de moyens de contrôle efficaces.' +
            ' Garantir le droit à un accès minimal gratuit à Internet.',
          page: 10,
          tier: 2
        }, {
          proposition: 'Construire une défense indépendante, républicaine et populaire',
          details: 'Mobiliser l’espace numérique et la réalité spatiale pour installer des systèmes défensifs et non létaux contre les agressions et pour la paix.',
          page: 10,
          tier: 2
        }],
        limits: [
          'Inutile d\'héberger les données en France si la pile logicielle n\'est pas maîtrisée',
          'Question du lien entre logiciel libre et souveraineté (taille de communauté, etc.)',
          'Question de l\'attractivité vis-à-vis des talents pour l\'agence de développement'
        ]
      }, {
        name: 'Valérie Pécresse',
        party: 'Les Républicains',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Val%C3%A9rie_P%C3%A9cresse_%282022%29_%28cropped_2%29.jpg/220px-Val%C3%A9rie_P%C3%A9cresse_%282022%29_%28cropped_2%29.jpg',
        link: '/programs/pecresse-num.pdf',
        mentions: 33,
        infos: "Valérie Pécresse <a href='/programs/pecresse.pdf#page=12' target='_blank'>mentionne directement la souveraineté numérique</a> dans son programme principal. Présenté comme l'un des 4 axes permettant de \"<em>garantir notre souveraineté</em>\", " +
          "la souveraineté numérique passe principalement par la formation de talents (1 millions d'ici 2030 dont 50 000 fonctionnaires), la commande publique et un cloud français." +
          '<br/><br/>En plus de cette courte mention dans son programme principal, son programme numérique détaillé a également été analysé. Dès son introduction, le lien entre numérique et souveraineté est fortement mis en avant : ' +
          '"<em>Valérie Pécresse souhaite construire un modèle numérique français, basé sur nos valeurs fondamentales : responsable, moteur d’une souveraineté retrouvée et condition de la fierté française du 21ème siècle. Nous affirmerons le numérique comme un sujet régalien et de souveraineté.</em>"',
        measures: [{
          proposition: 'Protéger les données stratégiques des Français et de l’Etat grâce à une loi relative à la souveraineté et à la responsabilité numérique',
          details: 'Se donner les moyens de disposer d’un cloud souverain [...], ' +
            'instaurer une préférence française et européenne dans la commande publique grâce à des quotas progressifs [...], avec objectif de 50% en 2027, ' +
            'permettre aux acteurs français du numérique d’investir au même niveau que leurs concurrents étrangers en utilisant la précommande publique [...] et ' +
            'créer un Parquet National Cyber pour lutter contre les cyberattaques.',
          page: 2,
          tier: 1
        }, {
          proposition: 'Former les talents et libérer l’écosystème numérique sur tout le territoire',
          details: 'Former un million de talents au numérique d’ici 2030 : ' +
            'organiser un test national annuel sur le « potentiel numérique » de tous les élèves de seconde [...], ' +
            'développer des parcours de formations initiales [...] et  ' +
            'créer une Ecole Nationale du Numérique [...]. ' +
            'Accélérer et amplifier l’émergence de 200 usines dans les nouvelles filières et consolider 20 licornes industrielles d’ici 2027.',
          page: 3,
          tier: 1
        }, {
          proposition: 'Intégrer le numérique dans l’éducation de nos enfants en les protégeant des risques associés',
          details: 'Intégrer le codage dans les programmes scolaires dès la 6ème et ' +
            'adopter une loi « Protection de l’enfance face aux menaces du numériques » : ' +
            'créer l’équivalent du « Children’s code » britannique [...] et ' +
            'ouvrir la réflexion sur la fin de l’anonymat [...].',
          page: 4,
          tier: 2
        }, {
          proposition: 'Mettre le numérique au service des territoires et garantir l’égalité d’accès pour tous les Français',
          details: 'Accélérer le déploiement du Très Haut Débit (THD) fixe et mobile [...], ' +
            'mettre fin aux zones blanches [...].',
          page: 3,
          tier: 3
        }, {
          proposition: 'Accélérer la transition écologique grâce au numérique',
          details: 'Créer un Green Data Hub pour faciliter le croisement des données environnementales [...] et ' +
            'soutenir une grande filière de la réparation et du reconditionnement des équipements informatiques [...] : ' +
            'Instaurer un Chèque Récupération [...] et ' +
            'Imposer l’ouverture du marché des pièces détachées aux constructeurs et des manuels techniques.',
          page: 3,
          tier: 3
        }],
        limits: [
          'limit',
          'limit2'
        ]
      }, {
        name: 'Éric Zemmour',
        party: 'Reconquête',
        image: 'https://media.ouest-france.fr/v1/pictures/eb3571f71fd10440dbd3868a237b9964-zemour.jpg?client_id=cmsfront&sign=e2500686c72d48627f11d43cb7ea9a8042bc12263263fee922f0de2fd216065e',
        link: '/programs/zemmour.pdf#page=37',
        infos: 'Si Éric Zemmour ne propose pas de programme spécifique pour le numérique, deux pages de son programme principal sont consacrées au sujet de la souveraineté numérique qui est présenté comme le' +
          ' moyen de "<em>Faire du numérique un outil de prospérité et de rayonnement pour la France</em>".' +
          '<br/><br/>Dénonçant une vassalisation numérique, notamment à l\'égard' +
          ' des « fleurons technologiques » américains et chinois, le candidat prône un recours à la commande publique pour "<em>faire émerger des solutions françaises ' +
          ' souveraines dans le cloud et la cybersécurité</em>". Pour tendre vers cet objectif, le candidat mentionne également les sujets de la formation et de l\'attractivité des talents' +
          ' "<em>que ces sociétés étrangères nous arrachent</em>".',
        mentions: 16,
        measures: [{
          proposition: 'Créer les conditions de notre souveraineté numérique',
          details: 'Faire émerger des solutions françaises souveraines dans le cloud et la cybersécurité et investir dans les\n' +
            'technologies de rupture (en particulier intelligence artificielle, ordinateur quantique et semi-conducteurs).' +
            ' Imposer par la loi que les données sensibles des Français ainsi que les données stratégiques de l’État et\n' +
            'du secteur privé soient hébergées et sécurisées en France sur des solutions souveraines.',
          page: 37,
          tier: 1
        }, {
          proposition: 'Soutenir les champions français du numérique à tous les stades de leur développement',
          details: 'Permettre aux Français d’investir sans aucune fiscalité dans les start-ups et entreprises innovantes en créant un Livret Innovation.\n' +
            'Permettre aux créateurs de start-ups de se financer sans perdre le contrôle de leur entreprise et attirer\n' +
            'les introductions en bourse sur la place de Paris en autorisant deux classes d’actions en bourse à droits de\n' +
            'vote différents. Permettre aux jeunes entreprises du numérique d’impliquer et de retenir les talents en élargissant les\n' +
            'conditions de l’actionnariat salarié.',
          page: 37,
          tier: 2
        }, {
          proposition: 'Doter la France des moyens de son ambition numérique',
          details: 'Garantir une connexion haut débit à chaque Français et chaque entreprise sur tout le territoire. Permettre à tout citoyen de faire toutes ses démarches administratives sur Internet en accélérant la\n' +
            'numérisation des services de l’État et la mise à disposition des données. Pourvoir à la demande croissante d’emplois dans le numérique en donnant une place de choix à\n' +
            'l’enseignement de la programmation informatique dès le secondaire. ',
          page: 38,
          tier: 2
        }, {
          proposition: 'Accélérer les investissements dans la blockchain et le Web3 tout en créant un environnement favorable à la détention et la création de crypto-actifs',
          details: 'Exonérer d’impôts sur la plus-value les cessions de crypto-actifs dès lors qu’au moins 50% de cette plus-value' +
            ' est réinvestie dans le capital d’une entreprise de l’économie réelle. Ne pas laisser le monopole des stablecoins à des entités extra-européennes en favorisant l’émergence de\n' +
            '« stablecoins » euro par le secteur privé européen sans attendre le projet d’euro numérique porté par la Banque\n' +
            'centrale européenne.',
          page: 38,
          tier: 2
        }, {
          proposition: 'Protéger les enfants et les adolescents des effets néfastes d’Internet',
          details: 'Mieux protéger les enfants et les adolescents contre le harcèlement, la pédophilie et l’incitation à la\n' +
            'violence en organisant des « États généraux des réseaux sociaux et numériques ».\n' +
            ' Lutter contre l’exposition des enfants et des mineurs aux sites violents et pornographiques en instaurant\n' +
            'par la loi l’activation par défaut du contenu protégé et du contrôle parental sur les appareils numériques.',
          page: 46,
          tier: 3
        }],
        limits: [
          'limit',
          'limit2'
        ]
      }]
    }
  },
  head: {
    title: 'Analyse des programmes'
  },
  methods: {
    select (i) {
      this.selected = i
    },
    measureColor (tier) {
      return tier === 1 ? 'green' : (tier === 2 ? 'blue' : 'grey')
    },
    getLink (program, measure) {
      return measure.link ?? program.link + '#page=' + measure.page
    }
  }
}
</script>

<style scoped>

</style>
