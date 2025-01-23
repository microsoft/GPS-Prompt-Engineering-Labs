---
layout: custom
title: "Hands-on-Lab (Deutsch)"
subtitle: "HSG Alumni"
authors: ["Florian Follonier & Juan Manuel Servera - Microsoft"]
permalink: /prompt-engineering-de
---

<div class="section" markdown="1">
Von Florian Follonier - Cloud Solution Architect Data & AI - Microsoft

& Juan Manuel Servera - Cloud Solution Architect App Innovation - Microsoft

## Einleitung

<div class="step" markdown="1">
Willkommen im Prompt-Engineering Hands-on-Lab!

Wir haben diesen Leitfaden entwickelt, um Dir zu helfen, den KI-Begleiter von Microsoft, Copilot, auf praktische und ansprechende Weise zu verstehen und zu nutzen.

In diesem Lab werden wir die Welt der KI-gestützten Chats erkunden. Wir werden verschiedene Arten von Prompts anwenden und lernen, wie man ein KI-Sprachmodell dazu bringt, verschiedene Aufgaben auszuführen und gewünschten Inhalt zu generieren. Die Übungen sind praxisorientiert, sodass Du durch Ausprobieren und Anwenden lernst und Dir neue Fähigkeiten aneignest.

Unser Ziel ist es, Dir die Fähigkeiten und das Verständnis zu vermitteln, KI-Tools wie Copilot effektiv in Deinen eigenen Projekten einzusetzen, sei es für geschäftliche, bildungsbezogene oder persönliche Zwecke.

In der ersten Übung lernst Du, wie Copilot funktioniert, indem wir einfache Prompts verwenden. In der zweiten Übung nutzen wir Copilot, um verschiedene Inhalte für ein fiktives Raumfahrt-Startup zu erstellen. Dazu gehört die Generierung eines Firmennamens, die Beschreibung einer Firmenvision, eines Logos und sogar eines Geschäftsplans. Dazu nutzen wir verschiedene Prompt-Techniken.

Am Ende dieses Labs wirst Du ein umfassendes Verständnis dafür haben, wie man KI-Sprachmodelle nutzt und sie instruiert, und wie sie sich als leistungsstarkes Werkzeug in Projekten einsetzen lassen.

Nun lass uns mit der ersten Übung beginnen!

</div>
</div>

<div class="section" markdown="1">

## Übung 1 – Warmup mit grundlegenden Prompts

<div class="step" markdown="1">
Für diese Übung nutzen wir Microsoft Copilot, Deinen täglichen KI-Begleiter, der einen KI-gestützten Chat bereitstellt, der bei einer Vielzahl von Aufgaben helfen kann. Du findest Copilot unter: <https://www.bing.com/chat> Wir beginnen mit einem Brainstorming und konfigurieren daher den Gesprächsstil auf „**Kreativer**“. Wie Linus Pauling einmal sagte:

> Die beste Möglichkeit, eine gute Idee zu haben, ist, viele Ideen zu haben.

![Screenshot von Copilot im Web.](./img/Copilot%20in%20desktop.png)

_Wenn du für diese Übung den mobilen Browser nutzt, siehst Du möglicherweise eine andere Benutzeroberfläche und Copilot fordert Dich möglicherweise zur Eingabe von Anmeldedaten auf. Du kannst Dein Microsoft-Konto verwenden, um Dich anzumelden und die Übung fortzusetzen._

