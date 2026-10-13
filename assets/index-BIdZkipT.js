(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return`${e.getFullYear()}-${t}-${n}`}function t(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function n(e){let t=new Date(e);return t.setHours(0,0,0,0),t.setDate(t.getDate()-(t.getDay()+6)%7),t}var r=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],i=[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`];function a(r,i,a){let o=e(r),s=n(r),c=new Map;for(let t of a)c.set(e(new Date(t.date)),t.day);return Array.from({length:7},(n,r)=>{let a=t(s,r),l=e(a),u={key:l,date:a,weekdayIndex:r,isToday:l===o},d=c.get(l);if(d)return{...u,status:`done`,workout:d};let f=i[r];return f?l<o?{...u,status:`missed`,workout:null}:{...u,status:`planned`,workout:f}:{...u,status:`rest`,workout:null}})}var o={"machine-chest-press":{id:`machine-chest-press`,name:`Machine Chest Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`chest-press`],setup:[`Set the seat so the handles line up with the middle of your chest.`,`Sit with your back and head flat against the pad, feet flat on the floor.`],steps:[`Grip the handles and press them forward until your arms are almost straight.`,`Bring them back slowly, about 2 seconds, until you feel a light stretch in your chest.`],mistakes:[`Seat too low, so your shoulders do the work instead of your chest.`,`Letting the weight stack slam between reps.`],stress:{shoulders:`moderate`},video:{youtubeId:`B-zyH8OTlsg`,channel:`Hammer Fitness`}},"dumbbell-bench-press":{id:`dumbbell-bench-press`,name:`Dumbbell Bench Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit on the end of a flat bench with dumbbells on your thighs.`,`Lie back, bringing the dumbbells to the sides of your chest.`],steps:[`Press both dumbbells up until your arms are straight above your chest.`,`Lower slowly until your elbows are a little below the bench.`],mistakes:[`Elbows flared straight out to the sides — keep them at about 45° from your body.`,`Arching your lower back off the bench.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`sTYWWaunX8o`,channel:`Born Fitness`}},"incline-dumbbell-press":{id:`incline-dumbbell-press`,name:`Incline Dumbbell Press`,muscles:`Upper chest, front shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline, about 30°.`,`Sit back with a dumbbell at each shoulder.`],steps:[`Press up and slightly in until your arms are straight.`,`Lower slowly back to shoulder level.`],mistakes:[`Bench set too steep, which turns it into a shoulder exercise.`,`Bouncing the weights at the bottom.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`c1ZX5ZXMQVk`,channel:`Vivian Ngo`}},"pec-deck-fly":{id:`pec-deck-fly`,name:`Pec Deck Fly`,muscles:`Chest`,equipment:[`pec-deck`],setup:[`Set the seat so the handles are at chest height.`,`Set the arms so you start with a comfortable stretch, not a deep one.`],steps:[`With a slight bend in your elbows, bring the handles together in front of you.`,`Squeeze for a second, then open slowly.`],mistakes:[`Starting with the arms pulled too far back.`,`Shrugging your shoulders up toward your ears.`],stress:{shoulders:`moderate`},video:{youtubeId:`hZ0CGRaKwbQ`,channel:`Hammer Fitness`}},"cable-fly":{id:`cable-fly`,name:`Cable Chest Fly`,muscles:`Chest`,equipment:[`cable`],setup:[`Set both pulleys at shoulder height with single handles.`,`Step forward into a split stance.`],steps:[`With soft elbows, bring the handles together in front of your chest.`,`Open back out slowly until your hands are in line with your chest.`],mistakes:[`Bending and straightening your elbows — it should be a hug, not a press.`],stress:{shoulders:`moderate`},video:{youtubeId:`pJDbn8Kyx0o`,channel:`StrengthLog`}},"machine-shoulder-press":{id:`machine-shoulder-press`,name:`Machine Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`shoulder-press`],setup:[`Set the seat so the handles start at about shoulder height.`,`Sit with your back flat against the pad.`],steps:[`Press the handles up until your arms are almost straight.`,`Lower slowly back to shoulder height.`],mistakes:[`Arching your lower back off the pad.`,`Pushing your head forward.`],stress:{shoulders:`moderate`},video:{youtubeId:`e5gJP7quyGk`,channel:`Vivian Ngo`}},"seated-dumbbell-shoulder-press":{id:`seated-dumbbell-shoulder-press`,name:`Seated Dumbbell Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench upright with your back supported.`,`Hold a dumbbell at each shoulder, palms forward.`],steps:[`Press up until your arms are straight overhead.`,`Lower slowly back to your shoulders.`],mistakes:[`Leaning back and arching to push heavier weight.`],stress:{shoulders:`moderate`,lowerBack:`moderate`},video:{youtubeId:`fuQpuu--bMI`,channel:`That Fit Friend`}},"dumbbell-lateral-raise":{id:`dumbbell-lateral-raise`,name:`Seated Lateral Raise`,muscles:`Side shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench holding light dumbbells at your sides.`],steps:[`Raise your arms out to the side until they are level with your shoulders.`,`Lower slowly over about 2 seconds.`],mistakes:[`Shrugging — keep your shoulders pressed down, away from your ears.`,`Going too heavy and swinging the weights up.`],stress:{neckUpperBack:`moderate`},video:{youtubeId:`yKAxVcU3nfw`,channel:`Vivian Ngo`}},"cable-tricep-pushdown":{id:`cable-tricep-pushdown`,name:`Cable Tricep Pushdown`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley high with a rope or straight bar.`,`Stand close with your elbows tucked at your sides.`],steps:[`Push down until your arms are straight, without moving your elbows.`,`Let it rise slowly back to about chest height.`],mistakes:[`Elbows drifting forward.`,`Leaning your whole body over the bar.`],stress:{},video:{youtubeId:`d-ySLTHUgQA`,channel:`Vivian Ngo`}},"overhead-cable-extension":{id:`overhead-cable-extension`,name:`Overhead Cable Tricep Extension`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley low with a rope.`,`Face away from the machine, rope behind your head.`],steps:[`Straighten your arms overhead.`,`Bend your elbows slowly to lower the rope behind your head.`],mistakes:[`Elbows flaring wide.`,`Arching your lower back.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`mRozZKkGIfg`,channel:`Bodybuilding.com`}},"assisted-dip":{id:`assisted-dip`,name:`Assisted Dip`,muscles:`Triceps, chest`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the dip handles.`],steps:[`Lower until your elbows are at about 90°.`,`Push back up to straight arms.`],mistakes:[`Going too deep, which strains the front of the shoulder.`],stress:{shoulders:`high`,wrists:`moderate`},video:{youtubeId:`slD5hhM_thg`,channel:`UMW Campus Recreation`},weightKind:`assist`},"lat-pulldown":{id:`lat-pulldown`,name:`Lat Pulldown`,muscles:`Upper back (lats), biceps`,equipment:[`lat-pulldown`],setup:[`Set the knee pad so your thighs are snug underneath it.`,`Grip the bar a little wider than your shoulders.`],steps:[`Pull the bar down to your upper chest, leading with your elbows.`,`Let it rise slowly until your arms are straight.`],mistakes:[`Pulling the bar behind your neck — always pull to the front.`,`Leaning far back and using momentum.`],stress:{wrists:`moderate`},video:{youtubeId:`oMJmAHRZXBk`,channel:`UC Davis Health`}},"assisted-pullup":{id:`assisted-pullup`,name:`Assisted Pull-Up`,muscles:`Upper back (lats), biceps`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the top handles.`],steps:[`Pull yourself up until your chin is over the handles.`,`Lower slowly to straight arms.`],mistakes:[`Craning your neck to get your chin over.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`fnHeovkmkkk`,channel:`Fitness 19`},weightKind:`assist`},"chest-supported-row":{id:`chest-supported-row`,name:`Chest-Supported Dumbbell Row`,muscles:`Mid back, rear shoulders, biceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline and lie face down on it, chest on the pad.`,`Let a dumbbell hang straight down from each hand.`],steps:[`Pull the dumbbells up toward your hips, squeezing your shoulder blades together.`,`Lower slowly until your arms are straight.`],mistakes:[`Lifting your chest off the pad.`,`Shrugging the weights up instead of rowing.`],stress:{},video:{youtubeId:`Nx0TzjgsI-0`,channel:`PureGym`}},"seated-cable-row":{id:`seated-cable-row`,name:`Seated Cable Row`,muscles:`Mid back, biceps`,equipment:[`seated-row`],setup:[`Sit with feet on the footplates and knees slightly bent.`,`Grip the handle and sit up tall.`],steps:[`Pull the handle to your belly button, squeezing your shoulder blades together.`,`Let your arms straighten slowly without rounding your back.`],mistakes:[`Rocking your torso back and forth.`,`Rounding your lower back as the handle goes forward.`],stress:{lowerBack:`moderate`},video:{youtubeId:`oFtfkSElE0s`,channel:`Hammer Fitness`}},"face-pull":{id:`face-pull`,name:`Cable Face Pull`,muscles:`Rear shoulders, upper back`,equipment:[`cable`],setup:[`Set the pulley at about face height with a rope.`,`Hold the rope ends with thumbs pointing back.`],steps:[`Pull the rope toward your face, splitting the ends apart beside your ears.`,`Return slowly with control.`],mistakes:[`Going heavy — this is a light, controlled exercise.`,`Shrugging toward your ears.`],stress:{},video:{youtubeId:`eTCBSFlCJ_s`,channel:`NASM`}},"reverse-pec-deck":{id:`reverse-pec-deck`,name:`Reverse Pec Deck`,muscles:`Rear shoulders, upper back`,equipment:[`pec-deck`],setup:[`Sit facing the pad, chest against it.`,`Set the handles so your arms start in front of you.`],steps:[`With slightly bent elbows, open your arms out to the side.`,`Return slowly.`],mistakes:[`Shrugging your shoulders up.`,`Swinging the weight.`],stress:{},video:{youtubeId:`v0rJuhEa59c`,channel:`FIT.nl`}},"dumbbell-curl":{id:`dumbbell-curl`,name:`Seated Dumbbell Curl`,muscles:`Biceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench with a dumbbell in each hand, palms forward.`],steps:[`Curl the weights up, keeping your elbows at your sides.`,`Lower slowly to straight arms.`],mistakes:[`Swinging your body to lift the weight.`,`Elbows drifting forward.`],stress:{wrists:`moderate`},video:{youtubeId:`SW5JS2Wf2uQ`,channel:`Horton Barbell`}},"cable-curl":{id:`cable-curl`,name:`Cable Curl`,muscles:`Biceps`,equipment:[`cable`],setup:[`Set the pulley low with a straight bar.`,`Stand close with elbows at your sides.`],steps:[`Curl the bar up toward your shoulders.`,`Lower slowly.`],mistakes:[`Leaning back to help the weight up.`],stress:{wrists:`moderate`},video:{youtubeId:`0TtZgAuC8Vw`,channel:`Holly Perkins`}},"hammer-curl":{id:`hammer-curl`,name:`Seated Hammer Curl`,muscles:`Biceps, forearms`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright with dumbbells at your sides, palms facing each other.`],steps:[`Curl up keeping your palms facing each other.`,`Lower slowly.`],mistakes:[`Swinging the weights.`],stress:{},video:{youtubeId:`bdlqQAVdcEk`,channel:`Vivian Ngo`}},"leg-press":{id:`leg-press`,name:`Leg Press`,muscles:`Thighs, glutes`,equipment:[`leg-press`],setup:[`Sit back with your lower back flat against the pad.`,`Feet shoulder-width apart, in the middle or slightly high on the platform.`],steps:[`Release the safety handles and lower the platform slowly.`,`Stop when your knees reach about 90°, before your lower back starts to lift off the pad.`,`Push back up through your whole foot, without locking your knees.`],mistakes:[`Going so deep your hips curl up off the seat.`,`Knees caving inward — keep them pointing the same way as your toes.`],stress:{knees:`moderate`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`90NY9tka1TQ`,channel:`Vivian Ngo`}},"barbell-back-squat":{id:`barbell-back-squat`,name:`Barbell Back Squat`,muscles:`Thighs, glutes, core`,equipment:[`squat-rack`],setup:[`Set the bar at upper-chest height.`,`Step under it and rest it across your upper back.`],steps:[`Squat down until your thighs are about parallel to the floor.`,`Drive back up through your feet.`],mistakes:[`Knees caving in.`,`Rounding your back at the bottom.`],stress:{knees:`high`,lowerBack:`high`,neckUpperBack:`moderate`,feet:`moderate`},video:{youtubeId:`8PMjqgR8Wa8`,channel:`Barbell Rehab`}},"goblet-squat":{id:`goblet-squat`,name:`Goblet Squat`,muscles:`Thighs, glutes`,equipment:[`dumbbells`],setup:[`Hold one dumbbell upright against your chest.`,`Feet slightly wider than shoulders, toes turned out a little.`],steps:[`Sit down between your heels, keeping your chest up.`,`Stand back up.`],mistakes:[`Heels lifting off the floor.`,`Knees caving in.`],stress:{knees:`high`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`zsN2WvklwDk`,channel:`Janice Liang`}},"glute-bridge":{id:`glute-bridge`,name:`Dumbbell Glute Bridge`,muscles:`Glutes, hamstrings`,equipment:[`dumbbells`,`mat`],setup:[`Lie on your back on a mat, knees bent, feet flat and hip-width apart.`,`Rest a dumbbell across your hips and hold it in place.`],steps:[`Squeeze your glutes and lift your hips until your body is straight from knees to shoulders.`,`Hold for a second, then lower slowly.`],mistakes:[`Arching your lower back at the top — the lift should come from your glutes.`],stress:{},video:{youtubeId:`PSMW7iSi2BU`,channel:`Holly Perkins`}},"dumbbell-romanian-deadlift":{id:`dumbbell-romanian-deadlift`,name:`Dumbbell Romanian Deadlift`,muscles:`Hamstrings, glutes`,equipment:[`dumbbells`],setup:[`Stand holding dumbbells in front of your thighs, knees slightly bent.`],steps:[`Push your hips back and lower the weights along your legs, back flat.`,`Stand back up by squeezing your glutes.`],mistakes:[`Rounding your back.`,`Turning it into a squat by bending your knees a lot.`],stress:{lowerBack:`high`},video:{youtubeId:`dNQucsVf90I`,channel:`Vivian Ngo`}},"seated-leg-curl":{id:`seated-leg-curl`,name:`Leg Curl`,muscles:`Hamstrings`,equipment:[`leg-curl`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit just above your heels.`],steps:[`Bend your knees to pull the pad down and back.`,`Return slowly to almost straight.`],mistakes:[`Letting the weight snap your legs straight.`,`Lifting your hips to cheat the weight.`],stress:{knees:`moderate`},video:{youtubeId:`_2Kd0d-JEUM`,channel:`NASM`}},"hip-abduction":{id:`hip-abduction`,name:`Hip Abduction Machine`,muscles:`Outer glutes`,equipment:[`hip-abduction`],setup:[`Sit with your back against the pad, pads on the outside of your knees.`],steps:[`Push your knees outward.`,`Return slowly without letting the weights touch.`],mistakes:[`Rocking your body to move the weight.`],stress:{},video:{youtubeId:`5O_Y9l__iao`,channel:`Hammer Fitness`}},"leg-extension":{id:`leg-extension`,name:`Leg Extension`,muscles:`Front of thighs`,equipment:[`leg-extension`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit on your lower shins.`],steps:[`Straighten your legs.`,`Lower slowly.`],mistakes:[`Kicking the weight up fast.`],stress:{knees:`high`},video:{youtubeId:`MXvSzXEBOTI`,channel:`Steev`}},"dead-bug":{id:`dead-bug`,name:`Dead Bug`,muscles:`Deep core`,equipment:[`mat`],setup:[`Lie on your back with arms pointing up and knees bent at 90° above your hips.`],steps:[`Press your lower back gently into the mat.`,`Slowly lower one arm and the opposite leg toward the floor, then return. Switch sides.`],mistakes:[`Letting your lower back lift off the mat — make the movement smaller if it does.`],stress:{},video:{youtubeId:`bxn9FBrt4-A`,channel:`NASM`},weightKind:`bodyweight`},"pallof-press":{id:`pallof-press`,name:`Cable Pallof Press`,muscles:`Core, obliques`,equipment:[`cable`],setup:[`Set a cable at chest height with a single handle.`,`Stand side-on to the machine, holding the handle at your chest with both hands.`],steps:[`Press the handle straight out in front of you without letting it pull you sideways.`,`Hold for 2 seconds, bring it back. Do both sides.`],mistakes:[`Twisting toward the machine.`],stress:{},video:{youtubeId:`SY5lRzBPtM4`,channel:`Fitness Lab`}},"cable-crunch":{id:`cable-crunch`,name:`Cable Crunch`,muscles:`Abs`,equipment:[`cable`],setup:[`Set the pulley high with a rope.`,`Kneel facing the machine, rope beside your head.`],steps:[`Crunch down, bringing your elbows toward your knees.`,`Rise back up slowly.`],mistakes:[`Pulling with your arms instead of your abs.`,`Yanking your neck forward.`],stress:{lowerBack:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`0KEP6A1deBE`,channel:`Travis Tarrant`}},"side-plank":{id:`side-plank`,name:`Side Plank`,muscles:`Obliques, core`,equipment:[`mat`],setup:[`Lie on your side, propped up on your forearm, elbow under your shoulder.`],steps:[`Lift your hips so your body is a straight line.`,`Hold for 20–30 seconds. Switch sides.`],mistakes:[`Hips sagging toward the floor.`],stress:{shoulders:`moderate`},video:{youtubeId:`0M-erHBl48U`,channel:`Heal Fit Physio`},weightKind:`bodyweight`,timedSeconds:{min:20,max:30}}},s={push:{title:`Push — chest, shoulders, triceps`,slots:[{label:`Chest`,options:[`machine-chest-press`,`dumbbell-bench-press`]},{label:`Shoulders`,options:[`machine-shoulder-press`,`seated-dumbbell-shoulder-press`]},{label:`Upper chest`,options:[`incline-dumbbell-press`,`cable-fly`,`pec-deck-fly`]},{label:`Triceps`,options:[`cable-tricep-pushdown`,`overhead-cable-extension`,`assisted-dip`]},{label:`Side shoulders`,options:[`dumbbell-lateral-raise`]},{label:`Chest squeeze`,options:[`pec-deck-fly`,`cable-fly`]}]},pull:{title:`Pull — back, biceps`,slots:[{label:`Upper back`,options:[`lat-pulldown`,`assisted-pullup`]},{label:`Mid back`,options:[`chest-supported-row`,`seated-cable-row`]},{label:`Rear shoulders`,options:[`face-pull`,`reverse-pec-deck`]},{label:`Biceps`,options:[`dumbbell-curl`,`cable-curl`]},{label:`Second back`,options:[`seated-cable-row`,`assisted-pullup`,`chest-supported-row`]},{label:`Biceps & forearms`,options:[`hammer-curl`,`cable-curl`]}]},legs:{title:`Legs + Abs`,slots:[{label:`Thighs`,options:[`leg-press`,`barbell-back-squat`,`goblet-squat`]},{label:`Glutes`,options:[`glute-bridge`,`dumbbell-romanian-deadlift`]},{label:`Hamstrings`,options:[`seated-leg-curl`,`dumbbell-romanian-deadlift`]},{label:`Core`,options:[`dead-bug`,`pallof-press`]},{label:`Outer glutes`,options:[`hip-abduction`]},{label:`Abs`,options:[`pallof-press`,`side-plank`,`cable-crunch`]},{label:`Front thighs`,options:[`leg-extension`]}]}},c=[`push`,`pull`,`legs`],l={new:4,some:5,experienced:7},u=`Pick a weight where the last 2 reps feel hard but your form stays clean.`,d={"lean-muscle":{new:{sets:3,repMin:10,repMax:12,restSeconds:90,tip:u},some:{sets:3,repMin:8,repMax:12,restSeconds:90,tip:u},experienced:{sets:4,repMin:8,repMax:12,restSeconds:90,tip:`Take the last set close to failure with good form.`}},strength:{new:{sets:3,repMin:8,repMax:10,restSeconds:120,tip:`Learn the movement before going heavy.`},some:{sets:4,repMin:6,repMax:8,restSeconds:120,tip:u},experienced:{sets:4,repMin:5,repMax:6,restSeconds:150,tip:u}},general:{new:{sets:2,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},some:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},experienced:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Keep rests short.`}}};function f(e){return`${e.sets} sets of ${e.repMin}–${e.repMax} reps, resting about ${e.restSeconds} seconds between sets. ${e.tip}`}function p(e,t){return e.timedSeconds?{...e.timedSeconds,unit:`seconds`}:{min:t.repMin,max:t.repMax,unit:`reps`}}var m=`One light set of your first exercise at about half your usual weight.`,h={push:[`Arm circles: 10 forward, then 10 backward.`,`Wall slides: stand with your back to a wall and slowly slide your arms up and down, 10 reps.`,m],pull:[`Arm circles: 10 forward, then 10 backward.`,`Shoulder rolls: 10 slow rolls backward.`,m],legs:[`Leg swings: hold onto something steady and swing each leg forward and back 10 times, then side to side 10 times.`,`Hip circles: hands on hips, 10 slow circles each way.`,`Bodyweight glute bridges: 10 slow reps on a mat.`,m]},g={push:[`Doorway chest stretch: forearm on a door frame or post, step through until you feel your chest stretch. Each side.`,`Cross-body shoulder stretch: pull one arm across your chest with the other. Each side.`,`Overhead triceps stretch: reach one hand down your back and gently press the elbow with the other hand. Each side.`],pull:[`Lat stretch: hold a post at chest height and sit your hips back until you feel it along your side.`,`Cross-body shoulder stretch: pull one arm across your chest with the other. Each side.`,`Biceps stretch: palm flat on a wall behind you at shoulder height, then turn your body away. Each side.`],legs:[`Lying hamstring stretch: on your back, lift one straight leg and hold behind the thigh. Each side.`,`Figure-4 glute stretch: on your back, cross one ankle over the other knee and pull the bottom leg in. Each side.`,`Lying quad stretch: on your side, hold your top ankle and bring your heel toward you, only as far as is comfortable. Each side.`]},_={neckUpperBack:[`Gentle neck stretch: tilt one ear toward your shoulder without pulling. Each side.`],lowerBack:[`Knees to chest: on your back, hug both knees in gently and breathe slowly.`]},v={neckUpperBack:[`Chin tucks: sit tall and gently slide your chin straight back, 10 slow reps.`,`Open books: lie on your side, knees bent, and slowly rotate your top arm open, 8 per side.`],lowerBack:[`Cat-cow on a mat: slowly round and arch your back, 10 reps, staying in a pain-free range.`],knees:[`Keep the bike seat high enough that your knee is only slightly bent at the bottom.`]},y={knees:`Go easy on your knees: use a shorter range and stop before any knee pain.`,lowerBack:`Go easy on your lower back: keep it pressed against the pad and lift lighter.`,neckUpperBack:`Go easy on your neck: keep your shoulders down and your head still.`,feet:`Go easy on your feet: keep your whole foot flat and wear supportive shoes.`,shoulders:`Go easy on your shoulders: use a smaller range and lighter weight.`,wrists:`Go easy on your wrists: keep them straight, not bent back.`};function b(e,t){return e.equipment.every(e=>t.has(e))}function x(e,t){return t.filter(t=>e.stress[t]===`moderate`)}function S(e,t){return t.some(t=>e.stress[t]===`high`)}function C(e,t,n,r){return e.options.map(e=>o[e]).filter(e=>!r.has(e.id)&&!t.avoidedExerciseIds.includes(e.id)).filter(e=>b(e,n)).filter(e=>!S(e,t.protectedAreas)).sort((e,n)=>x(e,t.protectedAreas).length-x(n,t.protectedAreas).length).map(n=>({exercise:n,slot:e,cautionAreas:x(n,t.protectedAreas)}))}function ee(e,t,n,r){return C(e.slot,t,new Set(n),new Set([...r,e.exercise.id]))}function te(e,t,n){let r=new Set(n),i=s[e],a=i.slots.slice(0,l[t.experience]),o=new Set,c=[];for(let e of a){let[n]=C(e,t,r,o);n&&(o.add(n.exercise.id),c.push(n))}let u=[r.has(`bike`)?`5 minutes on the stationary bike at an easy pace.`:`5 minutes of brisk walking to warm up.`,...t.protectedAreas.flatMap(e=>v[e]??[]),...h[e]],f=[...g[e],...t.protectedAreas.flatMap(e=>_[e]??[])];return{day:e,title:i.title,prescription:d[t.goal][t.experience],warmUp:u,exercises:c,coolDown:f}}var w={push:`Push`,pull:`Pull`,legs:`Legs + Abs`},T={push:`Push`,pull:`Pull`,legs:`Legs`};function E(e){return c.indexOf(e)+1}function ne(e,t){return`<nav class="day-tabs" aria-label="${t}">${c.map(t=>`
      <button type="button" class="day-tab${t===e?` active`:``}" data-day="${t}" aria-pressed="${t===e}">
        <small class="day-number">Day ${E(t)}</small>${w[t]}
      </button>`).join(``)}</nav>`}function re(e){return`https://www.youtube.com/watch?v=${e}`}function D(e,t=``){return`<ul class="${t}">${e.map(e=>`<li>${e}</li>`).join(``)}</ul>`}function ie(e){return e.cautionAreas.map(e=>`<p class="caution">${y[e]}</p>`).join(``)}function ae(e){let{exercise:t}=e,n=e=>`<ol>${e.map(e=>`<li>${e}</li>`).join(``)}</ol>`;return`
    <h3>Set up</h3>
    ${n(t.setup)}
    <h3>How to do it</h3>
    ${n(t.steps)}
    <h3>Avoid</h3>
    ${D(t.mistakes,`mistakes`)}
    <a class="demo-link" href="${re(t.video.youtubeId)}" target="_blank" rel="noopener noreferrer">
      Watch the demo video ↗<small>by ${t.video.channel}</small>
    </a>
  `}function O(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function oe(e){let t=Math.floor(e/60),n=e%60;return`${t}:${String(n).padStart(2,`0`)}`}function se(e){return e.toLocaleDateString(void 0,{month:`long`,day:`numeric`})}function ce(e){return e.isToday?`Today`:`${i[e.weekdayIndex]}, ${se(e.date)}`}function le(e){let t=e.status===`done`&&e.workout?`${w[e.workout]} workout, done`:e.status===`planned`&&e.workout?`${w[e.workout]} planned`:e.status===`missed`?`no workout logged`:`rest day`;return`${i[e.weekdayIndex]} ${se(e.date)}, ${t}${e.isToday?`, today`:``}`}function ue(e,t){return`
    <div class="calendar" role="group" aria-label="This week">${e.map(e=>{let n=e.workout?T[e.workout]:e.status===`missed`?`–`:`Rest`;return`
        <button type="button" class="${[`cal-day`,`cal-${e.status}`,e.isToday?`today`:``,e.key===t?`selected`:``].filter(Boolean).join(` `)}" data-date="${e.key}"
                aria-pressed="${e.key===t}" aria-label="${le(e)}">
          <span class="cal-weekday">${r[e.weekdayIndex]}</span>
          <span class="cal-date">${e.date.getDate()}</span>
          <span class="cal-label">${n}</span>
          <span class="cal-mark" aria-hidden="true">${e.status===`done`?`✓`:``}</span>
        </button>`}).join(``)}</div>
    <p class="cal-legend">✓ done · orange outline = today · tap a day to see it</p>
  `}function de(e){return e.status===`missed`?`
      <section class="card">
        <p>No workout was logged on this day. That's fine, and the rest of your week stays as planned.</p>
      </section>`:`
    <section class="card">
      <p>Rest day. Your muscles grow while you recover, so a walk or some stretching is plenty.</p>
      ${e.isToday?`<p class="picker-hint">Training anyway? Pick today's workout:</p>${ne(null,`Pick a workout for today`)}`:``}
    </section>`}function fe(e){let t=[{value:`rest`,label:`Rest`,spoken:`Rest`},...c.map(e=>({value:e,label:T[e],spoken:w[e]}))];return`<div class="plan-editor">${i.map((n,r)=>{let i=e[r]??`rest`;return`
      <div class="plan-row">
        <span class="plan-day">${n}</span>
        <div class="plan-options">${t.map(e=>`
          <button type="button" class="plan-option${e.value===i?` active`:``}"
                  data-plan-day="${r}" data-plan-workout="${e.value}"
                  aria-pressed="${e.value===i}" aria-label="${n}: ${e.spoken}">${e.label}</button>`).join(``)}</div>
      </div>`}).join(``)}</div>`}var pe=[{id:`dumbbells`,name:`Dumbbells`,hint:`Rack of free weights`},{id:`bench`,name:`Adjustable bench`,hint:`Flat or tilted bench`},{id:`mat`,name:`Floor mat`,hint:`Stretching / ab area`},{id:`cable`,name:`Cable machine`,hint:`Pulley tower with handles`},{id:`lat-pulldown`,name:`Lat pulldown`,hint:`Seated, pull a bar down`},{id:`seated-row`,name:`Seated cable row`,hint:`Seated, pull a handle in`},{id:`chest-press`,name:`Chest press machine`,hint:`Seated, push handles forward`},{id:`shoulder-press`,name:`Shoulder press machine`,hint:`Seated, push handles up`},{id:`pec-deck`,name:`Pec deck / rear delt fly`,hint:`Seated, arms swing together`},{id:`assisted-pullup`,name:`Assisted pull-up / dip`,hint:`Kneel on a pad that helps lift you`},{id:`leg-press`,name:`Leg press`,hint:`Seated, push a platform with your feet`},{id:`leg-curl`,name:`Leg curl machine`,hint:`Bend knees against a pad`},{id:`leg-extension`,name:`Leg extension machine`,hint:`Straighten knees against a pad`},{id:`hip-abduction`,name:`Hip abduction machine`,hint:`Seated, push knees outward`},{id:`squat-rack`,name:`Squat rack + barbell`,hint:`Barbell resting on hooks`},{id:`bike`,name:`Stationary bike`,hint:`For warm-ups`}],k=pe.map(e=>e.id);function me(e){if(!(`speechSynthesis`in window))return;window.speechSynthesis.cancel();let t=new SpeechSynthesisUtterance(e);t.rate=1,window.speechSynthesis.speak(t)}function he(e){`vibrate`in navigator&&navigator.vibrate(e)}var A=null,j=!1;async function M(){if(`wakeLock`in navigator&&document.visibilityState===`visible`)try{A=await navigator.wakeLock.request(`screen`)}catch{A=null}}document.addEventListener(`visibilitychange`,()=>{j&&document.visibilityState===`visible`&&M()});function N(e){j=e,e?M():(A?.release(),A=null)}var P={waterGoal:8,proteinGoal:null,days:{}},ge=[{name:`2 eggs`,grams:12},{name:`Chicken breast (palm-size)`,grams:30},{name:`Greek yogurt (1 cup)`,grams:20},{name:`Protein shake (1 scoop)`,grams:25},{name:`Paneer (100 g)`,grams:18},{name:`Tofu (half block)`,grams:20},{name:`Dal / lentils (1 cup)`,grams:18},{name:`Milk (1 glass)`,grams:8}];function F(e,t){return e.days[t]??{glasses:0,protein:[]}}function I(e,t,n){return{...e,days:{...e.days,[t]:n}}}function _e(e,t,n){let r=F(e,t);return I(e,t,{...r,glasses:Math.max(0,r.glasses+n)})}function ve(e,t,n){let r=F(e,t);return I(e,t,{...r,protein:[...r.protein,n]})}function ye(e,t,n){let r=F(e,t);return I(e,t,{...r,protein:r.protein.filter((e,t)=>t!==n)})}function be(e){return e.protein.reduce((e,t)=>e+t.grams,0)}function xe(e,t){if(e.trim()===``)return`Type what you ate.`;let n=Number(t);return t.trim()===``||!Number.isFinite(n)||n<=0||n>300?`Enter the protein in grams, between 1 and 300.`:null}function L(e,t){return`<div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${t}" aria-valuenow="${e}">
    <div class="meter-fill" style="width: ${Math.min(100,Math.round(e/t*100))}%"></div>
  </div>`}function R(e,t){let n=e.waterGoal;return`
    <section class="card">
      <h2>Water</h2>
      <p class="fuel-total"><strong>${t}</strong> of ${n} glasses${t>=n?` — goal reached!`:``}</p>
      ${L(t,n)}
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
  `}function Se(e){return`
    <p class="hint">Set a daily goal to see how close you are. A common target for building muscle is about 0.7 g of protein per pound of body weight; a doctor or dietitian can tell you what's right for you.</p>
    <div class="inline-form">
      <input type="number" inputmode="numeric" min="1" placeholder="e.g. 100" value="${O(e.goal)}" data-field="protein-goal" aria-label="Daily protein goal in grams" />
      <span>g</span>
      <button type="button" class="secondary" data-action="set-protein-goal">Set goal</button>
    </div>
  `}function Ce(e,t,n){let r=F(e,t),i=be(r),a=e.proteinGoal;return`
    <section class="card">
      <h2>Protein</h2>
      ${a===null?`<p class="fuel-total"><strong>${i}</strong> g today</p>`:`<p class="fuel-total"><strong>${i}</strong> of ${a} g${i>=a?` — goal reached!`:``}</p>${L(i,a)}`}
      ${r.protein.length===0?`<p class="hint">Nothing logged yet today. Tap a food below to add it.</p>`:`<ul class="entry-list">${r.protein.map((e,t)=>`
          <li>
            <span>${O(e.name)}</span>
            <span class="entry-grams">${e.grams} g</span>
            <button type="button" class="link-button" data-action="remove-protein" data-index="${t}" aria-label="Remove ${O(e.name)}">Remove</button>
          </li>`).join(``)}</ul>`}

      <h3>Quick add</h3>
      <div class="quick-grid">${ge.map((e,t)=>`
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

      ${a===null?Se(n):`<button type="button" class="link-button" data-action="clear-protein-goal">Change protein goal (${a} g)</button>`}
    </section>
  `}function we(e,t,n){return`
    <header class="screen-header">
      <h1>Fuel</h1>
      <p class="lead">Water and protein help your muscles recover. Today's log resets at midnight.</p>
    </header>
    ${R(e,F(e,t).glasses)}
    ${Ce(e,t,n)}
  `}var Te=[{id:`lean-muscle`,label:`Build lean muscle`,detail:`Gain muscle for a toned look`},{id:`strength`,label:`Get stronger`,detail:`Lift heavier, fewer reps`},{id:`general`,label:`General fitness`,detail:`Lighter, steady routine`}],Ee=[{id:`new`,label:`New to lifting`},{id:`some`,label:`Some experience`},{id:`experienced`,label:`Experienced`}],De=[{id:`knees`,label:`Knees`},{id:`lowerBack`,label:`Lower back`},{id:`neckUpperBack`,label:`Neck / upper back`},{id:`feet`,label:`Feet / ankles`},{id:`shoulders`,label:`Shoulders`},{id:`wrists`,label:`Wrists`}],z={goal:`lean-muscle`,experience:`new`,protectedAreas:[],avoidedExerciseIds:[],weekPlan:[`push`,null,`pull`,null,`legs`,null,null]};function Oe(e){let t=[null,null,null,null,null,null,null];return[...e].filter(e=>Number.isInteger(e)&&e>=0&&e<=6).sort((e,t)=>e-t).forEach((e,n)=>{t[e]=c[n%c.length]}),t}function B(e){let{gymDays:t,...n}=e,r={...z,...n};if(!n.weekPlan&&Array.isArray(t)){let e=Oe(t);e.some(Boolean)&&(r.weekPlan=e)}return r}function ke(e,t){let n=e[t];return n?.[n.length-1]}function V(e,t){let n=e.sets.map(e=>e.amount).join(`, `),r=e.sets[e.sets.length-1]?.weight,i=t===`seconds`?` sec`:` reps`;return r==null?`${n}${i}`:`${r} lb × ${n}${i}`}function H(e,t,n){if(!e||e.sets.length===0)return{weight:null,message:n===`bodyweight`?`First time: aim for ${t.min}–${t.max} ${t.unit}.`:`First time: start light. Find a weight where the last 2 reps feel hard but your form stays clean.`};let r=e.sets.every(e=>e.amount>=t.max),i=e.sets.reduce((e,t)=>e+t.amount,0)/e.sets.length<t.min-2,a=e.sets[e.sets.length-1].weight;if(n===`bodyweight`||a===null)return{weight:null,message:r?`You hit ${t.max} on every set. Try a couple more ${t.unit} each set.`:`Aim for ${t.max} ${t.unit} on every set.`};let o=n===`assist`?Math.max(0,a-5):a+5,s=n===`assist`?a+5:Math.max(0,a-5);return r?{weight:o,message:n===`assist`?`You hit ${t.max} reps every set. Try ${o} lb of help (a little less).`:`You hit ${t.max} reps every set. Try ${o} lb.`}:i?{weight:s,message:`That was heavy. Try ${s} lb and aim for ${t.min}–${t.max} reps.`}:{weight:a,message:`Stay at ${a} lb and aim for ${t.max} reps on every set.`}}function Ae(e,t,n,r){let i=e[t]??[],a=i[i.length-1],o=a&&a.date===n?[...i.slice(0,-1),{...a,sets:[...a.sets,r]}]:[...i,{date:n,sets:[r]}];return{...e,[t]:o}}function U(e){let t=new Map;for(let[n,r]of Object.entries(e))for(let e of r){if(e.sets.length===0)continue;let r=t.get(e.date)??{date:e.date,entries:[]};r.entries.push({exerciseId:n,session:e}),t.set(e.date,r)}return[...t.values()].sort((e,t)=>t.date.localeCompare(e.date))}function W(e,t){let r=n(t);return U(e).filter(e=>new Date(e.date)>=r).length}function G(e,t){return e.filter(e=>e.sets.length>0).map(e=>{if(t===`bodyweight`)return Math.max(...e.sets.map(e=>e.amount));let n=e.sets.map(e=>e.weight??0);return t===`assist`?Math.min(...n):Math.max(...n)})}var K=10;function je(e){return e.timedSeconds?`seconds`:`reps`}function q(e){return new Date(e).toLocaleDateString(void 0,{weekday:`short`,month:`short`,day:`numeric`})}function Me(e,t){let n=e.weightKind??`load`;return n===`bodyweight`?`${t} ${e.timedSeconds?`sec`:`reps`}`:n===`assist`?`${t} lb of help`:`${t} lb`}function Ne(e,t,n){let r={top:22,right:20,bottom:22,left:20},i=Math.min(...n),a=Math.max(...n),o=a-i||1,s=e=>r.left+e*(300-r.left-r.right)/(n.length-1),c=e=>r.top+(a-e)*(110-r.top-r.bottom)/o,l=n.map((e,t)=>`${t===0?`M`:`L`}${s(t).toFixed(1)},${c(e).toFixed(1)}`).join(` `),u=n.map((n,r)=>{let i=`${q(t[r])}: ${Me(e,n)}`;return`
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
      <text x="${r.left}" y="106" class="axis-label">${q(t[0])}</text>
      <text x="${300-r.right}" y="106" class="axis-label" text-anchor="end">${q(t[t.length-1])}</text>
    </svg>
    <p class="chart-caption" aria-live="polite">Tap a dot to see that day.</p>
  `}function Pe(e){return Object.entries(e).filter(([e,t])=>o[e]&&t.some(e=>e.sets.length>0)).map(([e,t])=>{let n=o[e],r=t.filter(e=>e.sets.length>0),i=G(r,n.weightKind??`load`),a=r[r.length-1],s=(n.weightKind??`load`)===`assist`?Math.min(...i):Math.max(...i),c=i.length>=2?Ne(n,r.map(e=>e.date),i):`<p class="hint">Log it again to start a chart.</p>`;return`
        <section class="card progress-card">
          <h3 class="progress-name">${n.name}</h3>
          <p class="progress-stats">
            <span>Best: <strong>${Me(n,s)}</strong></span>
            <span>Last: ${V(a,je(n))}</span>
          </p>
          ${c}
        </section>`}).join(``)}function Fe(e){return U(e).slice(0,K).map(e=>{let t=e.entries.filter(({exerciseId:e})=>o[e]).map(({exerciseId:e,session:t})=>{let n=o[e];return`<li>${n.name}: <span class="hint">${V(t,je(n))}</span></li>`}).join(``);return`
        <section class="card">
          <h3 class="progress-name">${q(e.date)}</h3>
          <ul class="summary">${t}</ul>
        </section>`}).join(``)}function Ie(e,t,n){let r=`
    <header class="screen-header">
      <h1>Your progress</h1>
      <p class="lead">Everything here comes from the sets you log in workout mode.</p>
    </header>`;if(U(e).length===0)return`${r}
      <section class="card empty">
        <p>No workouts logged yet. Start a workout and save your sets, and your progress will show up here.</p>
        <button type="button" class="secondary" data-nav="today">Go to today's workout</button>
      </section>`;let i=W(e,t);return`${r}
    <section class="card week-card">
      <p class="week-count"><strong>${i}</strong> of ${n}</p>
      <p>workouts this week${i>=n?` — goal reached!`:``}</p>
      <p class="hint">That's the number of workout days in your week plan (change it in Profile). The week starts Monday.</p>
    </section>

    <h2 class="section-title">Exercises</h2>
    ${Pe(e)}

    <h2 class="section-title">Recent workouts</h2>
    ${Fe(e)}
  `}function Le(e,t){return{day:e.day,startedAt:t.toISOString(),exercises:e.exercises,prescription:e.prescription,index:0,setNumber:1,phase:e.exercises.length>0?`lift`:`done`,restEndsAt:null}}function J(e){return e.exercises[e.index]}function Re(e){return e.setNumber>=e.prescription.sets}function ze(e){return e.index>=e.exercises.length-1}function Be(e){return{...e,phase:`log`}}function Ve(e,t){if(Re(e)&&ze(e))return{...e,phase:`done`,restEndsAt:null};let n=t+e.prescription.restSeconds*1e3;return Re(e)?{...e,index:e.index+1,setNumber:1,phase:`rest`,restEndsAt:n}:{...e,setNumber:e.setNumber+1,phase:`rest`,restEndsAt:n}}function He(e){return{...e,phase:`lift`,restEndsAt:null}}function Ue(e,t,n){let r=Math.max(e.restEndsAt??n,n);return{...e,restEndsAt:r+t*1e3}}function We(e){return ze(e)?{...e,phase:`done`,restEndsAt:null}:{...e,index:e.index+1,setNumber:1,phase:`lift`,restEndsAt:null}}function Ge(e,t){let n=e.exercises.map((n,r)=>r===e.index?t:n);return{...e,exercises:n,setNumber:1,phase:`lift`,restEndsAt:null}}function Y(e,t){return e.restEndsAt===null?0:Math.max(0,Math.ceil((e.restEndsAt-t)/1e3))}var Ke=`gymGuide.v1`;function qe(){return{profile:null,equipmentIds:[...k],equipmentConfirmed:!1,history:{},session:null,nutrition:P,workoutLog:[]}}function Je(){try{let e=localStorage.getItem(Ke);if(!e)return qe();let t=JSON.parse(e);return{...qe(),...t,profile:t.profile?B(t.profile):null,nutrition:{...P,...t.nutrition}}}catch{return qe()}}function X(e){try{return localStorage.setItem(Ke,JSON.stringify(e)),!0}catch{return!1}}function Z(e,t,n){let r=ke(e,n);return r&&r.date===t.startedAt?r.sets:[]}function Ye(e,t,n){let r=(e[n]??[]).filter(e=>e.date!==t.startedAt);return r[r.length-1]}function Q(e,t,n){let r=p(n.exercise,t.prescription);return H(Ye(e,t,n.exercise.id),r,n.exercise.weightKind??`load`)}function Xe(e,t){let n=p(t.exercise,e.prescription);return`${n.min}–${n.max} ${n.unit}`}function $(e){return`Exercise ${e.index+1} of ${e.exercises.length} · Day ${E(e.day)} ${w[e.day]}`}function Ze(e,t=!1){return`
    <div class="session-controls">
      <button type="button" class="link-button" data-action="toggle-voice" aria-pressed="${e}">Voice: ${e?`on`:`off`}</button>
      ${t?`<button type="button" class="link-button" data-action="skip-exercise">Skip exercise</button>`:``}
      <button type="button" class="link-button" data-action="end-workout">End workout</button>
    </div>
  `}function Qe(e,t,n,r){let i=J(e);if(!i)return``;let a=Ye(t,e,i.exercise.id),o=p(i.exercise,e.prescription),s=Q(t,e,i),c=Z(t,e,i.exercise.id);return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>${i.exercise.name}</h1>
    </header>

    ${r?`<p class="notice" role="status">${r}</p>`:``}

    <section class="card set-card">
      <p class="set-label">Set ${e.setNumber} of ${e.prescription.sets}</p>
      <p class="set-target">${Xe(e,i)}</p>
      ${a?`<p class="last-time">Last time: ${V(a,o.unit)}</p>`:``}
      ${e.setNumber===1?`<p class="suggestion">${s.message}</p>`:``}
      ${c.length>0?`<p class="last-time">Today so far: ${V({date:``,sets:c},o.unit)}</p>`:``}
    </section>

    ${ie(i)}

    <button type="button" class="primary big" data-action="set-done">Set done</button>

    <details class="card how-to">
      <summary>How to do it</summary>
      ${ae(i)}
    </details>

    <div class="button-row">
      <button type="button" class="secondary" data-action="open-swap">Swap</button>
      <button type="button" class="secondary" data-action="hurt">This hurt</button>
    </div>
    ${Ze(n,!0)}
  `}function $e(e,t){let n=e.exercises.reduce((n,r)=>n+Z(t,e,r.exercise.id).length,0),r=n>0?`You've logged ${n} ${n===1?`set`:`sets`}. They're saved, and this workout will show as done on your calendar.`:`You haven't logged any sets yet, so nothing will be saved.`;return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>End this workout?</h1>
      <p class="lead">${r}</p>
    </header>

    <button type="button" class="primary big" data-action="confirm-end">Yes, end workout</button>
    <button type="button" class="secondary" data-action="cancel-end">Keep going</button>
  `}function et(e,t){let n=J(e);if(!n)return``;let r=t.length===0?`<section class="card empty"><p>There's no other exercise for this spot with your gym's equipment. You can skip it instead.</p></section>`:t.map((e,t)=>`
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
  `}function tt(e,t,n){let r=J(e);if(!r)return``;let i=r.exercise.weightKind??`load`,a=p(r.exercise,e.prescription),o=r.exercise.equipment.includes(`dumbbells`),s=i===`assist`?`Help from the machine (lb)`:o?`Weight (lb, per dumbbell)`:`Weight (lb)`,c=(e,t,n,r)=>`
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
  `}function nt(e,t,n){let r=J(e);if(!r)return``;let i=e.setNumber===1?`Next exercise: <strong>${r.exercise.name}</strong>`:`Next: set ${e.setNumber} of ${e.prescription.sets}, ${r.exercise.name}`;return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>Rest</h1>
    </header>

    <section class="card rest-card">
      <p class="timer" data-timer aria-live="off">${oe(Y(e,t))}</p>
      <p>${i}</p>
      <p class="hint">You'll hear when rest is over. Sharing a machine? No rush: the next set waits until you tap Set done.</p>
    </section>

    <div class="button-row">
      <button type="button" class="secondary" data-action="add-rest">+30 seconds</button>
      <button type="button" class="secondary" data-action="skip-rest">Skip rest</button>
    </div>
    ${Ze(n)}
  `}function rt(e,t,n){return`
    <header class="screen-header">
      <p class="eyebrow">Workout done</p>
      <h1>Nice work!</h1>
      <p class="lead">Your sets are saved, so next time you'll see what you did today.</p>
    </header>

    <section class="card">
      <h2>Today</h2>
      <ul class="summary">${e.exercises.map(n=>{let r=Z(t,e,n.exercise.id),i=p(n.exercise,e.prescription).unit,a=r.length>0?V({date:``,sets:r},i):`skipped`;return`<li><strong>${n.exercise.name}</strong><br /><span class="hint">${a}</span></li>`}).join(``)}</ul>
    </section>

    <section class="card">
      <h2>Cool down</h2>
      <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
      ${D(n,`warm-up`)}
    </section>

    <button type="button" class="primary" data-action="close-session">Back to workouts</button>
  `}function it(e,t){let n=p(t.exercise,e.prescription);return`${n.min} to ${n.max} ${n.unit}`}function at(e,t){let n=J(e);if(!n)return``;let r=[e.setNumber===1?`${n.exercise.name}.`:``,`Set ${e.setNumber} of ${e.prescription.sets}.`,`${it(e,n)}.`],i=Q(t,e,n);return e.setNumber===1&&i.weight!==null&&r.push(`Try ${i.weight} pounds.`),r.filter(Boolean).join(` `)}function ot(e){return`Rest ${e.prescription.restSeconds} seconds.`}function st(e){let t=J(e);return t?e.setNumber===1?`10 seconds. Next up, ${t.exercise.name}.`:`10 seconds. Get ready for set ${e.setNumber}.`:``}var ct=10,lt=30,ut=`If the pain was sharp or keeps coming back, stop and get it checked.`;function dt(t){let n=Je(),r=n.profile?n.equipmentConfirmed?`today`:`equipment`:`profile`,i=e(new Date),s=null,c=n.profile?{...n.profile}:{...z},l,u={name:``,grams:``,goal:``,error:``},d=!0,m={weight:``,amount:``},h=``,g,_=!1,v=``,y=null,b=!1;function x(e){S(X(n)?e:`Couldn't save on this device — changes last until you close the page.`)}function S(e){let n=t.querySelector(`.toast`);n&&(n.textContent=e,n.classList.add(`visible`),window.clearTimeout(l),l=window.setTimeout(()=>n.classList.remove(`visible`),2500))}function C(e){d&&e&&me(e)}function w(e){r=e,e===`profile`&&(c=n.profile?{...n.profile}:{...z}),T(),window.scrollTo(0,0)}function T(){let e=n.profile!==null&&n.equipmentConfirmed,r=n.session!==null;t.innerHTML=`
      <main class="screen">${r?Oe():re()}</main>
      ${e&&!r?L():``}
      <div class="toast" role="status" aria-live="polite"></div>
    `}function re(){if(r===`profile`)return se();if(r===`equipment`)return A();if(r===`progress`){let e=(n.profile??z).weekPlan.filter(Boolean).length;return Ie(n.history,new Date,e)}return r===`fuel`?we(n.nutrition,e(new Date),u):be()}function O(e,t,n,r,i=``){return`<button type="button" class="chip${r?` active`:``}" data-group="${e}" data-value="${t}" aria-pressed="${r}">
      <span>${n}</span>${i?`<small>${i}</small>`:``}
    </button>`}function se(){let e=n.profile===null;return`
      <header class="screen-header">
        <h1>${e?`Let's set up your workouts`:`Your profile`}</h1>
        <p class="lead">This shapes which exercises you get and how many sets and reps. It stays on this phone.</p>
      </header>

      <section class="card">
        <h2>Your goal</h2>
        <div class="chip-col">
          ${Te.map(e=>O(`goal`,e.id,e.label,c.goal===e.id,e.detail)).join(``)}
        </div>
      </section>

      <section class="card">
        <h2>Lifting experience</h2>
        <div class="chip-row">
          ${Ee.map(e=>O(`experience`,e.id,e.label,c.experience===e.id)).join(``)}
        </div>
      </section>

      <section class="card">
        <h2>Your week</h2>
        <p class="hint">Pick a workout for each day, or Rest. Legs days include abs. You can change this any time.</p>
        ${fe(c.weekPlan)}
      </section>

      <section class="card">
        <h2>Areas to protect</h2>
        <p class="hint">Tick anything that's injured, painful, or tight. Risky exercises for these areas are left out, and gentler ones are picked instead.</p>
        <div class="chip-row">
          ${De.map(e=>O(`area`,e.id,e.label,c.protectedAreas.includes(e.id))).join(``)}
        </div>
        <p class="disclaimer">This app isn't medical advice. If something hurts beyond normal muscle tiredness, stop, and check with a doctor or physical therapist about what's safe for you.</p>
      </section>

      ${le()}

      <button type="button" class="primary" data-action="save-profile">${e?`Next: your gym's equipment`:`Save profile`}</button>
      ${e?``:`<button type="button" class="secondary" data-nav="equipment">Edit gym equipment</button>`}
    `}function le(){let e=n.profile?.avoidedExerciseIds??[];return e.length===0?``:`
      <section class="card">
        <h2>Exercises that hurt</h2>
        <p class="hint">You marked these as hurting, so they're left out of your workouts.</p>
        <ul class="avoided-list">${e.filter(e=>o[e]).map(e=>`
        <li class="avoided-item">
          <span>${o[e].name}</span>
          <button type="button" class="link-button" data-action="unavoid" data-exercise="${e}">Bring back</button>
        </li>`).join(``)}</ul>
      </section>
    `}function k(e,t){if(!n.profile)return;let r=n.profile.avoidedExerciseIds.filter(t=>t!==e);n.profile={...n.profile,avoidedExerciseIds:t?[...r,e]:r},c={...c,avoidedExerciseIds:n.profile.avoidedExerciseIds}}function A(){let e=!n.equipmentConfirmed,t=new Set(n.equipmentIds);return`
      <header class="screen-header">
        <h1>What does your gym have?</h1>
        <p class="lead">Untick anything your gym doesn't have. You'll only get exercises you can actually do there.</p>
      </header>

      <section class="card equipment-list">
        ${pe.map(e=>`
          <label class="equipment-item">
            <input type="checkbox" data-equipment="${e.id}" ${t.has(e.id)?`checked`:``} />
            <span><strong>${e.name}</strong><small>${e.hint}</small></span>
          </label>`).join(``)}
      </section>

      <button type="button" class="primary" data-action="save-equipment">${e?`See today's workout`:`Save equipment`}</button>
    `}function j(e,t,r){let{exercise:i}=e,a=ke(n.history,i.id);return`
      <article class="exercise">
        <details>
          <summary>
            <span class="exercise-number">${t+1}</span>
            <span class="exercise-title">
              <strong>${i.name}</strong>
              <small>${i.muscles}</small>
              ${a?`<small class="last-time">Last time: ${V(a,r)}</small>`:``}
            </span>
            <span class="chevron" aria-hidden="true"></span>
          </summary>
          ${ie(e)}
          ${ae(e)}
          <button type="button" class="link-button hurt-link" data-action="avoid" data-exercise="${i.id}">This hurts me, replace it</button>
        </details>
      </article>
    `}function M(e){return te(e,n.profile??z,n.equipmentIds)}function P(){let e=a(new Date,(n.profile??z).weekPlan,n.workoutLog),t=e.find(e=>e.key===i)??e.find(e=>e.isToday)??e[0];return{week:e,selected:t,shown:(t.isToday&&t.status!==`done`?s:null)??t.workout}}function F(e){n.workoutLog=[...n.workoutLog,{date:new Date().toISOString(),day:e}],s=null}function I(e){return`
      <details class="card switcher">
        <summary>Switch today's workout</summary>
        <p class="hint">Want a different one today? Pick it here. Your week plan stays as it is.</p>
        ${ne(e,`Workout for today`)}
      </details>`}function be(){let{week:e,selected:t,shown:n}=P(),r=ue(e,t.key);if(n===null)return`
        <header class="screen-header">
          <p class="eyebrow">${ce(t)}</p>
          <h1>${t.status===`missed`?`No workout logged`:`Rest day`}</h1>
        </header>
        ${r}
        ${de(t)}
      `;let i=M(n),a=t.status===`done`,o=t.isToday&&!a,s=i.exercises.length>0,c=s?i.exercises.map((e,t)=>j(e,t,p(e.exercise,i.prescription).unit)).join(``):`<section class="card empty">
           <p>None of your gym's equipment fits this day yet.</p>
           <button type="button" class="secondary" data-action="go-equipment">Check your equipment</button>
         </section>`,l=s?a?`<p class="notice done-note">✓ Done. Your sets from this workout are in the Progress tab.</p>`:o?`<button type="button" class="primary big" data-action="start-workout">Start workout</button>
             <p class="hint start-hint">Talks you through each set with a rest timer. Headphones recommended.</p>`:`<p class="hint start-hint">Coming up. You can start it on the day.</p>`:``;return`
      <header class="screen-header">
        <p class="eyebrow">${t.isToday?`Today's workout`:ce(t)}</p>
        <h1>Day ${E(n)} · ${i.title}</h1>
      </header>

      ${r}

      ${l}
      ${o?I(n):``}

      <section class="card">
        <h2>Warm up first</h2>
        ${D(i.warmUp,`warm-up`)}
      </section>

      <section class="card prescription">
        <h2>For every exercise</h2>
        <p>${f(i.prescription)}</p>
      </section>

      <p class="tap-hint">Tap an exercise to see how to do it.</p>
      <div class="exercise-list">${c}</div>

      <section class="card">
        <h2>Cool down</h2>
        <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
        ${D(i.coolDown,`warm-up`)}
      </section>

      ${s&&o?`<button type="button" class="secondary" data-action="finish-workout">Mark done without workout mode</button>`:``}
    `}function L(){let e=(e,t)=>`<button type="button" class="nav-item${r===e||e===`profile`&&r===`equipment`?` active`:``}" data-nav="${e}">${t}</button>`;return`<nav class="bottom-nav" aria-label="Main">${e(`today`,`Workout`)}${e(`progress`,`Progress`)}${e(`fuel`,`Fuel`)}${e(`profile`,`Profile`)}</nav>`}function R(e){return t.querySelector(`input[data-field="${e}"]`)?.value??``}function Se(){u={name:R(`protein-name`),grams:R(`protein-grams`),goal:R(`protein-goal`),error:``}}function Ce(t,r,i){Se();let a=e(new Date),o=n.nutrition;if(t===`water`)n.nutrition=_e(o,a,Number(r));else if(t===`water-goal`)n.nutrition={...o,waterGoal:Math.min(20,Math.max(1,o.waterGoal+Number(r)))};else if(t===`quick-protein`){let e=ge[Number(i)];e&&(n.nutrition=ve(o,a,e))}else if(t===`add-protein`){let e=xe(u.name,u.grams);e?u.error=e:(n.nutrition=ve(o,a,{name:u.name.trim(),grams:Number(u.grams)}),u={...u,name:``,grams:``})}else if(t===`remove-protein`)n.nutrition=ye(o,a,Number(i));else if(t===`set-protein-goal`){let e=Number(u.goal);!Number.isInteger(e)||e<1||e>400?u.error=`Enter a protein goal in whole grams, between 1 and 400.`:n.nutrition={...o,proteinGoal:e}}else t===`clear-protein-goal`&&(u.goal=String(o.proteinGoal??``),n.nutrition={...o,proteinGoal:null});X(n)||(u.error=`Couldn't save on this device.`),T()}function Oe(){let e=n.session;if(!e)return``;if(b)return $e(e,n.history);switch(e.phase){case`lift`:return y?et(e,y):Qe(e,n.history,d,v);case`log`:return tt(e,m,h);case`rest`:return nt(e,Date.now(),d);case`done`:return rt(e,n.history,M(e.day).coolDown)}}function B(){let e=n.session,t=e&&J(e);if(!e||!t)return;let r=Z(n.history,e,t.exercise.id),i=r[r.length-1],a=Q(n.history,e,t),o=p(t.exercise,e.prescription),s=i?.weight??a.weight;m={weight:s==null?``:String(s),amount:String(i?.amount??o.max)},h=``}function H(e){return t.querySelector(`input[data-field="${e}"]`)?.value.trim()??``}function U(){let e=n.session,t=e&&J(e);if(!e||!t)return;let r=(t.exercise.weightKind??`load`)===`bodyweight`;m={weight:H(`weight`),amount:H(`amount`)};let i=Number(m.amount);if(!Number.isInteger(i)||i<1||i>300){h=`Enter how many reps (or seconds) you did, as a whole number.`,T();return}let a=null;if(!r&&(a=Number(m.weight),m.weight===``||!Number.isFinite(a)||a<0||a>1e3)){h=`Enter the weight in pounds. Use 0 if there was no added weight.`,T();return}n.history=Ae(n.history,t.exercise.id,e.startedAt,{weight:a,amount:i}),n.session=Ve(e,Date.now()),X(n),W()}function W(e=!0){window.clearInterval(g);let t=n.session;t&&(t.phase===`rest`?(_=Y(t,Date.now())<=ct,C(ot(t)),g=window.setInterval(G,250)):t.phase===`lift`?e&&C(at(t,n.history)):t.phase===`done`&&(N(!1),F(t.day),X(n),C(`Workout complete. Nice work!`),he([200,100,200])),T(),window.scrollTo(0,0))}function G(){let e=n.session;if(!e||e.phase!==`rest`){window.clearInterval(g);return}let r=Y(e,Date.now()),i=t.querySelector(`[data-timer]`);i&&(i.textContent=oe(r)),!_&&r<=ct&&r>0&&(_=!0,C(st(e))),r===0&&(he([300]),n.session=He(e),X(n),C(`Go.`),window.setTimeout(()=>W(),d?900:0),window.clearInterval(g))}function K(){window.clearInterval(g),y=null,b=!1,N(!1),n.session=null,i=e(new Date),s=null,X(n),w(`today`)}function je(){let e=n.session,t=e&&J(e);if(!e||!t||!n.profile)return;k(t.exercise.id,!0);let r=e.exercises.map(e=>e.exercise.id),[i]=ee(t,n.profile,n.equipmentIds,r);i?(n.session=Ge(e,i),v=`Switched from ${t.exercise.name} to ${i.exercise.name}, which works the same muscles. ${ut}`,C(`Switched to ${i.exercise.name}.`)):(n.session=We(e),v=`Skipped ${t.exercise.name}. There's no gentler option for it with your equipment. ${ut}`),X(n),W(!i)}function q(e,r){let i=n.session;if(i){if(e!==`hurt`&&e!==`toggle-voice`&&(v=``),e===`open-swap`){let e=J(i);if(!e||!n.profile)return;let t=i.exercises.map(e=>e.exercise.id);y=ee(e,n.profile,n.equipmentIds,t),T(),window.scrollTo(0,0)}else if(e===`choose-swap`){let e=y?.[Number(r)];if(y=null,!e)return;n.session=Ge(i,e),X(n),W()}else e===`cancel-swap`?(y=null,T()):e===`hurt`?je():e===`set-done`?(n.session=Be(i),B(),T(),t.querySelector(`input[data-field="amount"]`)?.select()):e===`save-set`?U():e===`add-rest`?(n.session=Ue(i,lt,Date.now()),_=!1,X(n),G()):e===`skip-rest`?(n.session=He(i),X(n),W()):e===`skip-exercise`?(n.session=We(i),X(n),W()):e===`toggle-voice`?(d=!d,d||window.speechSynthesis?.cancel(),T()):e===`end-workout`?(b=!0,T(),window.scrollTo(0,0)):e===`cancel-end`?(b=!1,T()):e===`confirm-end`?(i.exercises.some(e=>Z(n.history,i,e.exercise.id).length>0)&&F(i.day),K()):e===`close-session`&&K()}}t.addEventListener(`click`,e=>{let a=e.target.closest(`[data-point]`);if(a){let e=a.closest(`.progress-card`)?.querySelector(`.chart-caption`);e&&(e.textContent=a.dataset.point??``);return}let l=e.target.closest(`button`);if(!l)return;let{group:u,value:d,action:f,day:p,date:m,nav:h,step:g,delta:_,exercise:v,index:y,planDay:b,planWorkout:C}=l.dataset;if(g&&_){let e=t.querySelector(`input[data-field="${g}"]`);e&&(e.value=String(Math.max(0,(Number(e.value)||0)+Number(_))));return}if(b!==void 0&&C){let e=Number(b),t=C===`rest`?null:C,n=c.weekPlan.map((n,r)=>r===e?t:n);if(!n.some(Boolean)){S(`Keep at least one workout day.`);return}c.weekPlan=n,T();return}if(u&&d){if(u===`goal`&&(c.goal=d),u===`experience`&&(c.experience=d),u===`area`){let e=d,t=c.protectedAreas;c.protectedAreas=t.includes(e)?t.filter(t=>t!==e):[...t,e]}T();return}if(m){i=m,s=null,T();return}if(p){s=p,T();return}if(h){w(h);return}if(f){if(n.session){q(f,y);return}if(r===`fuel`){Ce(f,_,y);return}if(f===`save-profile`){let e=n.profile===null;n.profile={...c},e?(X(n),w(`equipment`)):(w(`today`),x(`Profile saved — your workouts are updated.`))}else if(f===`save-equipment`)n.equipmentIds=[...t.querySelectorAll(`input[data-equipment]`)].filter(e=>e.checked).map(e=>e.dataset.equipment??``),n.equipmentConfirmed=!0,w(`today`),x(`Equipment saved.`);else if(f===`avoid`&&v)k(v,!0),T(),x(`${o[v]?.name??`That exercise`} won't be planned again. Bring it back any time in Profile.`);else if(f===`unavoid`&&v)k(v,!1),T(),x(`${o[v]?.name??`That exercise`} is back in your workouts.`);else if(f===`go-equipment`)w(`equipment`);else if(f===`start-workout`){let{shown:e}=P();if(!e)return;n.session=Le(M(e),new Date),X(n),N(!0),W()}else if(f===`finish-workout`){let{shown:e}=P();if(!e)return;F(e),w(`today`),x(`Nice work! It's marked done on your calendar.`)}}}),n.session&&(n.session.phase===`rest`&&Y(n.session,Date.now())===0&&(n.session=He(n.session)),n.session.phase===`log`&&B(),N(n.session.phase!==`done`),n.session.phase===`rest`&&(g=window.setInterval(G,250))),T()}var ft=document.querySelector(`#app`);ft&&dt(ft),`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});