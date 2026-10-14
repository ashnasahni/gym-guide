(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={"machine-chest-press":{id:`machine-chest-press`,name:`Machine Chest Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`chest-press`],setup:[`Set the seat so the handles line up with the middle of your chest.`,`Sit with your back and head flat against the pad, feet flat on the floor.`],steps:[`Grip the handles and press them forward until your arms are almost straight.`,`Bring them back slowly, about 2 seconds, until you feel a light stretch in your chest.`],mistakes:[`Seat too low, so your shoulders do the work instead of your chest.`,`Letting the weight stack slam between reps.`],stress:{shoulders:`moderate`},video:{youtubeId:`B-zyH8OTlsg`,channel:`Hammer Fitness`}},"dumbbell-bench-press":{id:`dumbbell-bench-press`,name:`Dumbbell Bench Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit on the end of a flat bench with dumbbells on your thighs.`,`Lie back, bringing the dumbbells to the sides of your chest.`],steps:[`Press both dumbbells up until your arms are straight above your chest.`,`Lower slowly until your elbows are a little below the bench.`],mistakes:[`Elbows flared straight out to the sides — keep them at about 45° from your body.`,`Arching your lower back off the bench.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`sTYWWaunX8o`,channel:`Born Fitness`}},"incline-dumbbell-press":{id:`incline-dumbbell-press`,name:`Incline Dumbbell Press`,muscles:`Upper chest, front shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline, about 30°.`,`Sit back with a dumbbell at each shoulder.`],steps:[`Press up and slightly in until your arms are straight.`,`Lower slowly back to shoulder level.`],mistakes:[`Bench set too steep, which turns it into a shoulder exercise.`,`Bouncing the weights at the bottom.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`c1ZX5ZXMQVk`,channel:`Vivian Ngo`}},"pec-deck-fly":{id:`pec-deck-fly`,name:`Pec Deck Fly`,muscles:`Chest`,equipment:[`pec-deck`],setup:[`Set the seat so the handles are at chest height.`,`Set the arms so you start with a comfortable stretch, not a deep one.`],steps:[`With a slight bend in your elbows, bring the handles together in front of you.`,`Squeeze for a second, then open slowly.`],mistakes:[`Starting with the arms pulled too far back.`,`Shrugging your shoulders up toward your ears.`],stress:{shoulders:`moderate`},video:{youtubeId:`hZ0CGRaKwbQ`,channel:`Hammer Fitness`}},"cable-fly":{id:`cable-fly`,name:`Cable Chest Fly`,muscles:`Chest`,equipment:[`cable`],setup:[`Set both pulleys at shoulder height with single handles.`,`Step forward into a split stance.`],steps:[`With soft elbows, bring the handles together in front of your chest.`,`Open back out slowly until your hands are in line with your chest.`],mistakes:[`Bending and straightening your elbows — it should be a hug, not a press.`],stress:{shoulders:`moderate`},video:{youtubeId:`pJDbn8Kyx0o`,channel:`StrengthLog`}},"machine-shoulder-press":{id:`machine-shoulder-press`,name:`Machine Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`shoulder-press`],setup:[`Set the seat so the handles start at about shoulder height.`,`Sit with your back flat against the pad.`],steps:[`Press the handles up until your arms are almost straight.`,`Lower slowly back to shoulder height.`],mistakes:[`Arching your lower back off the pad.`,`Pushing your head forward.`],stress:{shoulders:`moderate`},video:{youtubeId:`e5gJP7quyGk`,channel:`Vivian Ngo`}},"seated-dumbbell-shoulder-press":{id:`seated-dumbbell-shoulder-press`,name:`Seated Dumbbell Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench upright with your back supported.`,`Hold a dumbbell at each shoulder, palms forward.`],steps:[`Press up until your arms are straight overhead.`,`Lower slowly back to your shoulders.`],mistakes:[`Leaning back and arching to push heavier weight.`],stress:{shoulders:`moderate`,lowerBack:`moderate`},video:{youtubeId:`fuQpuu--bMI`,channel:`That Fit Friend`}},"dumbbell-lateral-raise":{id:`dumbbell-lateral-raise`,name:`Seated Lateral Raise`,muscles:`Side shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench holding light dumbbells at your sides.`],steps:[`Raise your arms out to the side until they are level with your shoulders.`,`Lower slowly over about 2 seconds.`],mistakes:[`Shrugging — keep your shoulders pressed down, away from your ears.`,`Going too heavy and swinging the weights up.`],stress:{neckUpperBack:`moderate`},video:{youtubeId:`yKAxVcU3nfw`,channel:`Vivian Ngo`}},"cable-tricep-pushdown":{id:`cable-tricep-pushdown`,name:`Cable Tricep Pushdown`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley high with a rope or straight bar.`,`Stand close with your elbows tucked at your sides.`],steps:[`Push down until your arms are straight, without moving your elbows.`,`Let it rise slowly back to about chest height.`],mistakes:[`Elbows drifting forward.`,`Leaning your whole body over the bar.`],stress:{},video:{youtubeId:`d-ySLTHUgQA`,channel:`Vivian Ngo`}},"overhead-cable-extension":{id:`overhead-cable-extension`,name:`Overhead Cable Tricep Extension`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley low with a rope.`,`Face away from the machine, rope behind your head.`],steps:[`Straighten your arms overhead.`,`Bend your elbows slowly to lower the rope behind your head.`],mistakes:[`Elbows flaring wide.`,`Arching your lower back.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`mRozZKkGIfg`,channel:`Bodybuilding.com`}},"assisted-dip":{id:`assisted-dip`,name:`Assisted Dip`,muscles:`Triceps, chest`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the dip handles.`],steps:[`Lower until your elbows are at about 90°.`,`Push back up to straight arms.`],mistakes:[`Going too deep, which strains the front of the shoulder.`],stress:{shoulders:`high`,wrists:`moderate`},video:{youtubeId:`slD5hhM_thg`,channel:`UMW Campus Recreation`},weightKind:`assist`},"lat-pulldown":{id:`lat-pulldown`,name:`Lat Pulldown`,muscles:`Upper back (lats), biceps`,equipment:[`lat-pulldown`],setup:[`Set the knee pad so your thighs are snug underneath it.`,`Grip the bar a little wider than your shoulders.`],steps:[`Pull the bar down to your upper chest, leading with your elbows.`,`Let it rise slowly until your arms are straight.`],mistakes:[`Pulling the bar behind your neck — always pull to the front.`,`Leaning far back and using momentum.`],stress:{wrists:`moderate`},video:{youtubeId:`oMJmAHRZXBk`,channel:`UC Davis Health`}},"assisted-pullup":{id:`assisted-pullup`,name:`Assisted Pull-Up`,muscles:`Upper back (lats), biceps`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the top handles.`],steps:[`Pull yourself up until your chin is over the handles.`,`Lower slowly to straight arms.`],mistakes:[`Craning your neck to get your chin over.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`fnHeovkmkkk`,channel:`Fitness 19`},weightKind:`assist`},"chest-supported-row":{id:`chest-supported-row`,name:`Chest-Supported Dumbbell Row`,muscles:`Mid back, rear shoulders, biceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline and lie face down on it, chest on the pad.`,`Let a dumbbell hang straight down from each hand.`],steps:[`Pull the dumbbells up toward your hips, squeezing your shoulder blades together.`,`Lower slowly until your arms are straight.`],mistakes:[`Lifting your chest off the pad.`,`Shrugging the weights up instead of rowing.`],stress:{},video:{youtubeId:`Nx0TzjgsI-0`,channel:`PureGym`}},"seated-cable-row":{id:`seated-cable-row`,name:`Seated Cable Row`,muscles:`Mid back, biceps`,equipment:[`seated-row`],setup:[`Sit with feet on the footplates and knees slightly bent.`,`Grip the handle and sit up tall.`],steps:[`Pull the handle to your belly button, squeezing your shoulder blades together.`,`Let your arms straighten slowly without rounding your back.`],mistakes:[`Rocking your torso back and forth.`,`Rounding your lower back as the handle goes forward.`],stress:{lowerBack:`moderate`},video:{youtubeId:`oFtfkSElE0s`,channel:`Hammer Fitness`}},"face-pull":{id:`face-pull`,name:`Cable Face Pull`,muscles:`Rear shoulders, upper back`,equipment:[`cable`],setup:[`Set the pulley at about face height with a rope.`,`Hold the rope ends with thumbs pointing back.`],steps:[`Pull the rope toward your face, splitting the ends apart beside your ears.`,`Return slowly with control.`],mistakes:[`Going heavy — this is a light, controlled exercise.`,`Shrugging toward your ears.`],stress:{},video:{youtubeId:`eTCBSFlCJ_s`,channel:`NASM`}},"reverse-pec-deck":{id:`reverse-pec-deck`,name:`Reverse Pec Deck`,muscles:`Rear shoulders, upper back`,equipment:[`pec-deck`],setup:[`Sit facing the pad, chest against it.`,`Set the handles so your arms start in front of you.`],steps:[`With slightly bent elbows, open your arms out to the side.`,`Return slowly.`],mistakes:[`Shrugging your shoulders up.`,`Swinging the weight.`],stress:{},video:{youtubeId:`v0rJuhEa59c`,channel:`FIT.nl`}},"dumbbell-curl":{id:`dumbbell-curl`,name:`Seated Dumbbell Curl`,muscles:`Biceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench with a dumbbell in each hand, palms forward.`],steps:[`Curl the weights up, keeping your elbows at your sides.`,`Lower slowly to straight arms.`],mistakes:[`Swinging your body to lift the weight.`,`Elbows drifting forward.`],stress:{wrists:`moderate`},video:{youtubeId:`SW5JS2Wf2uQ`,channel:`Horton Barbell`}},"cable-curl":{id:`cable-curl`,name:`Cable Curl`,muscles:`Biceps`,equipment:[`cable`],setup:[`Set the pulley low with a straight bar.`,`Stand close with elbows at your sides.`],steps:[`Curl the bar up toward your shoulders.`,`Lower slowly.`],mistakes:[`Leaning back to help the weight up.`],stress:{wrists:`moderate`},video:{youtubeId:`0TtZgAuC8Vw`,channel:`Holly Perkins`}},"hammer-curl":{id:`hammer-curl`,name:`Seated Hammer Curl`,muscles:`Biceps, forearms`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright with dumbbells at your sides, palms facing each other.`],steps:[`Curl up keeping your palms facing each other.`,`Lower slowly.`],mistakes:[`Swinging the weights.`],stress:{},video:{youtubeId:`bdlqQAVdcEk`,channel:`Vivian Ngo`}},"leg-press":{id:`leg-press`,name:`Leg Press`,muscles:`Thighs, glutes`,equipment:[`leg-press`],setup:[`Sit back with your lower back flat against the pad.`,`Feet shoulder-width apart, in the middle or slightly high on the platform.`],steps:[`Release the safety handles and lower the platform slowly.`,`Stop when your knees reach about 90°, before your lower back starts to lift off the pad.`,`Push back up through your whole foot, without locking your knees.`],mistakes:[`Going so deep your hips curl up off the seat.`,`Knees caving inward — keep them pointing the same way as your toes.`],stress:{knees:`moderate`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`90NY9tka1TQ`,channel:`Vivian Ngo`}},"barbell-back-squat":{id:`barbell-back-squat`,name:`Barbell Back Squat`,muscles:`Thighs, glutes, core`,equipment:[`squat-rack`],setup:[`Set the bar at upper-chest height.`,`Step under it and rest it across your upper back.`],steps:[`Squat down until your thighs are about parallel to the floor.`,`Drive back up through your feet.`],mistakes:[`Knees caving in.`,`Rounding your back at the bottom.`],stress:{knees:`high`,lowerBack:`high`,neckUpperBack:`moderate`,feet:`moderate`},video:{youtubeId:`8PMjqgR8Wa8`,channel:`Barbell Rehab`}},"goblet-squat":{id:`goblet-squat`,name:`Goblet Squat`,muscles:`Thighs, glutes`,equipment:[`dumbbells`],setup:[`Hold one dumbbell upright against your chest.`,`Feet slightly wider than shoulders, toes turned out a little.`],steps:[`Sit down between your heels, keeping your chest up.`,`Stand back up.`],mistakes:[`Heels lifting off the floor.`,`Knees caving in.`],stress:{knees:`high`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`zsN2WvklwDk`,channel:`Janice Liang`}},"glute-bridge":{id:`glute-bridge`,name:`Dumbbell Glute Bridge`,muscles:`Glutes, hamstrings`,equipment:[`dumbbells`,`mat`],setup:[`Lie on your back on a mat, knees bent, feet flat and hip-width apart.`,`Rest a dumbbell across your hips and hold it in place.`],steps:[`Squeeze your glutes and lift your hips until your body is straight from knees to shoulders.`,`Hold for a second, then lower slowly.`],mistakes:[`Arching your lower back at the top — the lift should come from your glutes.`],stress:{},video:{youtubeId:`PSMW7iSi2BU`,channel:`Holly Perkins`}},"dumbbell-romanian-deadlift":{id:`dumbbell-romanian-deadlift`,name:`Dumbbell Romanian Deadlift`,muscles:`Hamstrings, glutes`,equipment:[`dumbbells`],setup:[`Stand holding dumbbells in front of your thighs, knees slightly bent.`],steps:[`Push your hips back and lower the weights along your legs, back flat.`,`Stand back up by squeezing your glutes.`],mistakes:[`Rounding your back.`,`Turning it into a squat by bending your knees a lot.`],stress:{lowerBack:`high`},video:{youtubeId:`dNQucsVf90I`,channel:`Vivian Ngo`}},"seated-leg-curl":{id:`seated-leg-curl`,name:`Leg Curl`,muscles:`Hamstrings`,equipment:[`leg-curl`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit just above your heels.`],steps:[`Bend your knees to pull the pad down and back.`,`Return slowly to almost straight.`],mistakes:[`Letting the weight snap your legs straight.`,`Lifting your hips to cheat the weight.`],stress:{knees:`moderate`},video:{youtubeId:`_2Kd0d-JEUM`,channel:`NASM`}},"hip-abduction":{id:`hip-abduction`,name:`Hip Abduction Machine`,muscles:`Outer glutes`,equipment:[`hip-abduction`],setup:[`Sit with your back against the pad, pads on the outside of your knees.`],steps:[`Push your knees outward.`,`Return slowly without letting the weights touch.`],mistakes:[`Rocking your body to move the weight.`],stress:{},video:{youtubeId:`5O_Y9l__iao`,channel:`Hammer Fitness`}},"leg-extension":{id:`leg-extension`,name:`Leg Extension`,muscles:`Front of thighs`,equipment:[`leg-extension`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit on your lower shins.`],steps:[`Straighten your legs.`,`Lower slowly.`],mistakes:[`Kicking the weight up fast.`],stress:{knees:`high`},video:{youtubeId:`MXvSzXEBOTI`,channel:`Steev`}},"dead-bug":{id:`dead-bug`,name:`Dead Bug`,muscles:`Deep core`,equipment:[`mat`],setup:[`Lie on your back with arms pointing up and knees bent at 90° above your hips.`],steps:[`Press your lower back gently into the mat.`,`Slowly lower one arm and the opposite leg toward the floor, then return. Switch sides.`],mistakes:[`Letting your lower back lift off the mat — make the movement smaller if it does.`],stress:{},video:{youtubeId:`bxn9FBrt4-A`,channel:`NASM`},weightKind:`bodyweight`},"pallof-press":{id:`pallof-press`,name:`Cable Pallof Press`,muscles:`Core, obliques`,equipment:[`cable`],setup:[`Set a cable at chest height with a single handle.`,`Stand side-on to the machine, holding the handle at your chest with both hands.`],steps:[`Press the handle straight out in front of you without letting it pull you sideways.`,`Hold for 2 seconds, bring it back. Do both sides.`],mistakes:[`Twisting toward the machine.`],stress:{},video:{youtubeId:`SY5lRzBPtM4`,channel:`Fitness Lab`}},"cable-crunch":{id:`cable-crunch`,name:`Cable Crunch`,muscles:`Abs`,equipment:[`cable`],setup:[`Set the pulley high with a rope.`,`Kneel facing the machine, rope beside your head.`],steps:[`Crunch down, bringing your elbows toward your knees.`,`Rise back up slowly.`],mistakes:[`Pulling with your arms instead of your abs.`,`Yanking your neck forward.`],stress:{lowerBack:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`0KEP6A1deBE`,channel:`Travis Tarrant`}},"side-plank":{id:`side-plank`,name:`Side Plank`,muscles:`Obliques, core`,equipment:[`mat`],setup:[`Lie on your side, propped up on your forearm, elbow under your shoulder.`],steps:[`Lift your hips so your body is a straight line.`,`Hold for 20–30 seconds. Switch sides.`],mistakes:[`Hips sagging toward the floor.`],stress:{shoulders:`moderate`},video:{youtubeId:`0M-erHBl48U`,channel:`Heal Fit Physio`},weightKind:`bodyweight`,timedSeconds:{min:20,max:30}}},t={push:{title:`Push — chest, shoulders, triceps`,slots:[{label:`Chest`,options:[`machine-chest-press`,`dumbbell-bench-press`]},{label:`Shoulders`,options:[`machine-shoulder-press`,`seated-dumbbell-shoulder-press`]},{label:`Upper chest`,options:[`incline-dumbbell-press`,`cable-fly`,`pec-deck-fly`]},{label:`Triceps`,options:[`cable-tricep-pushdown`,`overhead-cable-extension`,`assisted-dip`]},{label:`Side shoulders`,options:[`dumbbell-lateral-raise`]},{label:`Chest squeeze`,options:[`pec-deck-fly`,`cable-fly`]}]},pull:{title:`Pull — back, biceps`,slots:[{label:`Upper back`,options:[`lat-pulldown`,`assisted-pullup`]},{label:`Mid back`,options:[`chest-supported-row`,`seated-cable-row`]},{label:`Rear shoulders`,options:[`face-pull`,`reverse-pec-deck`]},{label:`Biceps`,options:[`dumbbell-curl`,`cable-curl`]},{label:`Second back`,options:[`seated-cable-row`,`assisted-pullup`,`chest-supported-row`]},{label:`Biceps & forearms`,options:[`hammer-curl`,`cable-curl`]}]},legs:{title:`Legs + Abs`,slots:[{label:`Thighs`,options:[`leg-press`,`barbell-back-squat`,`goblet-squat`]},{label:`Glutes`,options:[`glute-bridge`,`dumbbell-romanian-deadlift`]},{label:`Hamstrings`,options:[`seated-leg-curl`,`dumbbell-romanian-deadlift`]},{label:`Core`,options:[`dead-bug`,`pallof-press`]},{label:`Outer glutes`,options:[`hip-abduction`]},{label:`Abs`,options:[`pallof-press`,`side-plank`,`cable-crunch`]},{label:`Front thighs`,options:[`leg-extension`]}]}};function n(e){let t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return`${e.getFullYear()}-${t}-${n}`}function r(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function i(e){let t=new Date(e);return t.setHours(0,0,0,0),t.setDate(t.getDate()-(t.getDay()+6)%7),t}var a=[`push`,`pull`,`legs`],o={new:4,some:5,experienced:7},s=`Pick a weight where the last 2 reps feel hard but your form stays clean.`,c={"lean-muscle":{new:{sets:3,repMin:10,repMax:12,restSeconds:90,tip:s},some:{sets:3,repMin:8,repMax:12,restSeconds:90,tip:s},experienced:{sets:4,repMin:8,repMax:12,restSeconds:90,tip:`Take the last set close to failure with good form.`}},strength:{new:{sets:3,repMin:8,repMax:10,restSeconds:120,tip:`Learn the movement before going heavy.`},some:{sets:4,repMin:6,repMax:8,restSeconds:120,tip:s},experienced:{sets:4,repMin:5,repMax:6,restSeconds:150,tip:s}},general:{new:{sets:2,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},some:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},experienced:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Keep rests short.`}}};function l(e){return`${e.sets} sets of ${e.repMin}–${e.repMax} reps, resting about ${e.restSeconds} seconds between sets. ${e.tip}`}function u(e,t){return e.timedSeconds?{...e.timedSeconds,unit:`seconds`}:{min:t.repMin,max:t.repMax,unit:`reps`}}var d=`One light set of your first exercise at about half your usual weight.`,f={push:[`Arm circles: 10 forward, then 10 backward.`,`Wall slides: stand with your back to a wall and slowly slide your arms up and down, 10 reps.`,d],pull:[`Arm circles: 10 forward, then 10 backward.`,`Shoulder rolls: 10 slow rolls backward.`,d],legs:[`Leg swings: hold onto something steady and swing each leg forward and back 10 times, then side to side 10 times.`,`Hip circles: hands on hips, 10 slow circles each way.`,`Bodyweight glute bridges: 10 slow reps on a mat.`,d]},p={push:[`Doorway chest stretch: forearm on a door frame or post, step through until you feel your chest stretch. Each side.`,`Cross-body shoulder stretch: pull one arm across your chest with the other. Each side.`,`Overhead triceps stretch: reach one hand down your back and gently press the elbow with the other hand. Each side.`],pull:[`Lat stretch: hold a post at chest height and sit your hips back until you feel it along your side.`,`Cross-body shoulder stretch: pull one arm across your chest with the other. Each side.`,`Biceps stretch: palm flat on a wall behind you at shoulder height, then turn your body away. Each side.`],legs:[`Lying hamstring stretch: on your back, lift one straight leg and hold behind the thigh. Each side.`,`Figure-4 glute stretch: on your back, cross one ankle over the other knee and pull the bottom leg in. Each side.`,`Lying quad stretch: on your side, hold your top ankle and bring your heel toward you, only as far as is comfortable. Each side.`]},m={neckUpperBack:[`Gentle neck stretch: tilt one ear toward your shoulder without pulling. Each side.`],lowerBack:[`Knees to chest: on your back, hug both knees in gently and breathe slowly.`]},h={neckUpperBack:[`Chin tucks: sit tall and gently slide your chin straight back, 10 slow reps.`,`Open books: lie on your side, knees bent, and slowly rotate your top arm open, 8 per side.`],lowerBack:[`Cat-cow on a mat: slowly round and arch your back, 10 reps, staying in a pain-free range.`],knees:[`Keep the bike seat high enough that your knee is only slightly bent at the bottom.`]},g={knees:`Go easy on your knees: use a shorter range and stop before any knee pain.`,lowerBack:`Go easy on your lower back: keep it pressed against the pad and lift lighter.`,neckUpperBack:`Go easy on your neck: keep your shoulders down and your head still.`,feet:`Go easy on your feet: keep your whole foot flat and wear supportive shoes.`,shoulders:`Go easy on your shoulders: use a smaller range and lighter weight.`,wrists:`Go easy on your wrists: keep them straight, not bent back.`};function _(e,t){return e.equipment.every(e=>t.has(e))}function v(e,t){return t.filter(t=>e.stress[t]===`moderate`)}function y(e,t){return t.some(t=>e.stress[t]===`high`)}function b(t,n,r,i){return t.options.map(t=>e[t]).filter(e=>!i.has(e.id)&&!n.avoidedExerciseIds.includes(e.id)).filter(e=>_(e,r)).filter(e=>!y(e,n.protectedAreas)).sort((e,t)=>v(e,n.protectedAreas).length-v(t,n.protectedAreas).length).map(e=>({exercise:e,slot:t,cautionAreas:v(e,n.protectedAreas)}))}function x(e,t,n,r){return b(e.slot,t,new Set(n),new Set([...r,e.exercise.id]))}function ee(e,n,r){let i=new Set(r),a=t[e],s=a.slots.slice(0,o[n.experience]),l=new Set,u=[];for(let e of s){let[t]=b(e,n,i,l);t&&(l.add(t.exercise.id),u.push(t))}let d=[i.has(`bike`)?`5 minutes on the stationary bike at an easy pace.`:`5 minutes of brisk walking to warm up.`,...n.protectedAreas.flatMap(e=>h[e]??[]),...f[e]],g=[...p[e],...n.protectedAreas.flatMap(e=>m[e]??[])];return{day:e,title:a.title,prescription:c[n.goal][n.experience],warmUp:d,exercises:u,coolDown:g}}var S={push:`Push`,pull:`Pull`,legs:`Legs + Abs`},C={push:`Push`,pull:`Pull`,legs:`Legs`};function w(e){return a.indexOf(e)+1}function T(e,t){return`<nav class="day-tabs" aria-label="${t}">${a.map(t=>`
      <button type="button" class="day-tab${t===e?` active`:``}" data-day="${t}" aria-pressed="${t===e}">
        <small class="day-number">Day ${w(t)}</small>${S[t]}
      </button>`).join(``)}</nav>`}function E(e){return`https://www.youtube.com/watch?v=${e}`}function D(e,t=``){return`<ul class="${t}">${e.map(e=>`<li>${e}</li>`).join(``)}</ul>`}function te(e){return e.cautionAreas.map(e=>`<p class="caution">${g[e]}</p>`).join(``)}function ne(e){let{exercise:t}=e,n=e=>`<ol>${e.map(e=>`<li>${e}</li>`).join(``)}</ol>`;return`
    <h3>Set up</h3>
    ${n(t.setup)}
    <h3>How to do it</h3>
    ${n(t.steps)}
    <h3>Avoid</h3>
    ${D(t.mistakes,`mistakes`)}
    <a class="demo-link" href="${E(t.video.youtubeId)}" target="_blank" rel="noopener noreferrer">
      Watch the demo video ↗<small>by ${t.video.channel}</small>
    </a>
  `}function O(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function re(e){let t=Math.floor(e/60),n=e%60;return`${t}:${String(n).padStart(2,`0`)}`}var k=`https://ashnasahni.github.io/gym-guide/`,A={time:`18:00`,minutes:60},j=[30,45,60,90,120],ie=[`MO`,`TU`,`WE`,`TH`,`FR`,`SA`,`SU`];function ae(e){return/^([01]\d|2[0-3]):[0-5]\d$/.test(e)}function oe(e){return{time:e?.time!==void 0&&ae(e.time)?e.time:A.time,minutes:e?.minutes!==void 0&&j.includes(e.minutes)?e.minutes:A.minutes}}function M(e){return String(e).padStart(2,`0`)}function se(e){return`${`${e.getFullYear()}${M(e.getMonth()+1)}${M(e.getDate())}`}T${M(e.getHours())}${M(e.getMinutes())}00`}function N(e){return`${`${e.getUTCFullYear()}${M(e.getUTCMonth()+1)}${M(e.getUTCDate())}`}T${M(e.getUTCHours())}${M(e.getUTCMinutes())}${M(e.getUTCSeconds())}Z`}function ce(e){return e.replace(/\\/g,`\\\\`).replace(/;/g,`\\;`).replace(/,/g,`\\,`).replace(/\r?\n/g,`\\n`)}function le(e){let t=new TextEncoder,n=[],r=``,i=0,a=75;for(let o of e){let e=t.encode(o).length;i+e>a&&(n.push(r),r=``,i=0,a=74),r+=o,i+=e}return n.push(r),n.join(`\r
 `)}function P(e,t,n){let[i,a]=n.split(`:`).map(Number),o=r(e,(t-(e.getDay()+6)%7+7)%7);return o.setHours(i,a,0,0),o<=e?r(o,7):o}function ue(e,n,r){return[`BEGIN:VCALENDAR`,`VERSION:2.0`,`PRODID:-//Gym Guide//Weekly plan//EN`,`CALSCALE:GREGORIAN`,`METHOD:PUBLISH`,`X-WR-CALNAME:Gym Guide`,...e.flatMap((e,i)=>{if(!e)return[];let a=P(r,i,n.time),o=new Date(a.getTime()+n.minutes*6e4);return[`BEGIN:VEVENT`,`UID:gym-guide-${i}@ashnasahni.github.io`,`DTSTAMP:${N(r)}`,`DTSTART:${se(a)}`,`DTEND:${se(o)}`,`RRULE:FREQ=WEEKLY;BYDAY=${ie[i]}`,`SUMMARY:${ce(`${S[e]} day`)}`,`DESCRIPTION:${ce(`${t[e].title}\nOpen Gym Guide: ${k}`)}`,`END:VEVENT`]}),`END:VCALENDAR`].map(le).join(`\r
`)+`\r
`}function de(e,t){let n=j.map(t=>`<option value="${t}"${t===e.minutes?` selected`:``}>${t} minutes</option>`).join(``);return`
    <section class="card">
      <h2>Add to your calendar</h2>
      <p class="hint">Adds your workout days as weekly repeating events. Tap the button, then open the file it downloads and your calendar app will offer to add them.</p>
      <div class="calendar-fields">
        <label class="calendar-field">
          <span>Start time</span>
          <input type="time" data-field="cal-time" value="${e.time}" />
        </label>
        <label class="calendar-field">
          <span>Length</span>
          <select data-field="cal-minutes">${n}</select>
        </label>
      </div>
      ${t?`<p class="notice">You changed your week. Tap Save profile below first, then add it to your calendar.</p>`:``}
      <button type="button" class="secondary" data-action="add-to-calendar"${t?` disabled`:``}>Add to calendar</button>
      <p class="hint small">This is a one-time copy. If you change your week later, delete the old events in your calendar and add it again. The events repeat every week until you delete them.</p>
    </section>
  `}var F=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],I=[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`];function fe(e,t,a){let o=n(e),s=i(e),c=new Map;for(let e of a)c.set(n(new Date(e.date)),e.day);return Array.from({length:7},(e,i)=>{let a=r(s,i),l=n(a),u={key:l,date:a,weekdayIndex:i,isToday:l===o},d=c.get(l);if(d)return{...u,status:`done`,workout:d};let f=t[i];return f?l<o?{...u,status:`missed`,workout:f}:{...u,status:`planned`,workout:f}:{...u,status:`rest`,workout:null}})}function L(e){return e.toLocaleDateString(void 0,{month:`long`,day:`numeric`})}function pe(e){return e.isToday?`Today`:`${I[e.weekdayIndex]}, ${L(e.date)}`}function me(e){let t=e.status===`done`&&e.workout?`${S[e.workout]} workout, done`:e.status===`planned`&&e.workout?`${S[e.workout]} planned`:e.status===`missed`&&e.workout?`${S[e.workout]} planned, not logged`:`rest day`;return`${I[e.weekdayIndex]} ${L(e.date)}, ${t}${e.isToday?`, today`:``}`}function he(e,t){return`
    <div class="calendar" role="group" aria-label="This week">${e.map(e=>{let n=e.workout?C[e.workout]:`Rest`,r=e.status===`done`?`✓`:e.status===`missed`?`○`:``;return`
        <button type="button" class="${[`cal-day`,`cal-${e.status}`,e.isToday?`today`:``,e.key===t?`selected`:``].filter(Boolean).join(` `)}" data-date="${e.key}"
                aria-pressed="${e.key===t}" aria-label="${me(e)}">
          <span class="cal-weekday">${F[e.weekdayIndex]}</span>
          <span class="cal-date">${e.date.getDate()}</span>
          <span class="cal-label">${n}</span>
          <span class="cal-mark" aria-hidden="true">${r}</span>
        </button>`}).join(``)}</div>
    <p class="cal-legend">✓ done · ○ not logged · orange outline = today · tap a day to see it</p>
  `}function ge(e){return`
    <section class="card">
      <p>Rest day. Your muscles grow while you recover, so a walk or some stretching is plenty.</p>
      ${e.isToday?`<p class="picker-hint">Training anyway? Pick today's workout:</p>${T(null,`Pick a workout for today`)}`:``}
    </section>`}function _e(e){let t=[{value:`rest`,label:`Rest`,spoken:`Rest`},...a.map(e=>({value:e,label:C[e],spoken:S[e]}))];return`<div class="plan-editor">${I.map((n,r)=>{let i=e[r]??`rest`;return`
      <div class="plan-row">
        <span class="plan-day">${n}</span>
        <div class="plan-options">${t.map(e=>`
          <button type="button" class="plan-option${e.value===i?` active`:``}"
                  data-plan-day="${r}" data-plan-workout="${e.value}"
                  aria-pressed="${e.value===i}" aria-label="${n}: ${e.spoken}">${e.label}</button>`).join(``)}</div>
      </div>`}).join(``)}</div>`}var ve=[{id:`dumbbells`,name:`Dumbbells`,hint:`Rack of free weights`},{id:`bench`,name:`Adjustable bench`,hint:`Flat or tilted bench`},{id:`mat`,name:`Floor mat`,hint:`Stretching / ab area`},{id:`cable`,name:`Cable machine`,hint:`Pulley tower with handles`},{id:`lat-pulldown`,name:`Lat pulldown`,hint:`Seated, pull a bar down`},{id:`seated-row`,name:`Seated cable row`,hint:`Seated, pull a handle in`},{id:`chest-press`,name:`Chest press machine`,hint:`Seated, push handles forward`},{id:`shoulder-press`,name:`Shoulder press machine`,hint:`Seated, push handles up`},{id:`pec-deck`,name:`Pec deck / rear delt fly`,hint:`Seated, arms swing together`},{id:`assisted-pullup`,name:`Assisted pull-up / dip`,hint:`Kneel on a pad that helps lift you`},{id:`leg-press`,name:`Leg press`,hint:`Seated, push a platform with your feet`},{id:`leg-curl`,name:`Leg curl machine`,hint:`Bend knees against a pad`},{id:`leg-extension`,name:`Leg extension machine`,hint:`Straighten knees against a pad`},{id:`hip-abduction`,name:`Hip abduction machine`,hint:`Seated, push knees outward`},{id:`squat-rack`,name:`Squat rack + barbell`,hint:`Barbell resting on hooks`},{id:`bike`,name:`Stationary bike`,hint:`For warm-ups`}],ye=ve.map(e=>e.id),be=0;function xe(e,t){if(!(`speechSynthesis`in window))return;window.speechSynthesis.cancel();let n=new SpeechSynthesisUtterance(e);n.rate=1;let r=++be;n.onstart=()=>t?.onStart();let i=()=>{r===be&&t?.onEnd()};n.onend=i,n.onerror=i,window.speechSynthesis.speak(n)}function Se(e,t,n){let r=URL.createObjectURL(new Blob([n],{type:t})),i=document.createElement(`a`);i.href=r,i.download=e,document.body.appendChild(i),i.click(),i.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),1e4)}function Ce(e){`vibrate`in navigator&&navigator.vibrate(e)}var R=null,z=!1;async function we(){if(`wakeLock`in navigator&&document.visibilityState===`visible`)try{R=await navigator.wakeLock.request(`screen`)}catch{R=null}}document.addEventListener(`visibilitychange`,()=>{z&&document.visibilityState===`visible`&&we()});function B(e){z=e,e?we():(R?.release(),R=null)}var Te={waterGoal:8,proteinGoal:null,days:{}},Ee=[{name:`2 eggs`,grams:12},{name:`Chicken breast (palm-size)`,grams:30},{name:`Greek yogurt (1 cup)`,grams:20},{name:`Protein shake (1 scoop)`,grams:25},{name:`Paneer (100 g)`,grams:18},{name:`Tofu (half block)`,grams:20},{name:`Dal / lentils (1 cup)`,grams:18},{name:`Milk (1 glass)`,grams:8}];function V(e,t){return e.days[t]??{glasses:0,protein:[]}}function H(e,t,n){return{...e,days:{...e.days,[t]:n}}}function De(e,t,n){let r=V(e,t);return H(e,t,{...r,glasses:Math.max(0,r.glasses+n)})}function Oe(e,t,n){let r=V(e,t);return H(e,t,{...r,protein:[...r.protein,n]})}function ke(e,t,n){let r=V(e,t);return H(e,t,{...r,protein:r.protein.filter((e,t)=>t!==n)})}function Ae(e){return e.protein.reduce((e,t)=>e+t.grams,0)}function je(e,t){if(e.trim()===``)return`Type what you ate.`;let n=Number(t);return t.trim()===``||!Number.isFinite(n)||n<=0||n>300?`Enter the protein in grams, between 1 and 300.`:null}function Me(e,t){return`<div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${t}" aria-valuenow="${e}">
    <div class="meter-fill" style="width: ${Math.min(100,Math.round(e/t*100))}%"></div>
  </div>`}function U(e,t){let n=e.waterGoal;return`
    <section class="card">
      <h2>Water</h2>
      <p class="fuel-total"><strong>${t}</strong> of ${n} glasses${t>=n?` — goal reached!`:``}</p>
      ${Me(t,n)}
      <div class="button-row fuel-buttons">
        <button type="button" class="secondary" data-action="water" data-delta="-1" ${t===0?`disabled`:``} aria-label="Remove a glass">−1</button>
        <button type="button" class="primary" data-action="water" data-delta="1">+1 glass</button>
      </div>
      <div class="goal-row">
        <span>Daily goal</span>
        <button type="button" class="step-button small" data-action="water-goal" data-delta="-1" aria-label="Lower water goal">−</button>
        <span>${n} glasses</span>
        <button type="button" class="step-button small" data-action="water-goal" data-delta="1" aria-label="Raise water goal">+</button>
      </div>
    </section>
  `}function W(e){return`
    <p class="hint">Set a daily goal to see how close you are. A common target for building muscle is about 0.7 g of protein per pound of body weight; a doctor or dietitian can tell you what's right for you.</p>
    <div class="inline-form">
      <input type="number" inputmode="numeric" min="1" placeholder="e.g. 100" value="${O(e.goal)}" data-field="protein-goal" aria-label="Daily protein goal in grams" />
      <span>g</span>
      <button type="button" class="secondary" data-action="set-protein-goal">Set goal</button>
    </div>
  `}function Ne(e,t,n){let r=V(e,t),i=Ae(r),a=e.proteinGoal;return`
    <section class="card">
      <h2>Protein</h2>
      ${a===null?`<p class="fuel-total"><strong>${i}</strong> g today</p>`:`<p class="fuel-total"><strong>${i}</strong> of ${a} g${i>=a?` — goal reached!`:``}</p>${Me(i,a)}`}
      ${r.protein.length===0?`<p class="hint">Nothing logged yet today. Tap a food below to add it.</p>`:`<ul class="entry-list">${r.protein.map((e,t)=>`
          <li>
            <span>${O(e.name)}</span>
            <span class="entry-grams">${e.grams} g</span>
            <button type="button" class="link-button" data-action="remove-protein" data-index="${t}" aria-label="Remove ${O(e.name)}">Remove</button>
          </li>`).join(``)}</ul>`}

      <h3>Quick add</h3>
      <div class="quick-grid">${Ee.map((e,t)=>`
      <button type="button" class="chip quick-food" data-action="quick-protein" data-index="${t}">
        <span>${e.name}</span><small>~${e.grams} g</small>
      </button>`).join(``)}</div>
      <p class="hint small">Amounts are rough averages for a typical serving.</p>

      <h3>Something else</h3>
      <div class="inline-form">
        <input type="text" placeholder="What you ate" value="${O(n.name)}" data-field="protein-name" aria-label="Food name" maxlength="60" />
        <input type="number" inputmode="numeric" min="1" placeholder="g" value="${O(n.grams)}" data-field="protein-grams" aria-label="Protein in grams" class="grams-input" />
        <button type="button" class="secondary" data-action="add-protein">Add</button>
      </div>
      ${n.error?`<p class="form-error" role="alert">${n.error}</p>`:``}

      ${a===null?W(n):`<button type="button" class="link-button" data-action="clear-protein-goal">Change protein goal (${a} g)</button>`}
    </section>
  `}function Pe(e,t,n){return`
    <header class="screen-header">
      <h1>Fuel</h1>
      <p class="lead">Water and protein help your muscles recover. Today's log resets at midnight.</p>
    </header>
    ${U(e,V(e,t).glasses)}
    ${Ne(e,t,n)}
  `}var G={push:{name:`Push day mix`,songs:[{id:`c3P3lKFqYYM`,title:`Mundian To Bach Ke`,artist:`Panjabi MC`},{id:`7YuAzR2XVAM`,title:`Lose Yourself`,artist:`Eminem`},{id:`PsO6ZnUZI0g`,title:`Stronger`,artist:`Kanye West`},{id:`cl0a3i2wFcc`,title:`G.O.A.T.`,artist:`Diljit Dosanjh`},{id:`VNs_cCtdbPc`,title:`Brown Munde`,artist:`AP Dhillon, Gurinder Gill, Shinda Kahlon`},{id:`7wtfhZwyrcc`,title:`Believer`,artist:`Imagine Dragons`},{id:`cWMxCE2HTag`,title:`Softly`,artist:`Karan Aujla`}]},pull:{name:`Pull day mix`,songs:[{id:`eZ2PtEx9-ls`,title:`Tunak Tunak Tun`,artist:`Daler Mehndi`},{id:`U9XLJ6GkccI`,title:`HUMBLE.`,artist:`Kendrick Lamar`},{id:`4NRXx6U8ABQ`,title:`Blinding Lights`,artist:`The Weeknd`},{id:`jzpm7vkymSk`,title:`DJ Waley Babu`,artist:`Badshah, Aastha Gill`},{id:`9HDEHj2yzew`,title:`Physical`,artist:`Dua Lipa`},{id:`yqwbmjL8vd4`,title:`So High`,artist:`Sidhu Moose Wala`},{id:`L53gjP-TtGE`,title:`POWER`,artist:`Kanye West`}]},legs:{name:`Legs day mix`,songs:[{id:`btPJPFnesV4`,title:`Eye of the Tiger`,artist:`Survivor`},{id:`Obim8BYGnOE`,title:`'Till I Collapse`,artist:`Eminem, Nate Dogg`},{id:`wPQEeBAXou0`,title:`Warriors`,artist:`Imagine Dragons`},{id:`tOOy8PV1OCE`,title:`Do You Know`,artist:`Diljit Dosanjh`},{id:`CD-E-LDc384`,title:`Enter Sandman`,artist:`Metallica`},{id:`AxWejrVYcCg`,title:`Gonna Fly Now (Theme from Rocky)`,artist:`Bill Conti`}]}},Fe=`https://www.youtube.com/iframe_api`,Ie=1e4,Le=.3,Re=8e3,ze=1,Be=null;function Ve(){return window.YT?.Player?Promise.resolve(window.YT):(Be??=new Promise((e,t)=>{let n=e=>{window.clearTimeout(r),Be=null,t(Error(e))},r=window.setTimeout(()=>n(`timed out`),Ie);window.onYouTubeIframeAPIReady=()=>{window.clearTimeout(r),window.YT?e(window.YT):n(`player missing`)};let i=document.createElement(`script`);i.src=Fe,i.onerror=()=>n(`blocked or offline`),document.head.appendChild(i)}),Be)}function He(e){let t=document.createElement(`section`);return t.id=`music-dock`,t.className=`music-dock`,t.hidden=!0,t.setAttribute(`aria-label`,`Music`),t.innerHTML=`
    <div class="dock-bar">
      <span class="dock-title"></span>
      <button type="button" class="link-button dock-stop">Stop music</button>
    </div>
    <div class="dock-player"></div>`,t.querySelector(`.dock-stop`)?.addEventListener(`click`,e),document.body.appendChild(t),t}function Ue(e,t){let n=null,r=null,i=null,a=null,o=0,s=!1,c;function l(){return n??=He(f),n}function u(){let e=l().querySelector(`.dock-player`);e&&(e.innerHTML=`<div id="music-player"></div>`)}function d(e,n){return new Promise((r,i)=>{let a=window.setTimeout(()=>i(Error(`player timed out`)),Ie),s=new e.Player(`music-player`,{width:`100%`,height:`200`,playerVars:{playsinline:1,rel:0,enablejsapi:1,origin:window.location.origin},events:{onReady:()=>{window.clearTimeout(a),r(s)},onError:()=>{o+=1,o>=n?(f(),t(`None of these songs could play right now. Try again later.`)):s.nextVideo()},onStateChange:e=>{e.data===ze&&(o=0)}}})})}function f(){r?.destroy(),r=null,i=null,a=null,o=0,n&&(n.hidden=!0),document.body.classList.remove(`music-on`),e()}function p(){window.clearTimeout(c),r&&a!==null&&(r.setVolume(a),a=null)}async function m(n){if(i===n&&r){r.playVideo();return}if(s)return;s=!0;let a=G[n],c=l(),p=c.querySelector(`.dock-title`);p&&(p.textContent=`♪ ${a.name}`),c.hidden=!1,document.body.classList.add(`music-on`);try{let t=await Ve();r?.destroy(),r=null,u(),o=0,r=await d(t,a.songs.length),r.loadPlaylist({playlist:a.songs.map(e=>e.id),index:0}),r.setLoop(!0),i=n,e()}catch{f(),t(`Couldn't load the music. Check your connection and try again.`)}finally{s=!1}}return{play:m,stop:f,current:()=>i,duck(){r&&a===null&&(a=r.getVolume(),r.setVolume(Math.round(a*Le)),c=window.setTimeout(p,Re))},restore:p}}function We(e,t){let n=G[e],r=t===e?`<p class="music-status">♪ Playing now. The player is at the bottom of the screen. If it's silent, tap play there.</p>`:`<button type="button" class="secondary" data-action="play-music" data-workout="${e}">▶ Play ${n.name}</button>`;return`
    <section class="card music-card">
      <h2>Music</h2>
      <p class="music-name">${n.name} · ${n.songs.length} songs</p>
      ${r}
      <p class="hint small">Plays through YouTube and keeps going while you move around the app. Some songs are explicit.</p>
    </section>`}function Ge(e,t){if(t===e)return``;let n=G[e];return`
    <section class="card music-card music-row">
      <div>
        <h2>Music</h2>
        <p class="music-name">${n.name}</p>
      </div>
      <button type="button" class="secondary" data-action="play-music" data-workout="${e}" aria-label="Play ${n.name}">▶ Play</button>
    </section>`}var Ke=[{id:`lean-muscle`,label:`Build lean muscle`,detail:`Gain muscle for a toned look`},{id:`strength`,label:`Get stronger`,detail:`Lift heavier, fewer reps`},{id:`general`,label:`General fitness`,detail:`Lighter, steady routine`}],qe=[{id:`new`,label:`New to lifting`},{id:`some`,label:`Some experience`},{id:`experienced`,label:`Experienced`}],Je=[{id:`knees`,label:`Knees`},{id:`lowerBack`,label:`Lower back`},{id:`neckUpperBack`,label:`Neck / upper back`},{id:`feet`,label:`Feet / ankles`},{id:`shoulders`,label:`Shoulders`},{id:`wrists`,label:`Wrists`}],K={goal:`lean-muscle`,experience:`new`,protectedAreas:[],avoidedExerciseIds:[],weekPlan:[`push`,null,`pull`,null,`legs`,null,null]};function Ye(e){let t=[null,null,null,null,null,null,null];return[...e].filter(e=>Number.isInteger(e)&&e>=0&&e<=6).sort((e,t)=>e-t).forEach((e,n)=>{t[e]=a[n%a.length]}),t}function Xe(e){let{gymDays:t,...n}=e,r={...K,...n};if(!n.weekPlan&&Array.isArray(t)){let e=Ye(t);e.some(Boolean)&&(r.weekPlan=e)}return r}function Ze(e,t){let n=e[t];return n?.[n.length-1]}function q(e,t){let n=e.sets.map(e=>e.amount).join(`, `),r=e.sets[e.sets.length-1]?.weight,i=t===`seconds`?` sec`:` reps`;return r==null?`${n}${i}`:`${r} lb × ${n}${i}`}function Qe(e,t,n){if(!e||e.sets.length===0)return{weight:null,message:n===`bodyweight`?`First time: aim for ${t.min}–${t.max} ${t.unit}.`:`First time: start light. Find a weight where the last 2 reps feel hard but your form stays clean.`};let r=e.sets.every(e=>e.amount>=t.max),i=e.sets.reduce((e,t)=>e+t.amount,0)/e.sets.length<t.min-2,a=e.sets[e.sets.length-1].weight;if(n===`bodyweight`||a===null)return{weight:null,message:r?`You hit ${t.max} on every set. Try a couple more ${t.unit} each set.`:`Aim for ${t.max} ${t.unit} on every set.`};let o=n===`assist`?Math.max(0,a-5):a+5,s=n===`assist`?a+5:Math.max(0,a-5);return r?{weight:o,message:n===`assist`?`You hit ${t.max} reps every set. Try ${o} lb of help (a little less).`:`You hit ${t.max} reps every set. Try ${o} lb.`}:i?{weight:s,message:`That was heavy. Try ${s} lb and aim for ${t.min}–${t.max} reps.`}:{weight:a,message:`Stay at ${a} lb and aim for ${t.max} reps on every set.`}}function $e(e,t,n,r){let i=e[t]??[],a=i[i.length-1],o=a&&a.date===n?[...i.slice(0,-1),{...a,sets:[...a.sets,r]}]:[...i,{date:n,sets:[r]}];return{...e,[t]:o}}function et(e){let t=new Map;for(let[n,r]of Object.entries(e))for(let e of r){if(e.sets.length===0)continue;let r=t.get(e.date)??{date:e.date,entries:[]};r.entries.push({exerciseId:n,session:e}),t.set(e.date,r)}return[...t.values()].sort((e,t)=>t.date.localeCompare(e.date))}function tt(e,t){let n=i(t);return et(e).filter(e=>new Date(e.date)>=n).length}function nt(e,t){return e.filter(e=>e.sets.length>0).map(e=>{if(t===`bodyweight`)return Math.max(...e.sets.map(e=>e.amount));let n=e.sets.map(e=>e.weight??0);return t===`assist`?Math.min(...n):Math.max(...n)})}var rt=10;function it(e){return e.timedSeconds?`seconds`:`reps`}function J(e){return new Date(e).toLocaleDateString(void 0,{weekday:`short`,month:`short`,day:`numeric`})}function at(e,t){let n=e.weightKind??`load`;return n===`bodyweight`?`${t} ${e.timedSeconds?`sec`:`reps`}`:n===`assist`?`${t} lb of help`:`${t} lb`}function ot(e,t,n){let r={top:22,right:20,bottom:22,left:20},i=Math.min(...n),a=Math.max(...n),o=a-i||1,s=e=>r.left+e*(300-r.left-r.right)/(n.length-1),c=e=>r.top+(a-e)*(110-r.top-r.bottom)/o,l=n.map((e,t)=>`${t===0?`M`:`L`}${s(t).toFixed(1)},${c(e).toFixed(1)}`).join(` `),u=n.map((n,r)=>{let i=`${J(t[r])}: ${at(e,n)}`;return`
        <g class="chart-point" data-point="${i}" tabindex="0" role="button" aria-label="${i}">
          <circle cx="${s(r)}" cy="${c(n)}" r="14" class="hit" />
          <circle cx="${s(r)}" cy="${c(n)}" r="4.5" class="dot" />
        </g>`}).join(``);return`
    <svg class="trend-chart" viewBox="0 0 300 110" role="img" aria-label="${e.name} over time">
      <line x1="${r.left}" x2="${300-r.right}" y1="${110-r.bottom+6}" y2="${110-r.bottom+6}" class="baseline" />
      <path d="${l}" class="trend-line" />
      ${u}
      <text x="${s(0)}" y="${c(n[0])-10}" class="value-label" text-anchor="start">${n[0]}</text>
      <text x="${s(n.length-1)}" y="${c(n[n.length-1])-10}" class="value-label" text-anchor="end">${n[n.length-1]}</text>
      <text x="${r.left}" y="106" class="axis-label">${J(t[0])}</text>
      <text x="${300-r.right}" y="106" class="axis-label" text-anchor="end">${J(t[t.length-1])}</text>
    </svg>
    <p class="chart-caption" aria-live="polite">Tap a dot to see that day.</p>
  `}function st(t){return Object.entries(t).filter(([t,n])=>e[t]&&n.some(e=>e.sets.length>0)).map(([t,n])=>{let r=e[t],i=n.filter(e=>e.sets.length>0),a=nt(i,r.weightKind??`load`),o=i[i.length-1],s=(r.weightKind??`load`)===`assist`?Math.min(...a):Math.max(...a),c=a.length>=2?ot(r,i.map(e=>e.date),a):`<p class="hint">Log it again to start a chart.</p>`;return`
        <section class="card progress-card">
          <h3 class="progress-name">${r.name}</h3>
          <p class="progress-stats">
            <span>Best: <strong>${at(r,s)}</strong></span>
            <span>Last: ${q(o,it(r))}</span>
          </p>
          ${c}
        </section>`}).join(``)}function ct(t){return et(t).slice(0,rt).map(t=>{let n=t.entries.filter(({exerciseId:t})=>e[t]).map(({exerciseId:t,session:n})=>{let r=e[t];return`<li>${r.name}: <span class="hint">${q(n,it(r))}</span></li>`}).join(``);return`
        <section class="card">
          <h3 class="progress-name">${J(t.date)}</h3>
          <ul class="summary">${n}</ul>
        </section>`}).join(``)}function lt(e,t,n){let r=`
    <header class="screen-header">
      <h1>Your progress</h1>
      <p class="lead">Everything here comes from the sets you log in workout mode.</p>
    </header>`;if(et(e).length===0)return`${r}
      <section class="card empty">
        <p>No workouts logged yet. Start a workout and save your sets, and your progress will show up here.</p>
        <button type="button" class="secondary" data-nav="today">Go to today's workout</button>
      </section>`;let i=tt(e,t);return`${r}
    <section class="card week-card">
      <p class="week-count"><strong>${i}</strong> of ${n}</p>
      <p>workouts this week${i>=n?` — goal reached!`:``}</p>
      <p class="hint">That's the number of workout days in your week plan (change it in Profile). The week starts Monday.</p>
    </section>

    <h2 class="section-title">Exercises</h2>
    ${st(e)}

    <h2 class="section-title">Recent workouts</h2>
    ${ct(e)}
  `}function ut(e,t){return{day:e.day,startedAt:t.toISOString(),exercises:e.exercises,prescription:e.prescription,index:0,setNumber:1,phase:e.exercises.length>0?`lift`:`done`,restEndsAt:null}}function Y(e){return e.exercises[e.index]}function dt(e){return e.setNumber>=e.prescription.sets}function ft(e){return e.index>=e.exercises.length-1}function pt(e){return{...e,phase:`log`}}function mt(e,t){if(dt(e)&&ft(e))return{...e,phase:`done`,restEndsAt:null};let n=t+e.prescription.restSeconds*1e3;return dt(e)?{...e,index:e.index+1,setNumber:1,phase:`rest`,restEndsAt:n}:{...e,setNumber:e.setNumber+1,phase:`rest`,restEndsAt:n}}function ht(e){return{...e,phase:`lift`,restEndsAt:null}}function gt(e,t,n){let r=Math.max(e.restEndsAt??n,n);return{...e,restEndsAt:r+t*1e3}}function _t(e){return ft(e)?{...e,phase:`done`,restEndsAt:null}:{...e,index:e.index+1,setNumber:1,phase:`lift`,restEndsAt:null}}function vt(e,t){let n=e.exercises.map((n,r)=>r===e.index?t:n);return{...e,exercises:n,setNumber:1,phase:`lift`,restEndsAt:null}}function X(e,t){return e.restEndsAt===null?0:Math.max(0,Math.ceil((e.restEndsAt-t)/1e3))}var yt=`gymGuide.v1`;function bt(){return{profile:null,equipmentIds:[...ye],equipmentConfirmed:!1,history:{},session:null,nutrition:Te,workoutLog:[],calendar:A}}function xt(){try{let e=localStorage.getItem(yt);if(!e)return bt();let t=JSON.parse(e);return{...bt(),...t,profile:t.profile?Xe(t.profile):null,nutrition:{...Te,...t.nutrition},calendar:oe(t.calendar)}}catch{return bt()}}function Z(e){try{return localStorage.setItem(yt,JSON.stringify(e)),!0}catch{return!1}}function Q(e,t,n){let r=Ze(e,n);return r&&r.date===t.startedAt?r.sets:[]}function St(e,t,n){let r=(e[n]??[]).filter(e=>e.date!==t.startedAt);return r[r.length-1]}function Ct(e,t,n){let r=u(n.exercise,t.prescription);return Qe(St(e,t,n.exercise.id),r,n.exercise.weightKind??`load`)}function wt(e,t){let n=u(t.exercise,e.prescription);return`${n.min}–${n.max} ${n.unit}`}function $(e){return`Exercise ${e.index+1} of ${e.exercises.length} · Day ${w(e.day)} ${S[e.day]}`}function Tt(e,t=!1){return`
    <div class="session-controls">
      <button type="button" class="link-button" data-action="toggle-voice" aria-pressed="${e}">Voice: ${e?`on`:`off`}</button>
      ${t?`<button type="button" class="link-button" data-action="skip-exercise">Skip exercise</button>`:``}
      <button type="button" class="link-button" data-action="end-workout">End workout</button>
    </div>
  `}function Et(e,t,n,r,i){let a=Y(e);if(!a)return``;let o=St(t,e,a.exercise.id),s=u(a.exercise,e.prescription),c=Ct(t,e,a),l=Q(t,e,a.exercise.id);return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>${a.exercise.name}</h1>
    </header>

    ${r?`<p class="notice" role="status">${r}</p>`:``}

    <section class="card set-card">
      <p class="set-label">Set ${e.setNumber} of ${e.prescription.sets}</p>
      <p class="set-target">${wt(e,a)}</p>
      ${o?`<p class="last-time">Last time: ${q(o,s.unit)}</p>`:``}
      ${e.setNumber===1?`<p class="suggestion">${c.message}</p>`:``}
      ${l.length>0?`<p class="last-time">Today so far: ${q({date:``,sets:l},s.unit)}</p>`:``}
    </section>

    ${te(a)}

    <button type="button" class="primary big" data-action="set-done">Set done</button>

    <details class="card how-to">
      <summary>How to do it</summary>
      ${ne(a)}
    </details>

    <div class="button-row">
      <button type="button" class="secondary" data-action="open-swap">Swap</button>
      <button type="button" class="secondary" data-action="hurt">This hurt</button>
    </div>
    ${Ge(e.day,i)}
    ${Tt(n,!0)}
  `}function Dt(e,t){let n=e.exercises.reduce((n,r)=>n+Q(t,e,r.exercise.id).length,0),r=n>0?`You've logged ${n} ${n===1?`set`:`sets`}. They're saved, and this workout will show as done on your calendar.`:`You haven't logged any sets yet, so nothing will be saved.`;return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>End this workout?</h1>
      <p class="lead">${r}</p>
    </header>

    <button type="button" class="primary big" data-action="confirm-end">Yes, end workout</button>
    <button type="button" class="secondary" data-action="cancel-end">Keep going</button>
  `}function Ot(e,t){let n=Y(e);if(!n)return``;let r=t.length===0?`<section class="card empty"><p>There's no other exercise for this spot with your gym's equipment. You can skip it instead.</p></section>`:t.map((e,t)=>`
        <button type="button" class="swap-option" data-action="choose-swap" data-index="${t}">
          <strong>${e.exercise.name}</strong>
          <small>${e.exercise.muscles}</small>
          ${e.cautionAreas.length>0?`<small class="swap-caution">Go easy: has a caution for you</small>`:``}
        </button>`).join(``);return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>Swap ${n.exercise.name}</h1>
      <p class="lead">Pick another exercise that works the same muscles. ${n.exercise.name} stays in future workouts.</p>
    </header>

    <div class="swap-list">${r}</div>

    <button type="button" class="secondary" data-action="cancel-swap">Keep ${n.exercise.name}</button>
  `}function kt(e,t,n){let r=Y(e);if(!r)return``;let i=r.exercise.weightKind??`load`,a=u(r.exercise,e.prescription),o=r.exercise.equipment.includes(`dumbbells`),s=i===`assist`?`Help from the machine (lb)`:o?`Weight (lb, per dumbbell)`:`Weight (lb)`,c=(e,t,n,r)=>`
    <label class="stepper-label" for="log-${e}">${t}</label>
    <div class="stepper">
      <button type="button" class="step-button" data-step="${e}" data-delta="${-r}" aria-label="Less">−</button>
      <input id="log-${e}" type="number" inputmode="decimal" min="0" value="${n}" data-field="${e}" />
      <button type="button" class="step-button" data-step="${e}" data-delta="${r}" aria-label="More">+</button>
    </div>
  `;return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>Set ${e.setNumber} done</h1>
      <p class="lead">${r.exercise.name}: what did you do?</p>
    </header>

    <section class="card">
      ${i===`bodyweight`?``:c(`weight`,s,t.weight,5)}
      ${c(`amount`,a.unit===`seconds`?`Seconds held`:`Reps`,t.amount,1)}
      ${n?`<p class="form-error" role="alert">${n}</p>`:``}
    </section>

    <button type="button" class="primary big" data-action="save-set">Save set</button>
  `}function At(e,t,n,r){let i=Y(e);if(!i)return``;let a=e.setNumber===1?`Next exercise: <strong>${i.exercise.name}</strong>`:`Next: set ${e.setNumber} of ${e.prescription.sets}, ${i.exercise.name}`;return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>Rest</h1>
    </header>

    <section class="card rest-card">
      <p class="timer" data-timer aria-live="off">${re(X(e,t))}</p>
      <p>${a}</p>
      <p class="hint">You'll hear when rest is over. Sharing a machine? No rush: the next set waits until you tap Set done.</p>
    </section>

    <div class="button-row">
      <button type="button" class="secondary" data-action="add-rest">+30 seconds</button>
      <button type="button" class="secondary" data-action="skip-rest">Skip rest</button>
    </div>
    ${Ge(e.day,r)}
    ${Tt(n)}
  `}function jt(e,t,n){return`
    <header class="screen-header">
      <p class="eyebrow">Workout done</p>
      <h1>Nice work!</h1>
      <p class="lead">Your sets are saved, so next time you'll see what you did today.</p>
    </header>

    <section class="card">
      <h2>Today</h2>
      <ul class="summary">${e.exercises.map(n=>{let r=Q(t,e,n.exercise.id),i=u(n.exercise,e.prescription).unit,a=r.length>0?q({date:``,sets:r},i):`skipped`;return`<li><strong>${n.exercise.name}</strong><br /><span class="hint">${a}</span></li>`}).join(``)}</ul>
    </section>

    <section class="card">
      <h2>Cool down</h2>
      <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
      ${D(n,`warm-up`)}
    </section>

    <button type="button" class="primary" data-action="close-session">Back to workouts</button>
  `}function Mt(e,t){let n=u(t.exercise,e.prescription);return`${n.min} to ${n.max} ${n.unit}`}function Nt(e,t){let n=Y(e);if(!n)return``;let r=[e.setNumber===1?`${n.exercise.name}.`:``,`Set ${e.setNumber} of ${e.prescription.sets}.`,`${Mt(e,n)}.`],i=Ct(t,e,n);return e.setNumber===1&&i.weight!==null&&r.push(`Try ${i.weight} pounds.`),r.filter(Boolean).join(` `)}function Pt(e){return`Rest ${e.prescription.restSeconds} seconds.`}function Ft(e){let t=Y(e);return t?e.setNumber===1?`10 seconds. Next up, ${t.exercise.name}.`:`10 seconds. Get ready for set ${e.setNumber}.`:``}var It=10,Lt=30,Rt=`If the pain was sharp or keeps coming back, stop and get it checked.`;function zt(t){let r=xt(),i=r.profile?r.equipmentConfirmed?`today`:`equipment`:`profile`,a=n(new Date),o=null,s=r.profile?{...r.profile}:{...K},c,d={name:``,grams:``,goal:``,error:``},f=!0,p={weight:``,amount:``},m=``,h,g=!1,_=``,v=null,y=!1,b=Ue(k,C);function S(e){C(Z(r)?e:`Couldn't save on this device — changes last until you close the page.`)}function C(e){let n=t.querySelector(`.toast`);n&&(n.textContent=e,n.classList.add(`visible`),window.clearTimeout(c),c=window.setTimeout(()=>n.classList.remove(`visible`),2500))}function E(e){f&&e&&xe(e,{onStart:b.duck,onEnd:b.restore})}function O(e){i=e,e===`profile`&&(s=r.profile?{...r.profile}:{...K}),k(),window.scrollTo(0,0)}function k(){let e=r.profile!==null&&r.equipmentConfirmed,n=r.session!==null;document.body.classList.toggle(`has-nav`,e&&!n),t.innerHTML=`
      <main class="screen">${n?V():A()}</main>
      ${e&&!n?be():``}
      <div class="toast" role="status" aria-live="polite"></div>
    `}function A(){if(i===`profile`)return oe();if(i===`equipment`)return ce();if(i===`progress`){let e=(r.profile??K).weekPlan.filter(Boolean).length;return lt(r.history,new Date,e)}return i===`fuel`?Pe(r.nutrition,n(new Date),d):ye()}function ie(e,t,n,r,i=``){return`<button type="button" class="chip${r?` active`:``}" data-group="${e}" data-value="${t}" aria-pressed="${r}">
      <span>${n}</span>${i?`<small>${i}</small>`:``}
    </button>`}function oe(){let e=r.profile===null;return`
      <header class="screen-header">
        <h1>${e?`Let's set up your workouts`:`Your profile`}</h1>
        <p class="lead">This shapes which exercises you get and how many sets and reps. It stays on this phone.</p>
      </header>

      <section class="card">
        <h2>Your goal</h2>
        <div class="chip-col">
          ${Ke.map(e=>ie(`goal`,e.id,e.label,s.goal===e.id,e.detail)).join(``)}
        </div>
      </section>

      <section class="card">
        <h2>Lifting experience</h2>
        <div class="chip-row">
          ${qe.map(e=>ie(`experience`,e.id,e.label,s.experience===e.id)).join(``)}
        </div>
      </section>

      <section class="card">
        <h2>Your week</h2>
        <p class="hint">Pick a workout for each day, or Rest. Legs days include abs. You can change this any time.</p>
        ${_e(s.weekPlan)}
      </section>

      ${r.profile?de(r.calendar,M(r.profile)):``}

      <section class="card">
        <h2>Areas to protect</h2>
        <p class="hint">Tick anything that's injured, painful, or tight. Risky exercises for these areas are left out, and gentler ones are picked instead.</p>
        <div class="chip-row">
          ${Je.map(e=>ie(`area`,e.id,e.label,s.protectedAreas.includes(e.id))).join(``)}
        </div>
        <p class="disclaimer">This app isn't medical advice. If something hurts beyond normal muscle tiredness, stop, and check with a doctor or physical therapist about what's safe for you.</p>
      </section>

      ${se()}

      <button type="button" class="primary" data-action="save-profile">${e?`Next: your gym's equipment`:`Save profile`}</button>
      ${e?``:`<button type="button" class="secondary" data-nav="equipment">Edit gym equipment</button>`}
    `}function M(e){return JSON.stringify(s.weekPlan)!==JSON.stringify(e.weekPlan)}function se(){let t=r.profile?.avoidedExerciseIds??[];return t.length===0?``:`
      <section class="card">
        <h2>Exercises that hurt</h2>
        <p class="hint">You marked these as hurting, so they're left out of your workouts.</p>
        <ul class="avoided-list">${t.filter(t=>e[t]).map(t=>`
        <li class="avoided-item">
          <span>${e[t].name}</span>
          <button type="button" class="link-button" data-action="unavoid" data-exercise="${t}">Bring back</button>
        </li>`).join(``)}</ul>
      </section>
    `}function N(e,t){if(!r.profile)return;let n=r.profile.avoidedExerciseIds.filter(t=>t!==e);r.profile={...r.profile,avoidedExerciseIds:t?[...n,e]:n},s={...s,avoidedExerciseIds:r.profile.avoidedExerciseIds}}function ce(){let e=!r.equipmentConfirmed,t=new Set(r.equipmentIds);return`
      <header class="screen-header">
        <h1>What does your gym have?</h1>
        <p class="lead">Untick anything your gym doesn't have. You'll only get exercises you can actually do there.</p>
      </header>

      <section class="card equipment-list">
        ${ve.map(e=>`
          <label class="equipment-item">
            <input type="checkbox" data-equipment="${e.id}" ${t.has(e.id)?`checked`:``} />
            <span><strong>${e.name}</strong><small>${e.hint}</small></span>
          </label>`).join(``)}
      </section>

      <button type="button" class="primary" data-action="save-equipment">${e?`See today's workout`:`Save equipment`}</button>
    `}function le(e,t,n){let{exercise:i}=e,a=Ze(r.history,i.id);return`
      <article class="exercise">
        <details>
          <summary>
            <span class="exercise-number">${t+1}</span>
            <span class="exercise-title">
              <strong>${i.name}</strong>
              <small>${i.muscles}</small>
              ${a?`<small class="last-time">Last time: ${q(a,n)}</small>`:``}
            </span>
            <span class="chevron" aria-hidden="true"></span>
          </summary>
          ${te(e)}
          ${ne(e)}
          <button type="button" class="link-button hurt-link" data-action="avoid" data-exercise="${i.id}">This hurts me, replace it</button>
        </details>
      </article>
    `}function P(e){return ee(e,r.profile??K,r.equipmentIds)}function F(){let e=fe(new Date,(r.profile??K).weekPlan,r.workoutLog),t=e.find(e=>e.key===a)??e.find(e=>e.isToday)??e[0];return{week:e,selected:t,shown:(t.isToday&&t.status!==`done`?o:null)??t.workout}}function L(e){r.workoutLog=[...r.workoutLog,{date:new Date().toISOString(),day:e}],o=null}function me(e){return`
      <details class="card switcher">
        <summary>Switch today's workout</summary>
        <p class="hint">Want a different one today? Pick it here. Your week plan stays as it is.</p>
        ${T(e,`Workout for today`)}
      </details>`}function ye(){let{week:e,selected:t,shown:n}=F(),r=he(e,t.key);if(n===null)return`
        <header class="screen-header">
          <p class="eyebrow">${pe(t)}</p>
          <h1>Rest day</h1>
        </header>
        ${r}
        ${ge(t)}
      `;let i=P(n),a=t.status===`done`,o=t.status===`missed`,s=t.isToday&&!a,c=e.some(e=>e.isToday&&e.status!==`done`),d=i.exercises.length>0,f=d?i.exercises.map((e,t)=>le(e,t,u(e.exercise,i.prescription).unit)).join(``):`<section class="card empty">
           <p>None of your gym's equipment fits this day yet.</p>
           <button type="button" class="secondary" data-action="go-equipment">Check your equipment</button>
         </section>`,p=d?a?`<p class="notice done-note">✓ Done. Your sets from this workout are in the Progress tab.</p>`:s?`<button type="button" class="primary big" data-action="start-workout">Start workout</button>
             <p class="hint start-hint">Talks you through each set with a rest timer. Headphones recommended.</p>`:o?`<p class="notice">○ This one wasn't logged. It was planned for ${I[t.weekdayIndex]}.</p>
               ${c?`<button type="button" class="secondary" data-action="do-today" data-workout="${n}">Do it today instead</button>`:``}`:`<p class="hint start-hint">Coming up. You can start it on the day.</p>`:``;return`
      <header class="screen-header">
        <p class="eyebrow">${t.isToday?`Today's workout`:pe(t)}</p>
        <h1>Day ${w(n)} · ${i.title}</h1>
      </header>

      ${r}

      ${p}
      ${s?me(n):``}

      ${We(n,b.current())}

      <section class="card">
        <h2>Warm up first</h2>
        ${D(i.warmUp,`warm-up`)}
      </section>

      <section class="card prescription">
        <h2>For every exercise</h2>
        <p>${l(i.prescription)}</p>
      </section>

      <p class="tap-hint">Tap an exercise to see how to do it.</p>
      <div class="exercise-list">${f}</div>

      <section class="card">
        <h2>Cool down</h2>
        <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
        ${D(i.coolDown,`warm-up`)}
      </section>

      ${d&&s?`<button type="button" class="secondary" data-action="finish-workout">Mark done without workout mode</button>`:``}
    `}function be(){let e=(e,t)=>`<button type="button" class="nav-item${i===e||e===`profile`&&i===`equipment`?` active`:``}" data-nav="${e}">${t}</button>`;return`<nav class="bottom-nav" aria-label="Main">${e(`today`,`Workout`)}${e(`progress`,`Progress`)}${e(`fuel`,`Fuel`)}${e(`profile`,`Profile`)}</nav>`}function R(){let e=t.querySelector(`input[data-field="cal-time"]`)?.value??``;if(!ae(e)){C(`Pick a start time first.`);return}let n=Number(t.querySelector(`select[data-field="cal-minutes"]`)?.value),i=j.includes(n)?n:r.calendar.minutes;r.calendar={time:e,minutes:i},Z(r);let a=(r.profile??K).weekPlan;Se(`gym-guide-week.ics`,`text/calendar;charset=utf-8`,ue(a,r.calendar,new Date)),C(`Calendar file downloaded. Open it to add your workouts.`)}function z(e){return t.querySelector(`input[data-field="${e}"]`)?.value??``}function we(){d={name:z(`protein-name`),grams:z(`protein-grams`),goal:z(`protein-goal`),error:``}}function Te(e,t,i){we();let a=n(new Date),o=r.nutrition;if(e===`water`)r.nutrition=De(o,a,Number(t));else if(e===`water-goal`)r.nutrition={...o,waterGoal:Math.min(20,Math.max(1,o.waterGoal+Number(t)))};else if(e===`quick-protein`){let e=Ee[Number(i)];e&&(r.nutrition=Oe(o,a,e))}else if(e===`add-protein`){let e=je(d.name,d.grams);e?d.error=e:(r.nutrition=Oe(o,a,{name:d.name.trim(),grams:Number(d.grams)}),d={...d,name:``,grams:``})}else if(e===`remove-protein`)r.nutrition=ke(o,a,Number(i));else if(e===`set-protein-goal`){let e=Number(d.goal);!Number.isInteger(e)||e<1||e>400?d.error=`Enter a protein goal in whole grams, between 1 and 400.`:r.nutrition={...o,proteinGoal:e}}else e===`clear-protein-goal`&&(d.goal=String(o.proteinGoal??``),r.nutrition={...o,proteinGoal:null});Z(r)||(d.error=`Couldn't save on this device.`),k()}function V(){let e=r.session;if(!e)return``;if(y)return Dt(e,r.history);switch(e.phase){case`lift`:return v?Ot(e,v):Et(e,r.history,f,_,b.current());case`log`:return kt(e,p,m);case`rest`:return At(e,Date.now(),f,b.current());case`done`:return jt(e,r.history,P(e.day).coolDown)}}function H(){let e=r.session,t=e&&Y(e);if(!e||!t)return;let n=Q(r.history,e,t.exercise.id),i=n[n.length-1],a=Ct(r.history,e,t),o=u(t.exercise,e.prescription),s=i?.weight??a.weight;p={weight:s==null?``:String(s),amount:String(i?.amount??o.max)},m=``}function Ae(e){return t.querySelector(`input[data-field="${e}"]`)?.value.trim()??``}function Me(){let e=r.session,t=e&&Y(e);if(!e||!t)return;let n=(t.exercise.weightKind??`load`)===`bodyweight`;p={weight:Ae(`weight`),amount:Ae(`amount`)};let i=Number(p.amount);if(!Number.isInteger(i)||i<1||i>300){m=`Enter how many reps (or seconds) you did, as a whole number.`,k();return}let a=null;if(!n&&(a=Number(p.weight),p.weight===``||!Number.isFinite(a)||a<0||a>1e3)){m=`Enter the weight in pounds. Use 0 if there was no added weight.`,k();return}r.history=$e(r.history,t.exercise.id,e.startedAt,{weight:a,amount:i}),r.session=mt(e,Date.now()),Z(r),U()}function U(e=!0){window.clearInterval(h);let t=r.session;t&&(t.phase===`rest`?(g=X(t,Date.now())<=It,E(Pt(t)),h=window.setInterval(W,250)):t.phase===`lift`?e&&E(Nt(t,r.history)):t.phase===`done`&&(B(!1),L(t.day),Z(r),E(`Workout complete. Nice work!`),Ce([200,100,200])),k(),window.scrollTo(0,0))}function W(){let e=r.session;if(!e||e.phase!==`rest`){window.clearInterval(h);return}let n=X(e,Date.now()),i=t.querySelector(`[data-timer]`);i&&(i.textContent=re(n)),!g&&n<=It&&n>0&&(g=!0,E(Ft(e))),n===0&&(Ce([300]),r.session=ht(e),Z(r),E(`Go.`),window.setTimeout(()=>U(),f?900:0),window.clearInterval(h))}function Ne(){window.clearInterval(h),v=null,y=!1,B(!1),r.session=null,a=n(new Date),o=null,Z(r),O(`today`)}function G(){let e=r.session,t=e&&Y(e);if(!e||!t||!r.profile)return;N(t.exercise.id,!0);let n=e.exercises.map(e=>e.exercise.id),[i]=x(t,r.profile,r.equipmentIds,n);i?(r.session=vt(e,i),_=`Switched from ${t.exercise.name} to ${i.exercise.name}, which works the same muscles. ${Rt}`,E(`Switched to ${i.exercise.name}.`)):(r.session=_t(e),_=`Skipped ${t.exercise.name}. There's no gentler option for it with your equipment. ${Rt}`),Z(r),U(!i)}function Fe(e,n){let i=r.session;if(i){if(e!==`hurt`&&e!==`toggle-voice`&&(_=``),e===`open-swap`){let e=Y(i);if(!e||!r.profile)return;let t=i.exercises.map(e=>e.exercise.id);v=x(e,r.profile,r.equipmentIds,t),k(),window.scrollTo(0,0)}else if(e===`choose-swap`){let e=v?.[Number(n)];if(v=null,!e)return;r.session=vt(i,e),Z(r),U()}else e===`cancel-swap`?(v=null,k()):e===`hurt`?G():e===`set-done`?(r.session=pt(i),H(),k(),t.querySelector(`input[data-field="amount"]`)?.select()):e===`save-set`?Me():e===`add-rest`?(r.session=gt(i,Lt,Date.now()),g=!1,Z(r),W()):e===`skip-rest`?(r.session=ht(i),Z(r),U()):e===`skip-exercise`?(r.session=_t(i),Z(r),U()):e===`play-music`?b.play(i.day):e===`toggle-voice`?(f=!f,f||window.speechSynthesis?.cancel(),k()):e===`end-workout`?(y=!0,k(),window.scrollTo(0,0)):e===`cancel-end`?(y=!1,k()):e===`confirm-end`?(i.exercises.some(e=>Q(r.history,i,e.exercise.id).length>0)&&L(i.day),Ne()):e===`close-session`&&Ne()}}t.addEventListener(`change`,e=>{let t=e.target;t.dataset.field===`cal-time`&&ae(t.value)?(r.calendar={...r.calendar,time:t.value},Z(r)):t.dataset.field===`cal-minutes`&&j.includes(Number(t.value))&&(r.calendar={...r.calendar,minutes:Number(t.value)},Z(r))}),t.addEventListener(`click`,c=>{let l=c.target.closest(`[data-point]`);if(l){let e=l.closest(`.progress-card`)?.querySelector(`.chart-caption`);e&&(e.textContent=l.dataset.point??``);return}let u=c.target.closest(`button`);if(!u)return;let{group:d,value:f,action:p,day:m,date:h,nav:g,step:_,delta:v,exercise:y,index:x,planDay:ee,planWorkout:w,workout:T}=u.dataset;if(_&&v){let e=t.querySelector(`input[data-field="${_}"]`);e&&(e.value=String(Math.max(0,(Number(e.value)||0)+Number(v))));return}if(ee!==void 0&&w){let e=Number(ee),t=w===`rest`?null:w,n=s.weekPlan.map((n,r)=>r===e?t:n);if(!n.some(Boolean)){C(`Keep at least one workout day.`);return}s.weekPlan=n,k();return}if(d&&f){if(d===`goal`&&(s.goal=f),d===`experience`&&(s.experience=f),d===`area`){let e=f,t=s.protectedAreas;s.protectedAreas=t.includes(e)?t.filter(t=>t!==e):[...t,e]}k();return}if(h){a=h,o=null,k();return}if(m){o=m,k();return}if(g){O(g);return}if(p){if(r.session){Fe(p,x);return}if(i===`fuel`){Te(p,v,x);return}if(p===`save-profile`){let e=r.profile===null;r.profile={...s},e?(Z(r),O(`equipment`)):(O(`today`),S(`Profile saved — your workouts are updated.`))}else if(p===`save-equipment`)r.equipmentIds=[...t.querySelectorAll(`input[data-equipment]`)].filter(e=>e.checked).map(e=>e.dataset.equipment??``),r.equipmentConfirmed=!0,O(`today`),S(`Equipment saved.`);else if(p===`avoid`&&y)N(y,!0),k(),S(`${e[y]?.name??`That exercise`} won't be planned again. Bring it back any time in Profile.`);else if(p===`unavoid`&&y)N(y,!1),k(),S(`${e[y]?.name??`That exercise`} is back in your workouts.`);else if(p===`go-equipment`)O(`equipment`);else if(p===`add-to-calendar`)R();else if(p===`play-music`&&T)b.play(T);else if(p===`do-today`&&T)a=n(new Date),o=T,k(),window.scrollTo(0,0);else if(p===`start-workout`){let{shown:e}=F();if(!e)return;r.session=ut(P(e),new Date),Z(r),B(!0),U()}else if(p===`finish-workout`){let{shown:e}=F();if(!e)return;L(e),O(`today`),S(`Nice work! It's marked done on your calendar.`)}}}),r.session&&(r.session.phase===`rest`&&X(r.session,Date.now())===0&&(r.session=ht(r.session)),r.session.phase===`log`&&H(),B(r.session.phase!==`done`),r.session.phase===`rest`&&(h=window.setInterval(W,250))),k()}var Bt=document.querySelector(`#app`);Bt&&zt(Bt),`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});