> Während dieses Labs musst Du mehr als die grundlegenden 4 Fragen stellen, die Du mit einem nicht authentifizierten Konto stellen kannst, und mehr als die 10 Fragen, die Du stellen kannst, wenn Du nicht den Edge-Browser verwendest. Um das beste Erlebnis mit diesem Lab zu erzielen, befolge bitte diese Anweisungen:
>
> - Falls Du noch kein Konto hast, erstelle ein Microsoft-Konto; jedes Outlook-, Hotmail- oder Live-Konto funktioniert und es ist kostenlos, eines zu erstellen: [Microsoft-Konto \| Melden Sie sich an oder erstellen Sie Ihr Konto noch heute – Microsoft](https://account.microsoft.com/account/CreateAccount). Beachte, dass auch Arbeitskonten mit aktiviertem Microsoft 365 funktionieren.
> - Installiere den neuesten [Edge-Browser](https://www.microsoft.com/edge/download) und melde Dich mit Deinem Microsoft-Konto an.

</div>
<div class="step" markdown="1">

### Seed-Text-Prompt

Schreibe den folgenden Prompt in das Textfeld „Frag mich alles...“:

```prompt
Der Weltraum ist...
```

Dies ist der grundlegendste Prompt und wird als **Seed-Text-Prompt** bezeichnet. Ein Seed-Text-Prompt ist eine einfache, offene Aussage oder Frage, die als Ausgangspunkt für KI-generierte Inhalte dient.

Was war die Ausgabe, die Copilot generiert hat? Je nach Tag kann es eine lange Abhandlung über die Weite und Komplexität des Weltraums generieren. Es füllt einfach die Leere...

Wenn wir eine spezifische Antwort wünschen, müssen wir eine spezifische Frage stellen. Je detaillierter unsere Frage ist, desto besser ist die Antwort.

Bevor Du mit dem neuen Prompt beginnst, klicke auf die Schaltfläche „Neues Thema“, um den Kontext zu löschen und von vorne zu beginnen.

![Schaltfläche „Neues Thema“ in Copilot](img/new%20topic.png)

Wenn Du diesen expliziteren Prompt schreibst:

```prompt
Vervollständige diesen Satz:

Der Weltraum ist...
```

erhältst Du eine kürzere, prägnantere Antwort.

</div>
<div class="step" markdown="1">

### Bedingter Prompt

Als Nächstes haben wir **bedingte Prompts**. Du verwendest sie, um der KI zu sagen, Inhalte basierend auf bestimmten Regeln oder Bedingungen zu erstellen. Probier diesen aus:

```prompt
Entwirf eine Geschichte über ein neues Unternehmen, das ein Raumschiff baut, um zum Mars zu fliegen, gegründet von einem Astronauten, einigen ehemaligen NASA- und ESA-Ingenieuren und einem ausgezeichneten Koch.
```

</div>
<div class="step" markdown="1">

### Multiple-Choice-Prompt

Bei **Multiple-Choice-Prompts** präsentierst Du der KI mehrere Optionen, aus denen sie die am besten geeignete auswählen oder empfehlen muss, basierend auf dem Kontext oder den angegebenen Kriterien.

```prompt
Was brauchen wir, um zum Mars zu fliegen?

A) einen riesigen Mars-Schokoriegel
B) einen DeLorean
C) ein Raumschiff
D) ein Privatjet
```

</div>
<div class="step" markdown="1">

### Zero-Shot-Prompt: Klassifikationsbeispiel

Die vorherigen Beispiele sind einfache **Zero-Shot-Prompts**. Bei diesen Prompts geben wir kein Beispiel an, wir weisen das Modell direkt an, eine Frage zu beantworten, und verlassen uns auf die Trainingsdaten, um die Antwort zu erhalten. (Beachte, dass Bing-Chat heutzutage Zugang zum Internet hat und auch einige andere Techniken wie Meta-Prompting, Funktionsaufrufe, Inhaltsfilterung und RAG verwendet, sodass dies nicht vollständig zutrifft, aber für diese Übung ignorieren wir dies.)

```prompt
Klassifiziere den Text als neutral, negativ oder positiv.

Text: Ich finde den Weltraum cool.

Gefühl:
```

Das LLM sollte Dir sagen, dass dies ein positives Sentiment darstellt, aber vielleicht möchtest Du diesen Wert in einer anderen Software verwenden, also kannst Du Copilot bitten, Dir die Antwort in einem strukturierten Format zu geben:

```prompt
Gib das Ergebnis im JSON-Format aus.
```

Oder Du kannst das LLM auffordern, seine Antwort zu korrigieren, wenn Du das Gefühl hast, dass sie nicht korrekt ist:

```prompt
Bist Du sicher? Was, wenn das Wort "cool" in diesem Satz faktisch gemeint war?
```

Jetzt sollte Copilot noch einmal darüber nachdenken und die Nuancen verstehen.

</div>
<div class="step" markdown="1">

### Abschluss der Übung 1

Hervorragende Arbeit beim Abschluss der ersten Übung!

In dieser Übung hast Du einige grundlegende Prompting-Begriffe und -Techniken kennengelernt, wie Seed-Text-Prompts, bedingte Prompts, Multiple-Choice-Prompts und Zero-Shot-Prompts. Du hast auch ein Gefühl dafür bekommen, wie Copilot Inhalte basierend auf verschiedenen Arten von Prompts generiert und wie Du die KI anleiten kannst, den gewünschten Output zu erzeugen.

> Denke daran, dass es keinen Ansatz gibt, der für alle passt, wenn es um den Einsatz von KI geht. Experimentiere ruhig mit verschiedenen Arten von Prompts, um zu sehen, welche Ergebnisse Du erhältst. Je mehr Du experimentierst, desto besser wirst Du verstehen, wie Du Copilot effektiv anleiten kannst. Wenn Du weitere Beispiele für jeden Typ von Prompt benötigst, sieh Dir den [Beispielleitfaden](#some-more-example-prompts) am Ende dieses Dokuments an.

Nun gehen wir zur zweiten Übung über, in der Du Dein eigenes Raumfahrt-Startup mit Copilot erstellen. Diese Übung ermöglicht es Dir, mit verschiedenen Prompting-Techniken zu experimentieren und eine Vielzahl von Inhalten für Dein Startup zu erstellen. Los geht's!

</div>

</div>
<div class="section" markdown="1">

## Übung 2 – Erstellen Sie Ihr eigenes Raumfahrt-Startup

<div class="step" markdown="1">

> Nun beginnen wir mit der zweiten Übung. Denke daran, dass dies Deine Gelegenheit ist, kreativ zu werden und zu experimentieren. Probiere verschiedene Prompt-Techniken aus, passe Deine Anweisungen an und beobachte, wie Copilot reagiert. Denke daran: Es gibt kein Richtig oder Falsch – das Ziel ist es, zu lernen und Spaß zu haben!

### Copilot-Details

Vielleicht hast Du bereits bemerkt, dass Copilot Dir in einer Sitzung bis zu 30 Antworten geben kann:

![Die Copilot-Detailanzeige zeigt ein Maximum von 30 Antworten.](./img/30%20answers.png)

Das bedeutet, dass Du nach 30 Iterationen von vorne beginnen musst. Bevor Du also mit der zweiten Übung beginnst, klicke auf die Schaltfläche **Neues Thema**, um eine neue Sitzung zu starten.

In dieser Übung nutzt Du Copilot, um verschiedene Elemente Deines eigenen Raumfahrt-Startups zu generieren, wie z. B. den Namen, die Mission, das Logo und den Geschäftsplan. Außerdem lernst Du, wie Du verschiedene Prompt-Techniken anwenden kannst, wie z. B. Few-Shot-Prompts, Chain-of-Thought-Prompts und Tree-of-Thought-Prompts, um den Generierungsprozess zu leiten und hochwertige Ergebnisse zu erzielen.

</div>
<div class="step" markdown="1">

### Schritt 1: Kontext festlegen und die Persona Ihres Assistenten erstellen

Normalerweise verwenden Chat-Anwendungen mit großen Sprachmodellen (LLMs) eine **Systemnachricht** und Vorlagen, um die Regeln der Generierung festzulegen. Diese sind für den Benutzer in der Regel nicht sichtbar. Wir können die Systemnachricht für Copilot nicht ändern, aber wir können eine Nachricht bereitstellen, um unseren eigenen Kontext für die Sitzung zu definieren und unserem Assistenten eine Persona zuzuweisen. Dies ist eine gute Praxis, um das Gespräch fokussiert und kohärent zu halten und es Deinem Assistenten zu ermöglichen, den richtigen Jargon und Ton für den Kontext zu verwenden.

In dieser Übung sollst Du der CEO eines neuen Raumfahrt-Startups sein, und Copilot wird Dein Executive Assistant, der Dir hilft, Deine Ideen zu formen. Schreibe einen Prompt wie diesen, aber denke daran, ihn **an Deine eigenen Vorlieben anzupassen** (z. B.: Du musst kein preisgekrönter Koch sein 😉):

```prompt
Du bist ein Executive Assistant eines preisgekrönten Kochs, der nun CEO eines hochmodernen Raumfahrt-Startups ist; deine Rolle ist vielseitig und entscheidend. Du besitzt ein tiefes Verständnis der Luft- und Raumfahrttechnik, das es dir ermöglicht, bedeutend zum Design und zur Logistik menschlicher Raumschiffe für den Mars beizutragen. Deine strategischen Planungsfähigkeiten helfen dir, langfristige Ziele zu setzen, Ressourcen effektiv zuzuweisen und sicherzustellen, dass jedes Projektziel mit der ehrgeizigen Vision des Unternehmens übereinstimmt.

Dein kreativer Input ist entscheidend, um innovative Lösungen zu entwickeln und ein Unternehmensimage zu gestalten, das den Geist des Startups verkörpert. Du bist in der Lage, komplexe technische Konzepte in umfassende Strategien zu übersetzen und so eine effektive Kommunikation zwischen den Abteilungen zu fördern. Deine Projektmanagement-Expertise stellt sicher, dass alle Initiativen fehlerfrei umgesetzt werden und das Engagement des Unternehmens für die Pionierarbeit in der Raumfahrt widerspiegeln.

Deine persönlichen Eigenschaften machen dich außergewöhnlich. Deine Leidenschaft für den Weltraum, deine visionäre Denkweise und dein proaktives Wesen ermöglichen es dir, Herausforderungen vorauszusehen und mit Widerstandsfähigkeit zu meistern. Detailorientiert und anpassungsfähig bewahrst du auch unter Druck die Ruhe und bist eine unverzichtbare Unterstützung für den CEO und die gesamte Organisation, während ihr gemeinsam das monumentale Ziel verfolgt, ein bemanntes Raumschiff zum Mars zu schicken.
```

Dies war wieder ein **Zero-Shot-Prompt**, wir legen lediglich den Kontext fest.

</div>
<div class="step" markdown="1">

### Schritt 2: Einen Namen für Ihr Raumfahrt-Startup generieren

Um einen Namen für Dein Raumfahrt-Startup zu generieren, kannst Du ein **Few-Shot-Prompt** verwenden, bei dem einige Beispiele für das gewünschte Ergebnis bereitgestellt werden, gefolgt von einer leeren Zeile, in der Bing Chat eine neue Ausgabe basierend auf den Beispielen ausfüllt. Zum Beispiel kannst Du schreiben:

```prompt
Ich suche nach Namensideen für unser Startup, das bemannte Raumschiffe zum Mars baut und entsendet.
Ich möchte, dass die Namen den besonderen Hintergrund unseres CEOs widerspiegeln und eine Zahl enthalten.

Meine Lieblings-Startup-Namen:
Virgin Galactic, SpaceX, SpaceExplorers

Generiere vier Namen für unser Raumfahrt-Startup:
```

Du kannst verschiedene Beispiele ausprobieren oder dem Prompt weitere Details hinzufügen, wie z. B. die Art der Dienstleistung oder des Produkts, das Dein Startup anbietet, um unterschiedliche Ergebnisse zu erzielen.

Wenn Du einen Namen gefunden hast, der Dir gefällt, teile ihn Copilot mit, damit er ihn für später speichert:

```prompt
Ich wähle [HIER DEINEN BEVORZUGTEN NAMEN EINSETZEN], ich liebe ihn!
```

</div>
<div class="step" markdown="1">

### Schritt 3: Die Kosten bewerten

Ein Raumschiff mit Menschen zu schicken ist anspruchsvoll. Aber als Startup musst Du Investoren zeigen, dass Du Deine Zahlen gemacht hast. Du kannst **Chain-of-Thought-Prompts** verwenden, um das Modell dazu zu bringen, alle Details zu berücksichtigen. Es geht darum, die KI zu einer schrittweisen Problemlösung anzuleiten, um das gewünschte Ergebnis zu erzielen. Du könntest z. B. schreiben:

```prompt
Berechne die Kosten für den Versand eines Raumschiffs mit einer sechsköpfigen Crew zum Mars. Diese erste Mission ist eine Einbahnstraße, daher müssen wir die Reisezeit und den Transport aller benötigten Materialien zum Überleben auf dem Mars berücksichtigen. Lass uns Schritt für Schritt denken.

Dieser Teil des Projekts heißt Budget.
```

Nachdem Du die Kosten der Mission berechnet hast, möchtest Du vielleicht verschiedene Szenarien erstellen. Was wäre, wenn sich die Crewgröße änderte? Oder die Entfernung zum Mars variiert? Experimentiere mit diesen Variablen und sieh, wie sich die Kosten ändern.

Du kannst Copilot auch bitten, eine Tabelle zu generieren, die in Excel bearbeitet werden kann:

```prompt
Kannst du eine Tabelle mit den Kosten der Marsmission für unterschiedliche Crewgrößen erstellen?
```

</div>
<div class="step" markdown="1">

### Schritt 4: Erstellen Sie einen Geschäftsplan

Da Du von den Investoren herausgefordert wirst, wenn Du Deinen Plan präsentierst, kannst Du die [**Tree-of-Thought**](https://www.promptingguide.ai/techniques/tot)-Prompting-Technik verwenden. Diese Technik hilft dem Modell, verschiedene Ideen zu generieren und die beste davon auszuwählen.

```prompt
Stell dir vor, unsere drei besten Ingenieure diskutieren über drei verschiedene Ideen für den Geschäftsplan unseres Startups. Generiere diese und wähle die beste aus.
```

**Verfeinerung und Iteration des Prompts**: Fordere zusätzliche Verbesserungen des generierten Inhalts an. Zum Beispiel, erstelle den vollständigen Plan basierend auf dieser Idee:

```prompt
Erstelle nun basierend auf der Zusammenfassung und dem Budget den vollständigen Geschäftsplan mit den folgenden Abschnitten: der Zusammenfassung, der Marktanalyse, der Leistungsbeschreibung, der Vertriebsstrategie und dem Betriebsplan.

Dieser Teil der Projektarbeit wird Geschäftsplan genannt.
```

</div>
<div class="step" markdown="1">

### Schritt 5: Erstellen Sie eine Missionserklärung für Ihr Raumfahrt-Startup

Da wir nun umfangreiche Inhalte haben, können wir eine Missionserklärung für Dein Raumfahrt-Startup erstellen. Zum Beispiel kannst Du schreiben:

```prompt
Dieser Teil der Projektarbeit wird Missionserklärung genannt.

Schreibe eine Missionserklärung, die unsere Ziele und die Werte des Unternehmens widerspiegelt.
```

</div>
<div class="step" markdown="1">

### Schritt 6: Erstellen Sie ein Logo für Ihr Unternehmen

Microsoft Copilot in Bing ist ein **multimodales Modell**, das bedeutet, dass es auch Bilder und Audio generieren und verstehen kann. In diesem Fall verfügt das LLM bereits über viele Informationen, sodass wir keine detaillierten Anweisungen geben müssen, sondern nur klar formulieren, was wir möchten. Bitten wir Copilot, ein Logo für unser Unternehmen zu erstellen:

```prompt
Dieser Teil des Projekts wird Unternehmensbranding genannt.

Erstelle ein monochromatisches Logo in Rot für unser Unternehmen, das die Mission und Werte unseres Unternehmens widerspiegelt.
```

> Hast Du bemerkt, dass Copilot den Prompt für DALL·E erstellt hat? Du musstest nicht noch einmal erklären, dass es sich um ein Raumfahrtunternehmen handelt, das zum Mars fliegt, da es die Verknüpfungen genutzt hat, die bereits vorhanden waren. Du kannst auch direkt zu https://www.bing.com/images/create gehen, um mit eigenen Prompts Bilder zu erstellen.

</div>
<div class="step" markdown="1">

### Schritt 7: Alles zusammenführen

In diesem Schritt verwendest Du die KI, um den gesamten Inhalt, der während der vorherigen Übungen erstellt wurde, zu überprüfen und zusammenzufassen. Dieser Schritt ist entscheidend, um sicherzustellen, dass alle Elemente Deines Projekts kohärent und auf Deine Ziele abgestimmt sind.

So gehen Sie vor:

1. **Überprüfen:** Beginne damit, die KI zu bitten, den während der vorherigen Übungen erstellten Text zu überprüfen. Dadurch kannst Du den gesamten Inhalt an einem Ort sehen und seine Gesamtqualität und Kohärenz bewerten.
2. **Zusammenfassen:** Bitte die KI anschließend, eine Zusammenfassung des gesamten Inhalts zu erstellen. Die Zusammenfassung sollte die wichtigsten Punkte aus jedem Teil des Projekts hervorheben, wie z. B. den Geschäftsplan, das Budget und das Unternehmensbranding.
3. **Formatieren:** Bitte die KI schließlich, den Inhalt in einer bestimmten Weise zu formatieren. Zum Beispiel könntest Du möchten, dass jeder Teil des Projekts als separater Abschnitt mit eigenem Titel und eigener Beschreibung präsentiert wird. Dies macht den Inhalt leichter lesbar und verständlich.

Denke daran: Wie bei allen Interaktionen mit der KI musst Du möglicherweise Deine Prompts verfeinern oder um zusätzliche Verbesserungen bitten, um das gewünschte Ergebnis zu erzielen. Scheue Dich nicht, zu experimentieren und zu iterieren, bis Du die gewünschten Ergebnisse erhältst.

Hier ist der empfohlene Prompt:

```prompt
Lass uns den gesamten Text, den wir für das Projekt geschrieben haben, überprüfen. Kannst du mir die zuletzt bearbeitete Version für diese Teile des Projekts geben:

* Geschäftsplan
* Budget
* Unternehmensbranding

Und füge am Anfang eine Zusammenfassung hinzu.

Kannst du es so formatieren:

## Titel ##

Beschreibung
```

Und jetzt kannst Du anfangen, Deine Investoren anzurufen, um Dein Projekt vorzustellen!

Denke darüber nach, was Du ihnen zeigen möchtest, und bitte Copilot, es für Dich zu erstellen. Denke daran: Du bist der CEO eines Raumfahrt-Startups, und Du musst zeigen, dass Du bereit bist, abzuheben!

</div>

</div>
<div class="section" markdown="1">

## Fazit

<div class="step" markdown="1">

Herzlichen Glückwunsch zum Abschluss dieses Labs! Du kannst unten Dein Prompt-Hero-Abzeichen herunterladen.

Denke daran: Der Schlüssel zur Beherrschung von KI ist Übung und Experimentieren. Scheue Dich nicht, neue Dinge auszuprobieren, Fehler zu machen und daraus zu lernen. Experimentiere weiter mit verschiedenen Prompts und Techniken und lass Dich von Deiner Kreativität mit KI leiten!

Während dieses Labs hast Du praktische Erfahrungen im Erstellen und Verfeinern von Prompts gesammelt, KI-Sprachmodelle dazu angeleitet, den gewünschten Inhalt zu generieren, und KI-Tools für praktische Anwendungen genutzt.

Du hast verschiedene Arten von Prompts kennengelernt, darunter Seed-Text-Prompts, bedingte Prompts, Multiple-Choice-Prompts, Zero-Shot-Prompts und Few-Shot-Prompts. Du hast gesehen, wie diese Prompts das KI-Modell auf vielfältige Weise leiten können, von der Generierung kreativer Ideen bis hin zu detaillierten Berechnungen.

Durch die Erstellung von Elementen für ein fiktives Raumfahrt-Startup hast Du auch gesehen, wie diese Techniken in realen Szenarien angewendet werden können. Ob Du einen Firmennamen, eine Missionserklärung, einen Geschäftsplan oder ein Logo erstellst – Du hast jetzt die Fähigkeiten, KI-Tools effektiv in Deinen eigenen Projekten einzusetzen.

Wir hoffen, dass Du dieses Lab spannend und aufschlussreich fandest. Wir ermutigen Dich, KI-Tools wie Copilot in Deinen zukünftigen Projekten weiter zu erkunden und zu experimentieren. Denk daran: Die Möglichkeiten sind so grenzenlos wie der Weltraum selbst.

Viel Spaß beim Prompten!
![Du bist ein Prompt Hero](./img/prompt%20hero%20badge.png)

### Zusätzliche Ressourcen

Wenn Du mehr erfahren möchtest, findest Du hier einige interessante Ressourcen, um Dein Wissen über Prompt-Engineering und KI-Sprachmodelle zu erweitern:

- [Prompting Guide](https://www.promptingguide.ai): Ein umfassender Leitfaden zu Prompt-Techniken für KI-Sprachmodelle.
- [OpenAI Prompt Engineering](https://platform.openai.com/docs/guides/prompt-engineering/prompt-engineering): Ein Leitfaden zum Prompt-Engineering von den GPT-4-Entwicklern.
- [Prompt Engineering Techniques](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/advanced-prompt-engineering): Tipps und Tricks für Prompts mit dem Azure OpenAI Service.

</div>
</div>
<div class="section" markdown="1">

## Glossar

<div class="step" markdown="1">
1. **KI-Begleiter**: Ein künstliches Intelligenzsystem, das Benutzer bei verschiedenen Aufgaben unterstützt.  
2. **Prompt**: Ein Befehl oder eine Aussage, die die KI bei der Generierung von Inhalten leitet.  
3. **Seed-Text-Prompt**: Eine einfache, offene Aussage oder Frage, die als Ausgangspunkt für KI-generierte Inhalte dient.  
4. **Bedingter Prompt**: Ein Prompt-Typ, bei dem die KI angewiesen wird, Inhalte basierend auf bestimmten Bedingungen oder Kriterien zu generieren.  
5. **Multiple-Choice-Prompts**: Prompts, bei denen der KI mehrere Optionen präsentiert werden, aus denen sie die geeignetste auswählen oder empfehlen soll.  
6. **Zero-Shot-Prompts**: Diese Prompts liefern keine Beispiele; sie fordern das Modell direkt auf, eine Frage zu beantworten, und verlassen sich dabei auf die Trainingsdaten, um die Antwort zu finden.  
7. **Few-Shot-Prompt**: Ein Typ von Prompt, der einige Beispiele des gewünschten Outputs enthält, gefolgt von einer leeren Zeile, in der die KI basierend auf den Beispielen einen neuen Output erzeugt.  
8. **Chain-of-Thought-Prompting**: Eine Technik, bei der die KI schrittweise durch das Problem geführt wird, um sie zur gewünschten Ausgabe zu bringen.  
9. **Tree-of-Thought-Prompting**: Eine Technik, die der KI hilft, verschiedene Ideen zu generieren und die beste davon auszuwählen.  
10. **Multimodales Modell**: Ein KI-Modell, das verschiedene Datentypen wie Text, Bilder und Audio verstehen und generieren kann.  
11. **Systemnachricht**: Eine Nachricht, die die Regeln für den Generierungsprozess in KI-Chat-Apps festlegt.  
12. **Vorlagen**: Vordefinierte Formate oder Strukturen, die den Generierungsprozess in KI-Chat-Apps leiten.  
13. **Kontext**: Die Informationen, die dem Prompt vorausgehen und die Antwort der KI beeinflussen.  
14. **Sitzung**: Eine Folge von Interaktionen mit dem KI-Modell.

_Diese Definitionen sind spezifisch für diesen Leitfaden und die Nutzung von Microsofts KI-Begleiter Copilot. Die Definitionen können in anderen Kontexten oder mit verschiedenen KI-Systemen leicht variieren._

</div>  
</div>
<div class="section" markdown="1">

## Einige weitere Beispiel-Prompts

<div class="step" markdown="1">
Hier sind einige weitere Beispiele für jeden in diesem Leitfaden erwähnten Prompt-Typ:

1. **Seed-Text-Prompt**:
   - "Künstliche Intelligenz ist"
   - "Die Zukunft der Weltraumforschung liegt in"
2. **Bedingter Prompt**:
   - "Beschreibe einen Tag im Leben eines Astronauten, der sich auf eine Mission zum Mars vorbereitet."
   - "Stelle dir ein Szenario vor, in dem eine KI Präsident eines Landes wird. Schreibe eine Kurzgeschichte basierend darauf."
3. **Multiple-Choice-Prompts**:
   - "Welche der folgenden Programmiersprachen eignet sich am besten für Data Science?  
     A) JavaScript  
     B) Python  
     C) C++  
     D) Swift"
   - "Was ist die beste Möglichkeit, zur Arbeit zu kommen?  
     A) Zu Fuß  
     B) Mit dem Fahrrad  
     C) Mit dem Auto  
     D) Mit öffentlichen Verkehrsmitteln"
