(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`dumbbells`,name:`Dumbbells`,hint:`Rack of free weights`},{id:`bench`,name:`Adjustable bench`,hint:`Flat or tilted bench`},{id:`mat`,name:`Floor mat`,hint:`Stretching / ab area`},{id:`cable`,name:`Cable machine`,hint:`Pulley tower with handles`},{id:`lat-pulldown`,name:`Lat pulldown`,hint:`Seated, pull a bar down`},{id:`seated-row`,name:`Seated cable row`,hint:`Seated, pull a handle in`},{id:`chest-press`,name:`Chest press machine`,hint:`Seated, push handles forward`},{id:`shoulder-press`,name:`Shoulder press machine`,hint:`Seated, push handles up`},{id:`pec-deck`,name:`Pec deck / rear delt fly`,hint:`Seated, arms swing together`},{id:`assisted-pullup`,name:`Assisted pull-up / dip`,hint:`Kneel on a pad that helps lift you`},{id:`leg-press`,name:`Leg press`,hint:`Seated, push a platform with your feet`},{id:`leg-curl`,name:`Leg curl machine`,hint:`Bend knees against a pad`},{id:`leg-extension`,name:`Leg extension machine`,hint:`Straighten knees against a pad`},{id:`hip-abduction`,name:`Hip abduction machine`,hint:`Seated, push knees outward`},{id:`squat-rack`,name:`Squat rack + barbell`,hint:`Barbell resting on hooks`},{id:`bike`,name:`Stationary bike`,hint:`For warm-ups`}],t=e.map(e=>e.id),n={"machine-chest-press":{id:`machine-chest-press`,name:`Machine Chest Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`chest-press`],setup:[`Set the seat so the handles line up with the middle of your chest.`,`Sit with your back and head flat against the pad, feet flat on the floor.`],steps:[`Grip the handles and press them forward until your arms are almost straight.`,`Bring them back slowly, about 2 seconds, until you feel a light stretch in your chest.`],mistakes:[`Seat too low, so your shoulders do the work instead of your chest.`,`Letting the weight stack slam between reps.`],stress:{shoulders:`moderate`},video:{youtubeId:`B-zyH8OTlsg`,channel:`Hammer Fitness`}},"dumbbell-bench-press":{id:`dumbbell-bench-press`,name:`Dumbbell Bench Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit on the end of a flat bench with dumbbells on your thighs.`,`Lie back, bringing the dumbbells to the sides of your chest.`],steps:[`Press both dumbbells up until your arms are straight above your chest.`,`Lower slowly until your elbows are a little below the bench.`],mistakes:[`Elbows flared straight out to the sides — keep them at about 45° from your body.`,`Arching your lower back off the bench.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`sTYWWaunX8o`,channel:`Born Fitness`}},"incline-dumbbell-press":{id:`incline-dumbbell-press`,name:`Incline Dumbbell Press`,muscles:`Upper chest, front shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline, about 30°.`,`Sit back with a dumbbell at each shoulder.`],steps:[`Press up and slightly in until your arms are straight.`,`Lower slowly back to shoulder level.`],mistakes:[`Bench set too steep, which turns it into a shoulder exercise.`,`Bouncing the weights at the bottom.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`c1ZX5ZXMQVk`,channel:`Vivian Ngo`}},"pec-deck-fly":{id:`pec-deck-fly`,name:`Pec Deck Fly`,muscles:`Chest`,equipment:[`pec-deck`],setup:[`Set the seat so the handles are at chest height.`,`Set the arms so you start with a comfortable stretch, not a deep one.`],steps:[`With a slight bend in your elbows, bring the handles together in front of you.`,`Squeeze for a second, then open slowly.`],mistakes:[`Starting with the arms pulled too far back.`,`Shrugging your shoulders up toward your ears.`],stress:{shoulders:`moderate`},video:{youtubeId:`hZ0CGRaKwbQ`,channel:`Hammer Fitness`}},"cable-fly":{id:`cable-fly`,name:`Cable Chest Fly`,muscles:`Chest`,equipment:[`cable`],setup:[`Set both pulleys at shoulder height with single handles.`,`Step forward into a split stance.`],steps:[`With soft elbows, bring the handles together in front of your chest.`,`Open back out slowly until your hands are in line with your chest.`],mistakes:[`Bending and straightening your elbows — it should be a hug, not a press.`],stress:{shoulders:`moderate`},video:{youtubeId:`pJDbn8Kyx0o`,channel:`StrengthLog`}},"machine-shoulder-press":{id:`machine-shoulder-press`,name:`Machine Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`shoulder-press`],setup:[`Set the seat so the handles start at about shoulder height.`,`Sit with your back flat against the pad.`],steps:[`Press the handles up until your arms are almost straight.`,`Lower slowly back to shoulder height.`],mistakes:[`Arching your lower back off the pad.`,`Pushing your head forward.`],stress:{shoulders:`moderate`},video:{youtubeId:`e5gJP7quyGk`,channel:`Vivian Ngo`}},"seated-dumbbell-shoulder-press":{id:`seated-dumbbell-shoulder-press`,name:`Seated Dumbbell Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench upright with your back supported.`,`Hold a dumbbell at each shoulder, palms forward.`],steps:[`Press up until your arms are straight overhead.`,`Lower slowly back to your shoulders.`],mistakes:[`Leaning back and arching to push heavier weight.`],stress:{shoulders:`moderate`,lowerBack:`moderate`},video:{youtubeId:`fuQpuu--bMI`,channel:`That Fit Friend`}},"dumbbell-lateral-raise":{id:`dumbbell-lateral-raise`,name:`Seated Lateral Raise`,muscles:`Side shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench holding light dumbbells at your sides.`],steps:[`Raise your arms out to the side until they are level with your shoulders.`,`Lower slowly over about 2 seconds.`],mistakes:[`Shrugging — keep your shoulders pressed down, away from your ears.`,`Going too heavy and swinging the weights up.`],stress:{neckUpperBack:`moderate`},video:{youtubeId:`yKAxVcU3nfw`,channel:`Vivian Ngo`}},"cable-tricep-pushdown":{id:`cable-tricep-pushdown`,name:`Cable Tricep Pushdown`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley high with a rope or straight bar.`,`Stand close with your elbows tucked at your sides.`],steps:[`Push down until your arms are straight, without moving your elbows.`,`Let it rise slowly back to about chest height.`],mistakes:[`Elbows drifting forward.`,`Leaning your whole body over the bar.`],stress:{},video:{youtubeId:`d-ySLTHUgQA`,channel:`Vivian Ngo`}},"overhead-cable-extension":{id:`overhead-cable-extension`,name:`Overhead Cable Tricep Extension`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley low with a rope.`,`Face away from the machine, rope behind your head.`],steps:[`Straighten your arms overhead.`,`Bend your elbows slowly to lower the rope behind your head.`],mistakes:[`Elbows flaring wide.`,`Arching your lower back.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`mRozZKkGIfg`,channel:`Bodybuilding.com`}},"assisted-dip":{id:`assisted-dip`,name:`Assisted Dip`,muscles:`Triceps, chest`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the dip handles.`],steps:[`Lower until your elbows are at about 90°.`,`Push back up to straight arms.`],mistakes:[`Going too deep, which strains the front of the shoulder.`],stress:{shoulders:`high`,wrists:`moderate`},video:{youtubeId:`slD5hhM_thg`,channel:`UMW Campus Recreation`},weightKind:`assist`},"lat-pulldown":{id:`lat-pulldown`,name:`Lat Pulldown`,muscles:`Upper back (lats), biceps`,equipment:[`lat-pulldown`],setup:[`Set the knee pad so your thighs are snug underneath it.`,`Grip the bar a little wider than your shoulders.`],steps:[`Pull the bar down to your upper chest, leading with your elbows.`,`Let it rise slowly until your arms are straight.`],mistakes:[`Pulling the bar behind your neck — always pull to the front.`,`Leaning far back and using momentum.`],stress:{wrists:`moderate`},video:{youtubeId:`oMJmAHRZXBk`,channel:`UC Davis Health`}},"assisted-pullup":{id:`assisted-pullup`,name:`Assisted Pull-Up`,muscles:`Upper back (lats), biceps`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the top handles.`],steps:[`Pull yourself up until your chin is over the handles.`,`Lower slowly to straight arms.`],mistakes:[`Craning your neck to get your chin over.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`fnHeovkmkkk`,channel:`Fitness 19`},weightKind:`assist`},"chest-supported-row":{id:`chest-supported-row`,name:`Chest-Supported Dumbbell Row`,muscles:`Mid back, rear shoulders, biceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline and lie face down on it, chest on the pad.`,`Let a dumbbell hang straight down from each hand.`],steps:[`Pull the dumbbells up toward your hips, squeezing your shoulder blades together.`,`Lower slowly until your arms are straight.`],mistakes:[`Lifting your chest off the pad.`,`Shrugging the weights up instead of rowing.`],stress:{},video:{youtubeId:`Nx0TzjgsI-0`,channel:`PureGym`}},"seated-cable-row":{id:`seated-cable-row`,name:`Seated Cable Row`,muscles:`Mid back, biceps`,equipment:[`seated-row`],setup:[`Sit with feet on the footplates and knees slightly bent.`,`Grip the handle and sit up tall.`],steps:[`Pull the handle to your belly button, squeezing your shoulder blades together.`,`Let your arms straighten slowly without rounding your back.`],mistakes:[`Rocking your torso back and forth.`,`Rounding your lower back as the handle goes forward.`],stress:{lowerBack:`moderate`},video:{youtubeId:`oFtfkSElE0s`,channel:`Hammer Fitness`}},"face-pull":{id:`face-pull`,name:`Cable Face Pull`,muscles:`Rear shoulders, upper back`,equipment:[`cable`],setup:[`Set the pulley at about face height with a rope.`,`Hold the rope ends with thumbs pointing back.`],steps:[`Pull the rope toward your face, splitting the ends apart beside your ears.`,`Return slowly with control.`],mistakes:[`Going heavy — this is a light, controlled exercise.`,`Shrugging toward your ears.`],stress:{},video:{youtubeId:`eTCBSFlCJ_s`,channel:`NASM`}},"reverse-pec-deck":{id:`reverse-pec-deck`,name:`Reverse Pec Deck`,muscles:`Rear shoulders, upper back`,equipment:[`pec-deck`],setup:[`Sit facing the pad, chest against it.`,`Set the handles so your arms start in front of you.`],steps:[`With slightly bent elbows, open your arms out to the side.`,`Return slowly.`],mistakes:[`Shrugging your shoulders up.`,`Swinging the weight.`],stress:{},video:{youtubeId:`v0rJuhEa59c`,channel:`FIT.nl`}},"dumbbell-curl":{id:`dumbbell-curl`,name:`Seated Dumbbell Curl`,muscles:`Biceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench with a dumbbell in each hand, palms forward.`],steps:[`Curl the weights up, keeping your elbows at your sides.`,`Lower slowly to straight arms.`],mistakes:[`Swinging your body to lift the weight.`,`Elbows drifting forward.`],stress:{wrists:`moderate`},video:{youtubeId:`SW5JS2Wf2uQ`,channel:`Horton Barbell`}},"cable-curl":{id:`cable-curl`,name:`Cable Curl`,muscles:`Biceps`,equipment:[`cable`],setup:[`Set the pulley low with a straight bar.`,`Stand close with elbows at your sides.`],steps:[`Curl the bar up toward your shoulders.`,`Lower slowly.`],mistakes:[`Leaning back to help the weight up.`],stress:{wrists:`moderate`},video:{youtubeId:`0TtZgAuC8Vw`,channel:`Holly Perkins`}},"hammer-curl":{id:`hammer-curl`,name:`Seated Hammer Curl`,muscles:`Biceps, forearms`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright with dumbbells at your sides, palms facing each other.`],steps:[`Curl up keeping your palms facing each other.`,`Lower slowly.`],mistakes:[`Swinging the weights.`],stress:{},video:{youtubeId:`bdlqQAVdcEk`,channel:`Vivian Ngo`}},"leg-press":{id:`leg-press`,name:`Leg Press`,muscles:`Thighs, glutes`,equipment:[`leg-press`],setup:[`Sit back with your lower back flat against the pad.`,`Feet shoulder-width apart, in the middle or slightly high on the platform.`],steps:[`Release the safety handles and lower the platform slowly.`,`Stop when your knees reach about 90°, before your lower back starts to lift off the pad.`,`Push back up through your whole foot, without locking your knees.`],mistakes:[`Going so deep your hips curl up off the seat.`,`Knees caving inward — keep them pointing the same way as your toes.`],stress:{knees:`moderate`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`90NY9tka1TQ`,channel:`Vivian Ngo`}},"barbell-back-squat":{id:`barbell-back-squat`,name:`Barbell Back Squat`,muscles:`Thighs, glutes, core`,equipment:[`squat-rack`],setup:[`Set the bar at upper-chest height.`,`Step under it and rest it across your upper back.`],steps:[`Squat down until your thighs are about parallel to the floor.`,`Drive back up through your feet.`],mistakes:[`Knees caving in.`,`Rounding your back at the bottom.`],stress:{knees:`high`,lowerBack:`high`,neckUpperBack:`moderate`,feet:`moderate`},video:{youtubeId:`8PMjqgR8Wa8`,channel:`Barbell Rehab`}},"goblet-squat":{id:`goblet-squat`,name:`Goblet Squat`,muscles:`Thighs, glutes`,equipment:[`dumbbells`],setup:[`Hold one dumbbell upright against your chest.`,`Feet slightly wider than shoulders, toes turned out a little.`],steps:[`Sit down between your heels, keeping your chest up.`,`Stand back up.`],mistakes:[`Heels lifting off the floor.`,`Knees caving in.`],stress:{knees:`high`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`zsN2WvklwDk`,channel:`Janice Liang`}},"glute-bridge":{id:`glute-bridge`,name:`Dumbbell Glute Bridge`,muscles:`Glutes, hamstrings`,equipment:[`dumbbells`,`mat`],setup:[`Lie on your back on a mat, knees bent, feet flat and hip-width apart.`,`Rest a dumbbell across your hips and hold it in place.`],steps:[`Squeeze your glutes and lift your hips until your body is straight from knees to shoulders.`,`Hold for a second, then lower slowly.`],mistakes:[`Arching your lower back at the top — the lift should come from your glutes.`],stress:{},video:{youtubeId:`PSMW7iSi2BU`,channel:`Holly Perkins`}},"dumbbell-romanian-deadlift":{id:`dumbbell-romanian-deadlift`,name:`Dumbbell Romanian Deadlift`,muscles:`Hamstrings, glutes`,equipment:[`dumbbells`],setup:[`Stand holding dumbbells in front of your thighs, knees slightly bent.`],steps:[`Push your hips back and lower the weights along your legs, back flat.`,`Stand back up by squeezing your glutes.`],mistakes:[`Rounding your back.`,`Turning it into a squat by bending your knees a lot.`],stress:{lowerBack:`high`},video:{youtubeId:`dNQucsVf90I`,channel:`Vivian Ngo`}},"seated-leg-curl":{id:`seated-leg-curl`,name:`Leg Curl`,muscles:`Hamstrings`,equipment:[`leg-curl`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit just above your heels.`],steps:[`Bend your knees to pull the pad down and back.`,`Return slowly to almost straight.`],mistakes:[`Letting the weight snap your legs straight.`,`Lifting your hips to cheat the weight.`],stress:{knees:`moderate`},video:{youtubeId:`_2Kd0d-JEUM`,channel:`NASM`}},"hip-abduction":{id:`hip-abduction`,name:`Hip Abduction Machine`,muscles:`Outer glutes`,equipment:[`hip-abduction`],setup:[`Sit with your back against the pad, pads on the outside of your knees.`],steps:[`Push your knees outward.`,`Return slowly without letting the weights touch.`],mistakes:[`Rocking your body to move the weight.`],stress:{},video:{youtubeId:`5O_Y9l__iao`,channel:`Hammer Fitness`}},"leg-extension":{id:`leg-extension`,name:`Leg Extension`,muscles:`Front of thighs`,equipment:[`leg-extension`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit on your lower shins.`],steps:[`Straighten your legs.`,`Lower slowly.`],mistakes:[`Kicking the weight up fast.`],stress:{knees:`high`},video:{youtubeId:`MXvSzXEBOTI`,channel:`Steev`}},"dead-bug":{id:`dead-bug`,name:`Dead Bug`,muscles:`Deep core`,equipment:[`mat`],setup:[`Lie on your back with arms pointing up and knees bent at 90° above your hips.`],steps:[`Press your lower back gently into the mat.`,`Slowly lower one arm and the opposite leg toward the floor, then return. Switch sides.`],mistakes:[`Letting your lower back lift off the mat — make the movement smaller if it does.`],stress:{},video:{youtubeId:`bxn9FBrt4-A`,channel:`NASM`},weightKind:`bodyweight`},"pallof-press":{id:`pallof-press`,name:`Cable Pallof Press`,muscles:`Core, obliques`,equipment:[`cable`],setup:[`Set a cable at chest height with a single handle.`,`Stand side-on to the machine, holding the handle at your chest with both hands.`],steps:[`Press the handle straight out in front of you without letting it pull you sideways.`,`Hold for 2 seconds, bring it back. Do both sides.`],mistakes:[`Twisting toward the machine.`],stress:{},video:{youtubeId:`SY5lRzBPtM4`,channel:`Fitness Lab`}},"cable-crunch":{id:`cable-crunch`,name:`Cable Crunch`,muscles:`Abs`,equipment:[`cable`],setup:[`Set the pulley high with a rope.`,`Kneel facing the machine, rope beside your head.`],steps:[`Crunch down, bringing your elbows toward your knees.`,`Rise back up slowly.`],mistakes:[`Pulling with your arms instead of your abs.`,`Yanking your neck forward.`],stress:{lowerBack:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`0KEP6A1deBE`,channel:`Travis Tarrant`}},"side-plank":{id:`side-plank`,name:`Side Plank`,muscles:`Obliques, core`,equipment:[`mat`],setup:[`Lie on your side, propped up on your forearm, elbow under your shoulder.`],steps:[`Lift your hips so your body is a straight line.`,`Hold for 20–30 seconds. Switch sides.`],mistakes:[`Hips sagging toward the floor.`],stress:{shoulders:`moderate`},video:{youtubeId:`0M-erHBl48U`,channel:`Heal Fit Physio`},weightKind:`bodyweight`,timedSeconds:{min:20,max:30}}},r={push:{title:`Push — chest, shoulders, triceps`,slots:[{label:`Chest`,options:[`machine-chest-press`,`dumbbell-bench-press`]},{label:`Shoulders`,options:[`machine-shoulder-press`,`seated-dumbbell-shoulder-press`]},{label:`Upper chest`,options:[`incline-dumbbell-press`,`cable-fly`,`pec-deck-fly`]},{label:`Triceps`,options:[`cable-tricep-pushdown`,`overhead-cable-extension`,`assisted-dip`]},{label:`Side shoulders`,options:[`dumbbell-lateral-raise`]},{label:`Chest squeeze`,options:[`pec-deck-fly`,`cable-fly`]}]},pull:{title:`Pull — back, biceps`,slots:[{label:`Upper back`,options:[`lat-pulldown`,`assisted-pullup`]},{label:`Mid back`,options:[`chest-supported-row`,`seated-cable-row`]},{label:`Rear shoulders`,options:[`face-pull`,`reverse-pec-deck`]},{label:`Biceps`,options:[`dumbbell-curl`,`cable-curl`]},{label:`Second back`,options:[`seated-cable-row`,`assisted-pullup`,`chest-supported-row`]},{label:`Biceps & forearms`,options:[`hammer-curl`,`cable-curl`]}]},legs:{title:`Legs + Abs`,slots:[{label:`Thighs`,options:[`leg-press`,`barbell-back-squat`,`goblet-squat`]},{label:`Glutes`,options:[`glute-bridge`,`dumbbell-romanian-deadlift`]},{label:`Hamstrings`,options:[`seated-leg-curl`,`dumbbell-romanian-deadlift`]},{label:`Core`,options:[`dead-bug`,`pallof-press`]},{label:`Outer glutes`,options:[`hip-abduction`]},{label:`Abs`,options:[`pallof-press`,`side-plank`,`cable-crunch`]},{label:`Front thighs`,options:[`leg-extension`]}]}};function i(e){if(!(`speechSynthesis`in window))return;window.speechSynthesis.cancel();let t=new SpeechSynthesisUtterance(e);t.rate=1,window.speechSynthesis.speak(t)}function a(e){`vibrate`in navigator&&navigator.vibrate(e)}var o=null,s=!1;async function c(){if(`wakeLock`in navigator&&document.visibilityState===`visible`)try{o=await navigator.wakeLock.request(`screen`)}catch{o=null}}document.addEventListener(`visibilitychange`,()=>{s&&document.visibilityState===`visible`&&c()});function l(e){s=e,e?c():(o?.release(),o=null)}var u=[{id:`lean-muscle`,label:`Build lean muscle`,detail:`Gain muscle for a toned look`},{id:`strength`,label:`Get stronger`,detail:`Lift heavier, fewer reps`},{id:`general`,label:`General fitness`,detail:`Lighter, steady routine`}],d=[{id:`new`,label:`New to lifting`},{id:`some`,label:`Some experience`},{id:`experienced`,label:`Experienced`}],f=[{id:`knees`,label:`Knees`},{id:`lowerBack`,label:`Lower back`},{id:`neckUpperBack`,label:`Neck / upper back`},{id:`feet`,label:`Feet / ankles`},{id:`shoulders`,label:`Shoulders`},{id:`wrists`,label:`Wrists`}],p={goal:`lean-muscle`,experience:`new`,protectedAreas:[],avoidedExerciseIds:[]};function m(e,t){let n=e[t];return n?.[n.length-1]}function h(e,t){let n=e.sets.map(e=>e.amount).join(`, `),r=e.sets[e.sets.length-1]?.weight,i=t===`seconds`?` sec`:` reps`;return r==null?`${n}${i}`:`${r} lb × ${n}${i}`}function g(e,t,n){if(!e||e.sets.length===0)return{weight:null,message:n===`bodyweight`?`First time: aim for ${t.min}–${t.max} ${t.unit}.`:`First time: start light. Find a weight where the last 2 reps feel hard but your form stays clean.`};let r=e.sets.every(e=>e.amount>=t.max),i=e.sets.reduce((e,t)=>e+t.amount,0)/e.sets.length<t.min-2,a=e.sets[e.sets.length-1].weight;if(n===`bodyweight`||a===null)return{weight:null,message:r?`You hit ${t.max} on every set. Try a couple more ${t.unit} each set.`:`Aim for ${t.max} ${t.unit} on every set.`};let o=n===`assist`?Math.max(0,a-5):a+5,s=n===`assist`?a+5:Math.max(0,a-5);return r?{weight:o,message:n===`assist`?`You hit ${t.max} reps every set. Try ${o} lb of help (a little less).`:`You hit ${t.max} reps every set. Try ${o} lb.`}:i?{weight:s,message:`That was heavy. Try ${s} lb and aim for ${t.min}–${t.max} reps.`}:{weight:a,message:`Stay at ${a} lb and aim for ${t.max} reps on every set.`}}function _(e,t,n,r){let i=e[t]??[],a=i[i.length-1],o=a&&a.date===n?[...i.slice(0,-1),{...a,sets:[...a.sets,r]}]:[...i,{date:n,sets:[r]}];return{...e,[t]:o}}function v(e){let t=new Map;for(let[n,r]of Object.entries(e))for(let e of r){if(e.sets.length===0)continue;let r=t.get(e.date)??{date:e.date,entries:[]};r.entries.push({exerciseId:n,session:e}),t.set(e.date,r)}return[...t.values()].sort((e,t)=>t.date.localeCompare(e.date))}function y(e,t){let n=new Date(t);return n.setHours(0,0,0,0),n.setDate(n.getDate()-(n.getDay()+6)%7),v(e).filter(e=>new Date(e.date)>=n).length}function b(e,t){return e.filter(e=>e.sets.length>0).map(e=>{if(t===`bodyweight`)return Math.max(...e.sets.map(e=>e.amount));let n=e.sets.map(e=>e.weight??0);return t===`assist`?Math.min(...n):Math.max(...n)})}var x={waterGoal:8,proteinGoal:null,days:{}},ee=[{name:`2 eggs`,grams:12},{name:`Chicken breast (palm-size)`,grams:30},{name:`Greek yogurt (1 cup)`,grams:20},{name:`Protein shake (1 scoop)`,grams:25},{name:`Paneer (100 g)`,grams:18},{name:`Tofu (half block)`,grams:20},{name:`Dal / lentils (1 cup)`,grams:18},{name:`Milk (1 glass)`,grams:8}];function te(e){let t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return`${e.getFullYear()}-${t}-${n}`}function S(e,t){return e.days[t]??{glasses:0,protein:[]}}function C(e,t,n){return{...e,days:{...e.days,[t]:n}}}function ne(e,t,n){let r=S(e,t);return C(e,t,{...r,glasses:Math.max(0,r.glasses+n)})}function re(e,t,n){let r=S(e,t);return C(e,t,{...r,protein:[...r.protein,n]})}function ie(e,t,n){let r=S(e,t);return C(e,t,{...r,protein:r.protein.filter((e,t)=>t!==n)})}function w(e){return e.protein.reduce((e,t)=>e+t.grams,0)}function ae(e,t){if(e.trim()===``)return`Type what you ate.`;let n=Number(t);return t.trim()===``||!Number.isFinite(n)||n<=0||n>300?`Enter the protein in grams, between 1 and 300.`:null}var T=[`push`,`pull`,`legs`],E={new:4,some:5,experienced:7},D=`Pick a weight where the last 2 reps feel hard but your form stays clean.`,oe={"lean-muscle":{new:{sets:3,repMin:10,repMax:12,restSeconds:90,tip:D},some:{sets:3,repMin:8,repMax:12,restSeconds:90,tip:D},experienced:{sets:4,repMin:8,repMax:12,restSeconds:90,tip:`Take the last set close to failure with good form.`}},strength:{new:{sets:3,repMin:8,repMax:10,restSeconds:120,tip:`Learn the movement before going heavy.`},some:{sets:4,repMin:6,repMax:8,restSeconds:120,tip:D},experienced:{sets:4,repMin:5,repMax:6,restSeconds:150,tip:D}},general:{new:{sets:2,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},some:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},experienced:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Keep rests short.`}}};function se(e){return`${e.sets} sets of ${e.repMin}–${e.repMax} reps, resting about ${e.restSeconds} seconds between sets. ${e.tip}`}function O(e,t){return e.timedSeconds?{...e.timedSeconds,unit:`seconds`}:{min:t.repMin,max:t.repMax,unit:`reps`}}var k=`One light set of your first exercise at about half your usual weight.`,A={push:[`Arm circles: 10 forward, then 10 backward.`,`Wall slides: stand with your back to a wall and slowly slide your arms up and down, 10 reps.`,k],pull:[`Arm circles: 10 forward, then 10 backward.`,`Shoulder rolls: 10 slow rolls backward.`,k],legs:[`Leg swings: hold onto something steady and swing each leg forward and back 10 times, then side to side 10 times.`,`Hip circles: hands on hips, 10 slow circles each way.`,`Bodyweight glute bridges: 10 slow reps on a mat.`,k]},j={push:[`Doorway chest stretch: forearm on a door frame or post, step through until you feel your chest stretch. Each side.`,`Cross-body shoulder stretch: pull one arm across your chest with the other. Each side.`,`Overhead triceps stretch: reach one hand down your back and gently press the elbow with the other hand. Each side.`],pull:[`Lat stretch: hold a post at chest height and sit your hips back until you feel it along your side.`,`Cross-body shoulder stretch: pull one arm across your chest with the other. Each side.`,`Biceps stretch: palm flat on a wall behind you at shoulder height, then turn your body away. Each side.`],legs:[`Lying hamstring stretch: on your back, lift one straight leg and hold behind the thigh. Each side.`,`Figure-4 glute stretch: on your back, cross one ankle over the other knee and pull the bottom leg in. Each side.`,`Lying quad stretch: on your side, hold your top ankle and bring your heel toward you, only as far as is comfortable. Each side.`]},ce={neckUpperBack:[`Gentle neck stretch: tilt one ear toward your shoulder without pulling. Each side.`],lowerBack:[`Knees to chest: on your back, hug both knees in gently and breathe slowly.`]},M={neckUpperBack:[`Chin tucks: sit tall and gently slide your chin straight back, 10 slow reps.`,`Open books: lie on your side, knees bent, and slowly rotate your top arm open, 8 per side.`],lowerBack:[`Cat-cow on a mat: slowly round and arch your back, 10 reps, staying in a pain-free range.`],knees:[`Keep the bike seat high enough that your knee is only slightly bent at the bottom.`]},le={knees:`Go easy on your knees: use a shorter range and stop before any knee pain.`,lowerBack:`Go easy on your lower back: keep it pressed against the pad and lift lighter.`,neckUpperBack:`Go easy on your neck: keep your shoulders down and your head still.`,feet:`Go easy on your feet: keep your whole foot flat and wear supportive shoes.`,shoulders:`Go easy on your shoulders: use a smaller range and lighter weight.`,wrists:`Go easy on your wrists: keep them straight, not bent back.`};function ue(e,t){return e.equipment.every(e=>t.has(e))}function N(e,t){return t.filter(t=>e.stress[t]===`moderate`)}function de(e,t){return t.some(t=>e.stress[t]===`high`)}function P(e,t,r,i){return e.options.map(e=>n[e]).filter(e=>!i.has(e.id)&&!t.avoidedExerciseIds.includes(e.id)).filter(e=>ue(e,r)).filter(e=>!de(e,t.protectedAreas)).sort((e,n)=>N(e,t.protectedAreas).length-N(n,t.protectedAreas).length).map(n=>({exercise:n,slot:e,cautionAreas:N(n,t.protectedAreas)}))}function fe(e,t,n,r){return P(e.slot,t,new Set(n),new Set([...r,e.exercise.id]))}function pe(e,t,n){let i=new Set(n),a=r[e],o=a.slots.slice(0,E[t.experience]),s=new Set,c=[];for(let e of o){let[n]=P(e,t,i,s);n&&(s.add(n.exercise.id),c.push(n))}let l=[i.has(`bike`)?`5 minutes on the stationary bike at an easy pace.`:`5 minutes of brisk walking to warm up.`,...t.protectedAreas.flatMap(e=>M[e]??[]),...A[e]],u=[...j[e],...t.protectedAreas.flatMap(e=>ce[e]??[])];return{day:e,title:a.title,prescription:oe[t.goal][t.experience],warmUp:l,exercises:c,coolDown:u}}function F(e){return T[(T.indexOf(e)+1)%T.length]}var I={push:`Push`,pull:`Pull`,legs:`Legs + Abs`};function L(e){return T.indexOf(e)+1}function R(e){return`https://www.youtube.com/watch?v=${e}`}function z(e,t=``){return`<ul class="${t}">${e.map(e=>`<li>${e}</li>`).join(``)}</ul>`}function me(e){return e.cautionAreas.map(e=>`<p class="caution">${le[e]}</p>`).join(``)}function he(e){let{exercise:t}=e,n=e=>`<ol>${e.map(e=>`<li>${e}</li>`).join(``)}</ol>`;return`
    <h3>Set up</h3>
    ${n(t.setup)}
    <h3>How to do it</h3>
    ${n(t.steps)}
    <h3>Avoid</h3>
    ${z(t.mistakes,`mistakes`)}
    <a class="demo-link" href="${R(t.video.youtubeId)}" target="_blank" rel="noopener noreferrer">
      Watch the demo video ↗<small>by ${t.video.channel}</small>
    </a>
  `}function B(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function ge(e){let t=Math.floor(e/60),n=e%60;return`${t}:${String(n).padStart(2,`0`)}`}function V(e,t){return`<div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${t}" aria-valuenow="${e}">
    <div class="meter-fill" style="width: ${Math.min(100,Math.round(e/t*100))}%"></div>
  </div>`}function H(e,t){let n=e.waterGoal;return`
    <section class="card">
      <h2>Water</h2>
      <p class="fuel-total"><strong>${t}</strong> of ${n} glasses${t>=n?` — goal reached!`:``}</p>
      ${V(t,n)}
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
  `}function _e(e){return`
    <p class="hint">Set a daily goal to see how close you are. A common target for building muscle is about 0.7 g of protein per pound of body weight; a doctor or dietitian can tell you what's right for you.</p>
    <div class="inline-form">
      <input type="number" inputmode="numeric" min="1" placeholder="e.g. 100" value="${B(e.goal)}" data-field="protein-goal" aria-label="Daily protein goal in grams" />
      <span>g</span>
      <button type="button" class="secondary" data-action="set-protein-goal">Set goal</button>
    </div>
  `}function ve(e,t,n){let r=S(e,t),i=w(r),a=e.proteinGoal;return`
    <section class="card">
      <h2>Protein</h2>
      ${a===null?`<p class="fuel-total"><strong>${i}</strong> g today</p>`:`<p class="fuel-total"><strong>${i}</strong> of ${a} g${i>=a?` — goal reached!`:``}</p>${V(i,a)}`}
      ${r.protein.length===0?`<p class="hint">Nothing logged yet today. Tap a food below to add it.</p>`:`<ul class="entry-list">${r.protein.map((e,t)=>`
          <li>
            <span>${B(e.name)}</span>
            <span class="entry-grams">${e.grams} g</span>
            <button type="button" class="link-button" data-action="remove-protein" data-index="${t}" aria-label="Remove ${B(e.name)}">Remove</button>
          </li>`).join(``)}</ul>`}

      <h3>Quick add</h3>
      <div class="quick-grid">${ee.map((e,t)=>`
      <button type="button" class="chip quick-food" data-action="quick-protein" data-index="${t}">
        <span>${e.name}</span><small>~${e.grams} g</small>
      </button>`).join(``)}</div>
      <p class="hint small">Amounts are rough averages for a typical serving.</p>

      <h3>Something else</h3>
      <div class="inline-form">
        <input type="text" placeholder="What you ate" value="${B(n.name)}" data-field="protein-name" aria-label="Food name" maxlength="60" />
        <input type="number" inputmode="numeric" min="1" placeholder="g" value="${B(n.grams)}" data-field="protein-grams" aria-label="Protein in grams" class="grams-input" />
        <button type="button" class="secondary" data-action="add-protein">Add</button>
      </div>
      ${n.error?`<p class="form-error" role="alert">${n.error}</p>`:``}

      ${a===null?_e(n):`<button type="button" class="link-button" data-action="clear-protein-goal">Change protein goal (${a} g)</button>`}
    </section>
  `}function ye(e,t,n){return`
    <header class="screen-header">
      <h1>Fuel</h1>
      <p class="lead">Water and protein help your muscles recover. Today's log resets at midnight.</p>
    </header>
    ${H(e,S(e,t).glasses)}
    ${ve(e,t,n)}
  `}var U=3,W=10;function G(e){return e.timedSeconds?`seconds`:`reps`}function K(e){return new Date(e).toLocaleDateString(void 0,{weekday:`short`,month:`short`,day:`numeric`})}function q(e,t){let n=e.weightKind??`load`;return n===`bodyweight`?`${t} ${e.timedSeconds?`sec`:`reps`}`:n===`assist`?`${t} lb of help`:`${t} lb`}function J(e,t,n){let r={top:22,right:20,bottom:22,left:20},i=Math.min(...n),a=Math.max(...n),o=a-i||1,s=e=>r.left+e*(300-r.left-r.right)/(n.length-1),c=e=>r.top+(a-e)*(110-r.top-r.bottom)/o,l=n.map((e,t)=>`${t===0?`M`:`L`}${s(t).toFixed(1)},${c(e).toFixed(1)}`).join(` `),u=n.map((n,r)=>{let i=`${K(t[r])}: ${q(e,n)}`;return`
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
      <text x="${r.left}" y="106" class="axis-label">${K(t[0])}</text>
      <text x="${300-r.right}" y="106" class="axis-label" text-anchor="end">${K(t[t.length-1])}</text>
    </svg>
    <p class="chart-caption" aria-live="polite">Tap a dot to see that day.</p>
  `}function be(e){return Object.entries(e).filter(([e,t])=>n[e]&&t.some(e=>e.sets.length>0)).map(([e,t])=>{let r=n[e],i=t.filter(e=>e.sets.length>0),a=b(i,r.weightKind??`load`),o=i[i.length-1],s=(r.weightKind??`load`)===`assist`?Math.min(...a):Math.max(...a),c=a.length>=2?J(r,i.map(e=>e.date),a):`<p class="hint">Log it again to start a chart.</p>`;return`
        <section class="card progress-card">
          <h3 class="progress-name">${r.name}</h3>
          <p class="progress-stats">
            <span>Best: <strong>${q(r,s)}</strong></span>
            <span>Last: ${h(o,G(r))}</span>
          </p>
          ${c}
        </section>`}).join(``)}function xe(e){return v(e).slice(0,W).map(e=>{let t=e.entries.filter(({exerciseId:e})=>n[e]).map(({exerciseId:e,session:t})=>{let r=n[e];return`<li>${r.name}: <span class="hint">${h(t,G(r))}</span></li>`}).join(``);return`
        <section class="card">
          <h3 class="progress-name">${K(e.date)}</h3>
          <ul class="summary">${t}</ul>
        </section>`}).join(``)}function Se(e,t){let n=`
    <header class="screen-header">
      <h1>Your progress</h1>
      <p class="lead">Everything here comes from the sets you log in workout mode.</p>
    </header>`;if(v(e).length===0)return`${n}
      <section class="card empty">
        <p>No workouts logged yet. Start a workout and save your sets, and your progress will show up here.</p>
        <button type="button" class="secondary" data-nav="today">Go to today's workout</button>
      </section>`;let r=y(e,t);return`${n}
    <section class="card week-card">
      <p class="week-count"><strong>${r}</strong> of ${U}</p>
      <p>workouts this week${r>=U?` — goal reached!`:``}</p>
      <p class="hint">Aiming for 3 a week, like Mon, Wed, Fri. The week starts Monday.</p>
    </section>

    <h2 class="section-title">Exercises</h2>
    ${be(e)}

    <h2 class="section-title">Recent workouts</h2>
    ${xe(e)}
  `}function Ce(e,t){return{day:e.day,startedAt:t.toISOString(),exercises:e.exercises,prescription:e.prescription,index:0,setNumber:1,phase:e.exercises.length>0?`lift`:`done`,restEndsAt:null}}function Y(e){return e.exercises[e.index]}function we(e){return e.setNumber>=e.prescription.sets}function Te(e){return e.index>=e.exercises.length-1}function Ee(e){return{...e,phase:`log`}}function De(e,t){if(we(e)&&Te(e))return{...e,phase:`done`,restEndsAt:null};let n=t+e.prescription.restSeconds*1e3;return we(e)?{...e,index:e.index+1,setNumber:1,phase:`rest`,restEndsAt:n}:{...e,setNumber:e.setNumber+1,phase:`rest`,restEndsAt:n}}function Oe(e){return{...e,phase:`lift`,restEndsAt:null}}function ke(e,t,n){let r=Math.max(e.restEndsAt??n,n);return{...e,restEndsAt:r+t*1e3}}function Ae(e){return Te(e)?{...e,phase:`done`,restEndsAt:null}:{...e,index:e.index+1,setNumber:1,phase:`lift`,restEndsAt:null}}function je(e,t){let n=e.exercises.map((n,r)=>r===e.index?t:n);return{...e,exercises:n,setNumber:1,phase:`lift`,restEndsAt:null}}function X(e,t){return e.restEndsAt===null?0:Math.max(0,Math.ceil((e.restEndsAt-t)/1e3))}var Me=`gymGuide.v1`;function Ne(){return{profile:null,equipmentIds:[...t],equipmentConfirmed:!1,nextDay:`push`,history:{},session:null,nutrition:x}}function Pe(){try{let e=localStorage.getItem(Me);if(!e)return Ne();let t=JSON.parse(e);return{...Ne(),...t,profile:t.profile?{...p,...t.profile}:null,nutrition:{...x,...t.nutrition}}}catch{return Ne()}}function Z(e){try{return localStorage.setItem(Me,JSON.stringify(e)),!0}catch{return!1}}function Q(e,t,n){let r=m(e,n);return r&&r.date===t.startedAt?r.sets:[]}function Fe(e,t,n){let r=(e[n]??[]).filter(e=>e.date!==t.startedAt);return r[r.length-1]}function Ie(e,t,n){let r=O(n.exercise,t.prescription);return g(Fe(e,t,n.exercise.id),r,n.exercise.weightKind??`load`)}function Le(e,t){let n=O(t.exercise,e.prescription);return`${n.min}–${n.max} ${n.unit}`}function $(e){return`Exercise ${e.index+1} of ${e.exercises.length} · Day ${L(e.day)} ${I[e.day]}`}function Re(e,t=!1){return`
    <div class="session-controls">
      <button type="button" class="link-button" data-action="toggle-voice" aria-pressed="${e}">Voice: ${e?`on`:`off`}</button>
      ${t?`<button type="button" class="link-button" data-action="skip-exercise">Skip exercise</button>`:``}
      <button type="button" class="link-button" data-action="end-workout">End workout</button>
    </div>
  `}function ze(e,t,n,r){let i=Y(e);if(!i)return``;let a=Fe(t,e,i.exercise.id),o=O(i.exercise,e.prescription),s=Ie(t,e,i),c=Q(t,e,i.exercise.id);return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>${i.exercise.name}</h1>
    </header>

    ${r?`<p class="notice" role="status">${r}</p>`:``}

    <section class="card set-card">
      <p class="set-label">Set ${e.setNumber} of ${e.prescription.sets}</p>
      <p class="set-target">${Le(e,i)}</p>
      ${a?`<p class="last-time">Last time: ${h(a,o.unit)}</p>`:``}
      ${e.setNumber===1?`<p class="suggestion">${s.message}</p>`:``}
      ${c.length>0?`<p class="last-time">Today so far: ${h({date:``,sets:c},o.unit)}</p>`:``}
    </section>

    ${me(i)}

    <button type="button" class="primary big" data-action="set-done">Set done</button>

    <details class="card how-to">
      <summary>How to do it</summary>
      ${he(i)}
    </details>

    <div class="button-row">
      <button type="button" class="secondary" data-action="open-swap">Swap</button>
      <button type="button" class="secondary" data-action="hurt">This hurt</button>
    </div>
    ${Re(n,!0)}
  `}function Be(e,t){let n=Y(e);if(!n)return``;let r=t.length===0?`<section class="card empty"><p>There's no other exercise for this spot with your gym's equipment. You can skip it instead.</p></section>`:t.map((e,t)=>`
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
  `}function Ve(e,t,n){let r=Y(e);if(!r)return``;let i=r.exercise.weightKind??`load`,a=O(r.exercise,e.prescription),o=r.exercise.equipment.includes(`dumbbells`),s=i===`assist`?`Help from the machine (lb)`:o?`Weight (lb, per dumbbell)`:`Weight (lb)`,c=(e,t,n,r)=>`
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
  `}function He(e,t,n){let r=Y(e);if(!r)return``;let i=e.setNumber===1?`Next exercise: <strong>${r.exercise.name}</strong>`:`Next: set ${e.setNumber} of ${e.prescription.sets}, ${r.exercise.name}`;return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>Rest</h1>
    </header>

    <section class="card rest-card">
      <p class="timer" data-timer aria-live="off">${ge(X(e,t))}</p>
      <p>${i}</p>
      <p class="hint">You'll hear when rest is over. Sharing a machine? No rush: the next set waits until you tap Set done.</p>
    </section>

    <div class="button-row">
      <button type="button" class="secondary" data-action="add-rest">+30 seconds</button>
      <button type="button" class="secondary" data-action="skip-rest">Skip rest</button>
    </div>
    ${Re(n)}
  `}function Ue(e,t,n){return`
    <header class="screen-header">
      <p class="eyebrow">Workout done</p>
      <h1>Nice work!</h1>
      <p class="lead">Your sets are saved, so next time you'll see what you did today.</p>
    </header>

    <section class="card">
      <h2>Today</h2>
      <ul class="summary">${e.exercises.map(n=>{let r=Q(t,e,n.exercise.id),i=O(n.exercise,e.prescription).unit,a=r.length>0?h({date:``,sets:r},i):`skipped`;return`<li><strong>${n.exercise.name}</strong><br /><span class="hint">${a}</span></li>`}).join(``)}</ul>
    </section>

    <section class="card">
      <h2>Cool down</h2>
      <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
      ${z(n,`warm-up`)}
    </section>

    <button type="button" class="primary" data-action="close-session">Back to workouts</button>
  `}function We(e,t){let n=O(t.exercise,e.prescription);return`${n.min} to ${n.max} ${n.unit}`}function Ge(e,t){let n=Y(e);if(!n)return``;let r=[e.setNumber===1?`${n.exercise.name}.`:``,`Set ${e.setNumber} of ${e.prescription.sets}.`,`${We(e,n)}.`],i=Ie(t,e,n);return e.setNumber===1&&i.weight!==null&&r.push(`Try ${i.weight} pounds.`),r.filter(Boolean).join(` `)}function Ke(e){return`Rest ${e.prescription.restSeconds} seconds.`}function qe(e){let t=Y(e);return t?e.setNumber===1?`10 seconds. Next up, ${t.exercise.name}.`:`10 seconds. Get ready for set ${e.setNumber}.`:``}var Je=10,Ye=30,Xe=`If the pain was sharp or keeps coming back, stop and get it checked.`;function Ze(t){let r=Pe(),o=r.profile?r.equipmentConfirmed?`today`:`equipment`:`profile`,s=r.session?.day??r.nextDay,c=r.profile?{...r.profile}:{...p},g,v={name:``,grams:``,goal:``,error:``},y=!0,b={weight:``,amount:``},x=``,S,C=!1,w=``,E=null;function D(e){oe(Z(r)?e:`Couldn't save on this device — changes last until you close the page.`)}function oe(e){let n=t.querySelector(`.toast`);n&&(n.textContent=e,n.classList.add(`visible`),window.clearTimeout(g),g=window.setTimeout(()=>n.classList.remove(`visible`),2500))}function k(e){y&&e&&i(e)}function A(e){o=e,e===`profile`&&(c=r.profile?{...r.profile}:{...p}),j(),window.scrollTo(0,0)}function j(){let e=r.profile!==null&&r.equipmentConfirmed,n=r.session!==null;t.innerHTML=`
      <main class="screen">${n?U():ce()}</main>
      ${e&&!n?V():``}
      <div class="toast" role="status" aria-live="polite"></div>
    `}function ce(){return o===`profile`?le():o===`equipment`?de():o===`progress`?Se(r.history,new Date):o===`fuel`?ye(r.nutrition,te(new Date),v):B()}function M(e,t,n,r,i=``){return`<button type="button" class="chip${r?` active`:``}" data-group="${e}" data-value="${t}" aria-pressed="${r}">
      <span>${n}</span>${i?`<small>${i}</small>`:``}
    </button>`}function le(){let e=r.profile===null;return`
      <header class="screen-header">
        <h1>${e?`Let's set up your workouts`:`Your profile`}</h1>
        <p class="lead">This shapes which exercises you get and how many sets and reps. It stays on this phone.</p>
      </header>

      <section class="card">
        <h2>Your goal</h2>
        <div class="chip-col">
          ${u.map(e=>M(`goal`,e.id,e.label,c.goal===e.id,e.detail)).join(``)}
        </div>
      </section>

      <section class="card">
        <h2>Lifting experience</h2>
        <div class="chip-row">
          ${d.map(e=>M(`experience`,e.id,e.label,c.experience===e.id)).join(``)}
        </div>
      </section>

      <section class="card">
        <h2>Areas to protect</h2>
        <p class="hint">Tick anything that's injured, painful, or tight. Risky exercises for these areas are left out, and gentler ones are picked instead.</p>
        <div class="chip-row">
          ${f.map(e=>M(`area`,e.id,e.label,c.protectedAreas.includes(e.id))).join(``)}
        </div>
        <p class="disclaimer">This app isn't medical advice. If something hurts beyond normal muscle tiredness, stop, and check with a doctor or physical therapist about what's safe for you.</p>
      </section>

      ${ue()}

      <button type="button" class="primary" data-action="save-profile">${e?`Next: your gym's equipment`:`Save profile`}</button>
      ${e?``:`<button type="button" class="secondary" data-nav="equipment">Edit gym equipment</button>`}
    `}function ue(){let e=r.profile?.avoidedExerciseIds??[];return e.length===0?``:`
      <section class="card">
        <h2>Exercises that hurt</h2>
        <p class="hint">You marked these as hurting, so they're left out of your workouts.</p>
        <ul class="avoided-list">${e.filter(e=>n[e]).map(e=>`
        <li class="avoided-item">
          <span>${n[e].name}</span>
          <button type="button" class="link-button" data-action="unavoid" data-exercise="${e}">Bring back</button>
        </li>`).join(``)}</ul>
      </section>
    `}function N(e,t){if(!r.profile)return;let n=r.profile.avoidedExerciseIds.filter(t=>t!==e);r.profile={...r.profile,avoidedExerciseIds:t?[...n,e]:n},c={...c,avoidedExerciseIds:r.profile.avoidedExerciseIds}}function de(){let t=!r.equipmentConfirmed,n=new Set(r.equipmentIds);return`
      <header class="screen-header">
        <h1>What does your gym have?</h1>
        <p class="lead">Untick anything your gym doesn't have. You'll only get exercises you can actually do there.</p>
      </header>

      <section class="card equipment-list">
        ${e.map(e=>`
          <label class="equipment-item">
            <input type="checkbox" data-equipment="${e.id}" ${n.has(e.id)?`checked`:``} />
            <span><strong>${e.name}</strong><small>${e.hint}</small></span>
          </label>`).join(``)}
      </section>

      <button type="button" class="primary" data-action="save-equipment">${t?`See today's workout`:`Save equipment`}</button>
    `}function P(e,t,n){let{exercise:i}=e,a=m(r.history,i.id);return`
      <article class="exercise">
        <details>
          <summary>
            <span class="exercise-number">${t+1}</span>
            <span class="exercise-title">
              <strong>${i.name}</strong>
              <small>${i.muscles}</small>
              ${a?`<small class="last-time">Last time: ${h(a,n)}</small>`:``}
            </span>
            <span class="chevron" aria-hidden="true"></span>
          </summary>
          ${me(e)}
          ${he(e)}
          <button type="button" class="link-button hurt-link" data-action="avoid" data-exercise="${i.id}">This hurts me, replace it</button>
        </details>
      </article>
    `}function R(){return pe(s,r.profile??p,r.equipmentIds)}function B(){let e=R(),t=T.map(e=>`
      <button type="button" class="day-tab${e===s?` active`:``}" data-day="${e}" aria-pressed="${e===s}">
        <small class="day-number">Day ${L(e)}</small>${I[e]}${e===r.nextDay?`<small>Up next</small>`:``}
      </button>`).join(``),n=e.exercises.length>0,i=n?e.exercises.map((t,n)=>P(t,n,O(t.exercise,e.prescription).unit)).join(``):`<section class="card empty">
           <p>None of your gym's equipment fits this day yet.</p>
           <button type="button" class="secondary" data-action="go-equipment">Check your equipment</button>
         </section>`;return`
      <header class="screen-header">
        <p class="eyebrow">${s===r.nextDay?`Today's workout`:`Other workout`}</p>
        <h1>Day ${L(s)} · ${e.title}</h1>
      </header>

      <nav class="day-tabs" aria-label="Workout day">${t}</nav>

      ${n?`<button type="button" class="primary big" data-action="start-workout">Start workout</button>
             <p class="hint start-hint">Talks you through each set with a rest timer. Headphones recommended.</p>`:``}

      <section class="card">
        <h2>Warm up first</h2>
        ${z(e.warmUp,`warm-up`)}
      </section>

      <section class="card prescription">
        <h2>For every exercise</h2>
        <p>${se(e.prescription)}</p>
      </section>

      <p class="tap-hint">Tap an exercise to see how to do it.</p>
      <div class="exercise-list">${i}</div>

      <section class="card">
        <h2>Cool down</h2>
        <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
        ${z(e.coolDown,`warm-up`)}
      </section>

      ${n?`<button type="button" class="secondary" data-action="finish-workout">Mark done without workout mode</button>`:``}
    `}function V(){let e=(e,t)=>`<button type="button" class="nav-item${o===e||e===`profile`&&o===`equipment`?` active`:``}" data-nav="${e}">${t}</button>`;return`<nav class="bottom-nav" aria-label="Main">${e(`today`,`Workout`)}${e(`progress`,`Progress`)}${e(`fuel`,`Fuel`)}${e(`profile`,`Profile`)}</nav>`}function H(e){return t.querySelector(`input[data-field="${e}"]`)?.value??``}function _e(){v={name:H(`protein-name`),grams:H(`protein-grams`),goal:H(`protein-goal`),error:``}}function ve(e,t,n){_e();let i=te(new Date),a=r.nutrition;if(e===`water`)r.nutrition=ne(a,i,Number(t));else if(e===`water-goal`)r.nutrition={...a,waterGoal:Math.min(20,Math.max(1,a.waterGoal+Number(t)))};else if(e===`quick-protein`){let e=ee[Number(n)];e&&(r.nutrition=re(a,i,e))}else if(e===`add-protein`){let e=ae(v.name,v.grams);e?v.error=e:(r.nutrition=re(a,i,{name:v.name.trim(),grams:Number(v.grams)}),v={...v,name:``,grams:``})}else if(e===`remove-protein`)r.nutrition=ie(a,i,Number(n));else if(e===`set-protein-goal`){let e=Number(v.goal);!Number.isInteger(e)||e<1||e>400?v.error=`Enter a protein goal in whole grams, between 1 and 400.`:r.nutrition={...a,proteinGoal:e}}else e===`clear-protein-goal`&&(v.goal=String(a.proteinGoal??``),r.nutrition={...a,proteinGoal:null});Z(r)||(v.error=`Couldn't save on this device.`),j()}function U(){let e=r.session;if(!e)return``;switch(e.phase){case`lift`:return E?Be(e,E):ze(e,r.history,y,w);case`log`:return Ve(e,b,x);case`rest`:return He(e,Date.now(),y);case`done`:return Ue(e,r.history,R().coolDown)}}function W(){let e=r.session,t=e&&Y(e);if(!e||!t)return;let n=Q(r.history,e,t.exercise.id),i=n[n.length-1],a=Ie(r.history,e,t),o=O(t.exercise,e.prescription),s=i?.weight??a.weight;b={weight:s==null?``:String(s),amount:String(i?.amount??o.max)},x=``}function G(e){return t.querySelector(`input[data-field="${e}"]`)?.value.trim()??``}function K(){let e=r.session,t=e&&Y(e);if(!e||!t)return;let n=(t.exercise.weightKind??`load`)===`bodyweight`;b={weight:G(`weight`),amount:G(`amount`)};let i=Number(b.amount);if(!Number.isInteger(i)||i<1||i>300){x=`Enter how many reps (or seconds) you did, as a whole number.`,j();return}let a=null;if(!n&&(a=Number(b.weight),b.weight===``||!Number.isFinite(a)||a<0||a>1e3)){x=`Enter the weight in pounds. Use 0 if there was no added weight.`,j();return}r.history=_(r.history,t.exercise.id,e.startedAt,{weight:a,amount:i}),r.session=De(e,Date.now()),Z(r),q()}function q(e=!0){window.clearInterval(S);let t=r.session;t&&(t.phase===`rest`?(C=X(t,Date.now())<=Je,k(Ke(t)),S=window.setInterval(J,250)):t.phase===`lift`?e&&k(Ge(t,r.history)):t.phase===`done`&&(l(!1),r.nextDay=F(t.day),Z(r),k(`Workout complete. Nice work!`),a([200,100,200])),j(),window.scrollTo(0,0))}function J(){let e=r.session;if(!e||e.phase!==`rest`){window.clearInterval(S);return}let n=X(e,Date.now()),i=t.querySelector(`[data-timer]`);i&&(i.textContent=ge(n)),!C&&n<=Je&&n>0&&(C=!0,k(qe(e))),n===0&&(a([300]),r.session=Oe(e),Z(r),k(`Go.`),window.setTimeout(()=>q(),y?900:0),window.clearInterval(S))}function be(){window.clearInterval(S),E=null,l(!1),r.session=null,s=r.nextDay,Z(r),A(`today`)}function xe(){let e=r.session,t=e&&Y(e);if(!e||!t||!r.profile)return;N(t.exercise.id,!0);let n=e.exercises.map(e=>e.exercise.id),[i]=fe(t,r.profile,r.equipmentIds,n);i?(r.session=je(e,i),w=`Switched from ${t.exercise.name} to ${i.exercise.name}, which works the same muscles. ${Xe}`,k(`Switched to ${i.exercise.name}.`)):(r.session=Ae(e),w=`Skipped ${t.exercise.name}. There's no gentler option for it with your equipment. ${Xe}`),Z(r),q(!i)}function we(e,n){let i=r.session;if(i){if(e!==`hurt`&&e!==`toggle-voice`&&(w=``),e===`open-swap`){let e=Y(i);if(!e||!r.profile)return;let t=i.exercises.map(e=>e.exercise.id);E=fe(e,r.profile,r.equipmentIds,t),j(),window.scrollTo(0,0)}else if(e===`choose-swap`){let e=E?.[Number(n)];if(E=null,!e)return;r.session=je(i,e),Z(r),q()}else if(e===`cancel-swap`)E=null,j();else if(e===`hurt`)xe();else if(e===`set-done`)r.session=Ee(i),W(),j(),t.querySelector(`input[data-field="amount"]`)?.select();else if(e===`save-set`)K();else if(e===`add-rest`)r.session=ke(i,Ye,Date.now()),C=!1,Z(r),J();else if(e===`skip-rest`)r.session=Oe(i),Z(r),q();else if(e===`skip-exercise`)r.session=Ae(i),Z(r),q();else if(e===`toggle-voice`)y=!y,y||window.speechSynthesis?.cancel(),j();else if(e===`end-workout`){let e=i.exercises.some(e=>Q(r.history,i,e.exercise.id).length>0);if(!window.confirm(`End this workout now? Sets you've logged are saved.`))return;e&&(r.nextDay=F(i.day)),be()}else e===`close-session`&&be()}}t.addEventListener(`click`,e=>{let i=e.target.closest(`[data-point]`);if(i){let e=i.closest(`.progress-card`)?.querySelector(`.chart-caption`);e&&(e.textContent=i.dataset.point??``);return}let a=e.target.closest(`button`);if(!a)return;let{group:u,value:d,action:f,day:p,nav:m,step:h,delta:g,exercise:_,index:v}=a.dataset;if(h&&g){let e=t.querySelector(`input[data-field="${h}"]`);e&&(e.value=String(Math.max(0,(Number(e.value)||0)+Number(g))));return}if(u&&d){if(u===`goal`&&(c.goal=d),u===`experience`&&(c.experience=d),u===`area`){let e=d,t=c.protectedAreas;c.protectedAreas=t.includes(e)?t.filter(t=>t!==e):[...t,e]}j();return}if(p){s=p,j();return}if(m){A(m);return}if(f){if(r.session){we(f,v);return}if(o===`fuel`){ve(f,g,v);return}if(f===`save-profile`){let e=r.profile===null;r.profile={...c},e?(Z(r),A(`equipment`)):(A(`today`),D(`Profile saved — your workouts are updated.`))}else f===`save-equipment`?(r.equipmentIds=[...t.querySelectorAll(`input[data-equipment]`)].filter(e=>e.checked).map(e=>e.dataset.equipment??``),r.equipmentConfirmed=!0,A(`today`),D(`Equipment saved.`)):f===`avoid`&&_?(N(_,!0),j(),D(`${n[_]?.name??`That exercise`} won't be planned again. Bring it back any time in Profile.`)):f===`unavoid`&&_?(N(_,!1),j(),D(`${n[_]?.name??`That exercise`} is back in your workouts.`)):f===`go-equipment`?A(`equipment`):f===`start-workout`?(r.session=Ce(R(),new Date),Z(r),l(!0),q()):f===`finish-workout`&&(r.nextDay=F(s),s=r.nextDay,A(`today`),D(`Nice work! Next time: Day ${L(r.nextDay)} · ${I[r.nextDay]}.`))}}),r.session&&(r.session.phase===`rest`&&X(r.session,Date.now())===0&&(r.session=Oe(r.session)),r.session.phase===`log`&&W(),l(r.session.phase!==`done`),r.session.phase===`rest`&&(S=window.setInterval(J,250))),j()}var Qe=document.querySelector(`#app`);Qe&&Ze(Qe),`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});