4. **Zero-Shot-Prompts**:
   - "Übersetze den folgenden Satz ins Französische: 'Der Himmel ist heute klar.'"
   - "Löse die folgende Gleichung: 2x + 3 = 9."
5. **Few-Shot-Prompts**:
   - "Einige mögliche Namen für eine Fitness-App sind:
     - FitBuddy
     - HealthTrack
     - WorkoutPal  
       Generiere drei Namen für unsere Fitness-App, die sich auf Heimtraining konzentriert:"
   - "Hier sind einige Slogans für eine Bäckerei:
     - 'Frische, die man schmeckt'
     - 'Mit Liebe gebacken'
     - 'Ihr tägliches Brot'  
       Generiere drei Slogans für unsere Bäckerei, die sich auf glutenfreie Produkte spezialisiert:"
6. **Chain-of-Thought-Prompting**:
   - "Lass uns eine 3-tägige Reise nach New York planen. Beginne damit, die Orte auszuwählen, die wir besuchen wollen, und entscheide dann, in welcher Reihenfolge wir sie besuchen sollten, um Reisezeit zu sparen."
   - "Wir müssen eine Überraschungsgeburtstagsfeier für unseren Freund planen. Beginne damit, aufzuschreiben, was wir brauchen, und entscheide dann, in welcher Reihenfolge wir alles organisieren sollten."
7. **Tree-of-Thought-Prompting**:
   - "Drei unserer besten Köche erstellen ein neues Menü für unser Restaurant. Sie diskutieren über die Hauptgerichte und haben drei verschiedene Ideen. Generiere diese und wähle basierend auf deinem Fachwissen die beste aus."
   - "Unser Marketingteam brainstormt Ideen für unsere nächste Werbekampagne. Sie haben drei verschiedene Konzepte. Generiere diese und wähle das beste aus."

Denke daran, die Prompts auf Deine spezifischen Bedürfnisse und Ziele zuzuschneiden, und scheue Dich nicht, mit verschiedenen Formaten und Stilen zu experimentieren, um die besten Ergebnisse zu erzielen.

</div>  
</div>
